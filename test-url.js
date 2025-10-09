#!/usr/bin/env node

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function testUrlFetching() {
  console.log("Testing HTML to Markdown MCP Server with URL fetching...\n");

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
    await client.connect(transport);
    console.log("✓ Connected to server\n");

    // Test: Fetch and convert a real webpage
    console.log("Test: Fetching and converting example.com");
    console.log("URL: https://example.com\n");

    const result = await client.callTool({
      name: "html_to_markdown",
      arguments: {
        url: "https://example.com",
        includeMetadata: true,
      },
    });

    console.log("Result:");
    console.log(result.content[0].text);
    console.log("\n✓ URL fetching test passed!");

  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

testUrlFetching();
