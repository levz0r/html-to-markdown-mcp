#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import TurndownService from "turndown";
import { writeFile } from "fs/promises";
import { resolve } from "path";

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
            maxLength: {
              type: "number",
              description: "Maximum length of the returned markdown content in characters. If the content exceeds this length, it will be truncated with a message indicating the truncation. Use this for large pages to avoid token limits. Default: no limit.",
            },
            saveToFile: {
              type: "string",
              description: "Optional file path to save the full markdown content to. When specified, the full content is saved to the file and a summary is returned instead of the full content. Useful for very large pages.",
            },
          },
        },
      },
      {
        name: "save_markdown",
        description: "Save markdown content to a file. Use this to persist converted HTML to a markdown file on disk.",
        inputSchema: {
          type: "object",
          properties: {
            content: {
              type: "string",
              description: "The markdown content to save",
            },
            filePath: {
              type: "string",
              description: "The file path where the markdown should be saved (can be relative or absolute)",
            },
          },
          required: ["content", "filePath"],
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
    const { url, html, includeMetadata = true, maxLength, saveToFile } = request.params.arguments;

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

      // Save to file if requested
      if (saveToFile) {
        const absolutePath = resolve(saveToFile);
        await writeFile(absolutePath, content, "utf-8");
        console.error(`Saved markdown to: ${absolutePath}`);

        const metadataTitle = pageTitle || extractTitle(htmlContent);
        return {
          content: [
            {
              type: "text",
              text: `Successfully converted and saved to: ${absolutePath}\n\nTitle: ${metadataTitle}\nSize: ${content.length} characters\nLines: ${content.split('\n').length}`,
            },
          ],
        };
      }

      // Truncate if maxLength is specified and content exceeds it
      if (maxLength && content.length > maxLength) {
        const truncated = content.substring(0, maxLength);
        const remainingChars = content.length - maxLength;
        return {
          content: [
            {
              type: "text",
              text: `${truncated}\n\n---\n\n[Content truncated. Showing ${maxLength} of ${content.length} characters. ${remainingChars} characters omitted. Use saveToFile parameter to save the full content.]`,
            },
          ],
        };
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

  if (request.params.name === "save_markdown") {
    const { content, filePath } = request.params.arguments;

    if (!content) {
      throw new Error("'content' parameter is required");
    }

    if (!filePath) {
      throw new Error("'filePath' parameter is required");
    }

    try {
      const absolutePath = resolve(filePath);
      await writeFile(absolutePath, content, "utf-8");
      console.error(`Saved markdown to: ${absolutePath}`);

      return {
        content: [
          {
            type: "text",
            text: `Successfully saved markdown to: ${absolutePath}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error saving markdown file: ${error.message}`,
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
