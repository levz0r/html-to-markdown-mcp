FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy application code
COPY index.js ./

# Run as non-root user for security
RUN addgroup -g 1001 -S mcp && \
    adduser -u 1001 -S mcp -G mcp && \
    chown -R mcp:mcp /app

USER mcp

ENTRYPOINT ["node", "index.js"]
