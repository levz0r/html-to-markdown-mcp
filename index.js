#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import TurndownService from "turndown";

// Create MCP server
const server = new Server(
  {
    name: "html-to-markdown",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Initialize Turndown service with configuration similar to markdown-printer
const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Remove unwanted elements
turndownService.remove(["script", "style", "noscript", "iframe", "svg"]);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "html_to_markdown",
        description: "Fetch HTML from a URL or convert provided HTML content to Markdown format. Automatically extracts and converts web pages to clean, readable Markdown. Use this whenever you need to fetch and extract information from a webpage.",
        inputSchema: {
          type: "object",
          properties: {
            url: {
              type: "string",
              description: "URL to fetch HTML from. If provided, the HTML will be automatically fetched and converted. Either 'url' or 'html' must be provided.",
            },
            html: {
              type: "string",
              description: "Raw HTML content to convert to Markdown. Use this if you already have HTML content. Either 'url' or 'html' must be provided.",
            },
            includeMetadata: {
              type: "boolean",
              description: "Include metadata header (source URL, title, and timestamp) in the output",
              default: true,
            },
          },
        },
      },
    ],
  };
});

// Helper function to extract title from HTML
function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    return titleMatch[1].trim();
  }

  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1Match) {
    return h1Match[1].trim();
  }

  return "Untitled";
}

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "html_to_markdown") {
    const { url, html, includeMetadata = true } = request.params.arguments;

    if (!url && !html) {
      throw new Error("Either 'url' or 'html' parameter is required");
    }

    try {
      let htmlContent = html;
      let pageUrl = url;
      let pageTitle = null;

      // If URL is provided, fetch the HTML
      if (url) {
        console.error(`Fetching HTML from: ${url}`);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
        }

        htmlContent = await response.text();
        pageUrl = url;
        pageTitle = extractTitle(htmlContent);
        console.error(`Extracted title: ${pageTitle}`);
      }

      // Convert HTML to Markdown
      const markdown = turndownService.turndown(htmlContent);

      // Add metadata header if requested
      let content = markdown;
      if (includeMetadata) {
        const metadataTitle = pageTitle || extractTitle(htmlContent);
        const metadataUrl = pageUrl || "Unknown";
        const timestamp = new Date().toISOString();

        content = `# ${metadataTitle}\n\n**Source:** ${metadataUrl}\n**Saved:** ${timestamp}\n\n---\n\n${markdown}`;
      }

      return {
        content: [
          {
            type: "text",
            text: content,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error converting HTML to Markdown: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }

  throw new Error(`Unknown tool: ${request.params.name}`);
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("HTML to Markdown MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
