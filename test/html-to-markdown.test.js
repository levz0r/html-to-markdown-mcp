import { describe, it, before, after } from "node:test";
import assert from "node:assert";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { readFile, unlink } from "fs/promises";
import { existsSync } from "fs";

describe("HTML to Markdown MCP Server", () => {
  let client;
  let transport;

  before(async () => {
    // Create client and connect
    transport = new StdioClientTransport({
      command: "node",
      args: ["./index.js"],
    });

    client = new Client(
      {
        name: "test-client",
        version: "1.0.0",
      },
      {
        capabilities: {},
      }
    );

    await client.connect(transport);
  });

  after(async () => {
    // Cleanup
    await client.close();

    // Remove test files
    const testFiles = [
      "./test-output.md",
      "./test-custom.md",
      "./test-save-markdown.md",
    ];

    for (const file of testFiles) {
      if (existsSync(file)) {
        await unlink(file);
      }
    }
  });

  describe("Tool Discovery", () => {
    it("should list available tools", async () => {
      const tools = await client.listTools();

      assert.strictEqual(tools.tools.length, 2);
      assert.ok(tools.tools.find((t) => t.name === "html_to_markdown"));
      assert.ok(tools.tools.find((t) => t.name === "save_markdown"));
    });
  });

  describe("html_to_markdown tool", () => {
    it("should convert HTML string to markdown", async () => {
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: "<h1>Test</h1><p>This is a <strong>test</strong>.</p>",
          includeMetadata: false,
        },
      });

      assert.strictEqual(result.content[0].type, "text");
      assert.ok(result.content[0].text.includes("# Test"));
      assert.ok(result.content[0].text.includes("**test**"));
    });

    it("should convert HTML with lists", async () => {
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: "<ul><li>Item 1</li><li>Item 2</li></ul>",
          includeMetadata: false,
        },
      });

      assert.ok(result.content[0].text.includes("- ") || result.content[0].text.includes("-   "));
      assert.ok(result.content[0].text.includes("Item 1"));
      assert.ok(result.content[0].text.includes("Item 2"));
    });

    it("should fetch and convert URL", async () => {
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          url: "https://example.com",
          includeMetadata: true,
        },
      });

      assert.strictEqual(result.content[0].type, "text");
      assert.ok(result.content[0].text.includes("Example Domain"));
      assert.ok(result.content[0].text.includes("**Source:** https://example.com"));
    });

    it("should include metadata when requested", async () => {
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: "<title>Test Page</title><h1>Hello</h1>",
          includeMetadata: true,
        },
      });

      assert.ok(result.content[0].text.includes("**Source:**"));
      assert.ok(result.content[0].text.includes("**Saved:**"));
    });

    it("should not include metadata when disabled", async () => {
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: "<h1>Hello</h1>",
          includeMetadata: false,
        },
      });

      assert.ok(!result.content[0].text.includes("**Source:**"));
      assert.ok(!result.content[0].text.includes("**Saved:**"));
    });

    it("should require either url or html parameter", async () => {
      try {
        await client.callTool({
          name: "html_to_markdown",
          arguments: {},
        });
        assert.fail("Should have thrown an error");
      } catch (error) {
        assert.ok(error.message.includes("Either 'url' or 'html' parameter is required"));
      }
    });

    it("should truncate content when maxLength is specified", async () => {
      const longHtml = "<h1>Long Document</h1>" + "<p>Content</p>".repeat(100);
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: longHtml,
          includeMetadata: false,
          maxLength: 100,
        },
      });

      const text = result.content[0].text;
      assert.ok(text.includes("[Content truncated"));
      assert.ok(text.includes("Showing 100 of"));
      // The truncated content should be around 100 chars + truncation message
      assert.ok(text.length > 100);
      assert.ok(text.length < 500); // reasonable upper bound
    });

    it("should save to file when saveToFile is specified", async () => {
      const filePath = "./test-save-to-file.md";
      const result = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: "<h1>Save Test</h1><p>This should be saved to a file.</p>",
          includeMetadata: true,
          saveToFile: filePath,
        },
      });

      const text = result.content[0].text;
      assert.ok(text.includes("Successfully converted and saved"));
      assert.ok(text.includes("Save Test")); // Title should be in the summary
      assert.ok(existsSync(filePath));

      const savedContent = await readFile(filePath, "utf-8");
      assert.ok(savedContent.includes("# Save Test"));
      assert.ok(savedContent.includes("This should be saved to a file"));

      // Cleanup
      await unlink(filePath);
    });
  });

  describe("save_markdown tool", () => {
    it("should save markdown content to file", async () => {
      const content = "# Test Document\n\nThis is a test.";
      const filePath = "./test-save-markdown.md";

      const result = await client.callTool({
        name: "save_markdown",
        arguments: {
          content,
          filePath,
        },
      });

      assert.ok(result.content[0].text.includes("Successfully saved"));
      assert.ok(existsSync(filePath));

      const savedContent = await readFile(filePath, "utf-8");
      assert.strictEqual(savedContent, content);
    });

    it("should require content parameter", async () => {
      try {
        await client.callTool({
          name: "save_markdown",
          arguments: {
            filePath: "./test.md",
          },
        });
        assert.fail("Should have thrown an error");
      } catch (error) {
        assert.ok(error.message.includes("'content' parameter is required"));
      }
    });

    it("should require filePath parameter", async () => {
      try {
        await client.callTool({
          name: "save_markdown",
          arguments: {
            content: "test",
          },
        });
        assert.fail("Should have thrown an error");
      } catch (error) {
        assert.ok(error.message.includes("'filePath' parameter is required"));
      }
    });
  });

  describe("Workflow Integration", () => {
    it("should convert HTML and save to file", async () => {
      // First, convert HTML to markdown
      const convertResult = await client.callTool({
        name: "html_to_markdown",
        arguments: {
          html: "<h1>Integration Test</h1><p>This is an integration test.</p>",
          includeMetadata: false,
        },
      });

      const markdown = convertResult.content[0].text;

      // Then, save the markdown to a file
      const saveResult = await client.callTool({
        name: "save_markdown",
        arguments: {
          content: markdown,
          filePath: "./test-output.md",
        },
      });

      assert.ok(saveResult.content[0].text.includes("Successfully saved"));
      assert.ok(existsSync("./test-output.md"));

      const savedContent = await readFile("./test-output.md", "utf-8");
      assert.ok(savedContent.includes("# Integration Test"));
      assert.ok(savedContent.includes("integration test"));
    });
  });
});
