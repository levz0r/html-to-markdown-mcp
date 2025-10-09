#!/usr/bin/env node

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { spawn } from "child_process";

async function testServer() {
  console.log("Starting HTML to Markdown MCP Server test...\n");

  // Spawn the server process
  const serverProcess = spawn("node", ["index.js"], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  // Create client with stdio transport
  const transport = new StdioClientTransport({
    command: "node",
    args: ["index.js"],
  });

  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    }
  );

  try {
    // Connect to server
    await client.connect(transport);
    console.log("✓ Connected to server\n");

    // List available tools
    const tools = await client.listTools();
    console.log("Available tools:");
    tools.tools.forEach((tool) => {
      console.log(`  - ${tool.name}: ${tool.description}`);
    });
    console.log();

    // Test 1: Simple HTML conversion
    console.log("Test 1: Simple HTML conversion");
    const testHtml1 = "<h1>Hello World</h1><p>This is a <strong>test</strong> with a <a href='https://example.com'>link</a>.</p>";

    const result1 = await client.callTool({
      name: "html_to_markdown",
      arguments: {
        html: testHtml1,
      },
    });

    console.log("Input HTML:", testHtml1);
    console.log("Output Markdown:");
    console.log(result1.content[0].text);
    console.log();

    // Test 2: HTML with metadata
    console.log("Test 2: HTML with metadata");
    const testHtml2 = "<h2>Article Title</h2><p>Article content here.</p>";

    const result2 = await client.callTool({
      name: "html_to_markdown",
      arguments: {
        html: testHtml2,
        includeMetadata: true,
        sourceUrl: "https://example.com/article",
        title: "Test Article",
      },
    });

    console.log("Input HTML:", testHtml2);
    console.log("Output Markdown with metadata:");
    console.log(result2.content[0].text);
    console.log();

    // Test 3: HTML with code block and list
    console.log("Test 3: HTML with code block and list");
    const testHtml3 = `
      <h3>Installation</h3>
      <ul>
        <li>Step 1: Install</li>
        <li>Step 2: Configure</li>
        <li>Step 3: Run</li>
      </ul>
      <pre><code>npm install</code></pre>
    `;

    const result3 = await client.callTool({
      name: "html_to_markdown",
      arguments: {
        html: testHtml3,
      },
    });

    console.log("Output Markdown:");
    console.log(result3.content[0].text);
    console.log();

    console.log("✓ All tests passed!");

  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  } finally {
    await client.close();
    serverProcess.kill();
  }
}

testServer();
