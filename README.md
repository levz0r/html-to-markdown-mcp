# HTML to Markdown MCP Server

[![npm version](https://badge.fury.io/js/html-to-markdown-mcp.svg)](https://www.npmjs.com/package/html-to-markdown-mcp)
[![npm downloads](https://img.shields.io/npm/dm/html-to-markdown-mcp.svg)](https://www.npmjs.com/package/html-to-markdown-mcp)

An MCP (Model Context Protocol) server that converts HTML content to Markdown format using Turndown.js.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [With Claude Code](#with-claude-code)
  - [With Claude Code (Plugin)](#with-claude-code-plugin)
  - [With Claude Desktop](#with-claude-desktop)
  - [With Cursor](#with-cursor)
  - [With Codex](#with-codex)
  - [Using Local Development Version](#using-local-development-version)
  - [Available Tools](#available-tools)
  - [When does it activate?](#when-does-it-activate)
- [Local Development](#local-development)
  - [Testing](#testing)
  - [Publishing a New Version](#publishing-a-new-version)
- [Technical Details](#technical-details)
- [Related Projects](#related-projects)
- [License](#license)

## Features

- 🌐 **Fetch and convert web pages** - Automatically fetch HTML from any URL
- 🔄 Convert HTML to clean, formatted Markdown
- 📝 Preserves formatting (headers, links, code blocks, lists, tables)
- 🗑️ Automatically removes unwanted elements (scripts, styles, etc.)
- 📊 Auto-extracts page titles and metadata
- ⚡ Fast conversion using Turndown.js

## Installation

```bash
npm install -g html-to-markdown-mcp
```

Or use with npx (no installation required):

```bash
npx html-to-markdown-mcp
```

## Usage

### With Claude Code

Add the server using the Claude CLI:

```bash
claude mcp add --transport stdio html-to-markdown -- npx html-to-markdown-mcp
```

Or if installed globally:

```bash
claude mcp add --transport stdio html-to-markdown -- html-to-markdown-mcp
```

### With Claude Code (Plugin)

This project can also be installed as a Claude Code plugin, which bundles the MCP server and makes it easy to share with teams.

**Install directly from GitHub:**

```bash
/plugin marketplace add levz0r/html-to-markdown-mcp
/plugin install html-to-markdown@levz0r/html-to-markdown-mcp
```

**Or enable for your team** by adding to your project's `.claude/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "levz0r/html-to-markdown-mcp": {
      "source": {
        "source": "github",
        "repo": "levz0r/html-to-markdown-mcp"
      }
    }
  },
  "enabledPlugins": {
    "html-to-markdown@levz0r/html-to-markdown-mcp": true
  }
}
```

### With Claude Desktop

Add this server to your Claude Desktop configuration file:

**Using npx (recommended):**
```json
{
  "mcpServers": {
    "html-to-markdown": {
      "command": "npx",
      "args": ["html-to-markdown-mcp"]
    }
  }
}
```

**Or if installed globally:**
```json
{
  "mcpServers": {
    "html-to-markdown": {
      "command": "html-to-markdown-mcp"
    }
  }
}
```

### With Cursor

Add this server to your Cursor MCP settings file:

**Using npx (recommended):**
```json
{
  "mcpServers": {
    "html-to-markdown": {
      "command": "npx",
      "args": ["html-to-markdown-mcp"]
    }
  }
}
```

**Or if installed globally:**
```json
{
  "mcpServers": {
    "html-to-markdown": {
      "command": "html-to-markdown-mcp"
    }
  }
}
```

**Configuration methods:**

1. **Via Cursor Settings (Recommended):**
   - Open Cursor Settings: `⌘ + ,` (macOS) or `Ctrl + ,` (Windows/Linux)
   - Navigate to **File** → **Preferences** → **Cursor Settings**
   - Select the **MCP** option
   - Add a new global MCP server with the configuration above

2. **Manual file editing:**
   - **Global:** `~/.cursor/mcp.json` (available across all projects)
   - **Local:** `.cursor/mcp.json` in your project directory (project-specific)

After adding the configuration, restart Cursor for the changes to take effect.

### With Codex

Add this server to your Codex configuration using the CLI or by editing the config file:

**Option 1: Using Codex CLI (Recommended):**

```bash
codex mcp add html-to-markdown -- npx -y html-to-markdown-mcp
```

Or if installed globally:

```bash
codex mcp add html-to-markdown -- html-to-markdown-mcp
```

**Option 2: Manual Configuration:**

Edit `~/.codex/config.toml` and add:

```toml
[mcp_servers.html-to-markdown]
command = "npx"
args = ["-y", "html-to-markdown-mcp"]
```

Or if installed globally:

```toml
[mcp_servers.html-to-markdown]
command = "html-to-markdown-mcp"
```

The configuration file is located at `~/.codex/config.toml` on all platforms (macOS, Linux, and Windows).

After updating the configuration, restart Codex or your Codex session for the changes to take effect.

### Using Local Development Version

If you're developing or testing locally, you can add the MCP server directly from your local code:

**With Claude Code:**
```bash
claude mcp add --transport stdio html-to-markdown -- node /absolute/path/to/html-to-markdown-mcp/index.js
```

**With Claude Desktop:**
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

Replace `/absolute/path/to/html-to-markdown-mcp` with the actual path to your cloned repository.

### Available Tools

#### `html_to_markdown`

Fetch HTML from a URL or convert provided HTML content to Markdown format. **This tool is automatically used by Claude whenever HTML needs to be fetched and converted.**

**Parameters:**
- `url` (string): URL to fetch and convert (either `url` or `html` is required)
- `html` (string): Raw HTML content to convert (either `url` or `html` is required)
- `includeMetadata` (boolean, optional): Include metadata header (default: true)
- `maxLength` (number, optional): Maximum length of returned content in characters. Content exceeding this will be truncated with a message. Useful for large pages to avoid token limits.
- `saveToFile` (string, optional): File path to save the full content. When specified, saves the complete markdown and returns only a summary. Recommended for very large pages.

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

**Example 3: Fetch large page and save directly to file**

```javascript
{
  "url": "https://www.docuseal.com/docs/api",
  "saveToFile": "./docuseal-api.md"
}
```

**Example 4: Limit returned content length**

```javascript
{
  "url": "https://example.com",
  "maxLength": 5000
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

#### `save_markdown`

Save markdown content to a file on disk. Use this to persist converted HTML or any markdown content.

**Parameters:**
- `content` (string, required): The markdown content to save
- `filePath` (string, required): The file path where the markdown should be saved (can be relative or absolute)

**Example:**

```javascript
{
  "content": "# My Document\n\nThis is some markdown content.",
  "filePath": "./output/document.md"
}
```

**Usage:** You can chain both tools together - first convert HTML to markdown, then save the result to a file.

### When does it activate?

The MCP server will automatically be used by Claude when you:
- Ask to fetch information from a webpage
- Request to convert HTML to Markdown
- Need to extract content from a URL
- Ask to summarize or analyze a webpage
- Request to save markdown content to a file

**Example prompts that trigger it:**
- "What's on https://example.com?"
- "Fetch and summarize this article: https://..."
- "Convert this webpage to Markdown"
- "Extract the main content from this URL"
- "Save this webpage as a markdown file"
- "Fetch https://example.com and save it to article.md"

## Local Development

If you want to contribute or modify the server:

```bash
# Clone the repository
git clone https://github.com/levz0r/html-to-markdown-mcp.git
cd html-to-markdown-mcp

# Install dependencies
npm install

# Run the server
npm start
```

### Testing

Run the test suite using Node's built-in test runner:

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

The test suite includes:
- Tool discovery tests
- HTML to markdown conversion tests
- URL fetching tests
- File saving tests
- Truncation and large page handling tests
- Integration workflow tests

### Publishing a New Version

The project uses automated CI/CD for publishing to npm:

1. **Update version** using npm version scripts:
   ```bash
   npm run version:patch  # 1.0.0 -> 1.0.1
   npm run version:minor  # 1.0.0 -> 1.1.0
   npm run version:major  # 1.0.0 -> 2.0.0
   ```

2. **Push the tag** to trigger automated publishing:
   ```bash
   git push && git push --tags
   ```

3. **GitHub Actions** will automatically:
   - Run all tests
   - Publish to npm if tests pass
   - Add provenance information to the package

**Manual publishing** (if needed):
```bash
npm run release:patch --otp=<code>
npm run release:minor --otp=<code>
npm run release:major --otp=<code>
```

## Technical Details

- **Protocol:** Model Context Protocol (MCP)
- **Conversion Library:** Turndown.js
- **Transport:** stdio
- **Node.js:** ES modules

## Related Projects

This server uses the same conversion approach as [markdown-printer](https://github.com/levz0r/markdown-printer), a browser extension for saving web pages as Markdown files.

## License

MIT
