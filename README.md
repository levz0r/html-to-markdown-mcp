# HTML to Markdown MCP Server

An MCP (Model Context Protocol) server that converts HTML content to Markdown format using Turndown.js.

## Features

- 🌐 **Fetch and convert web pages** - Automatically fetch HTML from any URL
- 🔄 Convert HTML to clean, formatted Markdown
- 📝 Preserves formatting (headers, links, code blocks, lists, tables)
- 🗑️ Automatically removes unwanted elements (scripts, styles, etc.)
- 📊 Auto-extracts page titles and metadata
- ⚡ Fast conversion using Turndown.js

## Installation

```bash
npm install
```

## Usage

### With Claude Code

Add the server using the Claude CLI:

```bash
claude mcp add --transport stdio html-to-markdown -- node /absolute/path/to/html-to-markdown-mcp/index.js
```

### With Claude Desktop

Add this server to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "html-to-markdown": {
      "command": "node",
      "args": ["/absolute/path/to/html-to-markdown-mcp/index.js"]
    }
  }
}
```

### Available Tools

#### `html_to_markdown`

Fetch HTML from a URL or convert provided HTML content to Markdown format. **This tool is automatically used by Claude whenever HTML needs to be fetched and converted.**

**Parameters:**
- `url` (string): URL to fetch and convert (either `url` or `html` is required)
- `html` (string): Raw HTML content to convert (either `url` or `html` is required)
- `includeMetadata` (boolean, optional): Include metadata header (default: true)

**Example 1: Fetch from URL (Recommended)**

```javascript
{
  "url": "https://example.com"
}
```

**Example 2: Convert raw HTML**

```javascript
{
  "html": "<h1>Hello World</h1><p>This is a <strong>test</strong>.</p>"
}
```

**Output:**

```markdown
# Example Domain

**Source:** https://example.com
**Saved:** 2025-10-09T12:00:00.000Z

---

# Example Domain

This domain is for use in illustrative examples...
```

### When does it activate?

The MCP server will automatically be used by Claude when you:
- Ask to fetch information from a webpage
- Request to convert HTML to Markdown
- Need to extract content from a URL
- Ask to summarize or analyze a webpage

**Example prompts that trigger it:**
- "What's on https://example.com?"
- "Fetch and summarize this article: https://..."
- "Convert this webpage to Markdown"
- "Extract the main content from this URL"

## Testing

Test the server with the included test scripts:

```bash
# Test basic HTML conversion
node test.js

# Test URL fetching
node test-url.js
```

Or run the server directly:

```bash
npm start
```

The server will start and listen for MCP protocol messages on stdin/stdout.

## Technical Details

- **Protocol:** Model Context Protocol (MCP)
- **Conversion Library:** Turndown.js
- **Transport:** stdio
- **Node.js:** ES modules

## Related Projects

This server uses the same conversion approach as [markdown-printer](https://github.com/levz0r/markdown-printer), a browser extension for saving web pages as Markdown files.

## License

MIT
