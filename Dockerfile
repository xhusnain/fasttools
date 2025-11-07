# ----------------------------
# Base image for Node.js
# Using Debian-based image for onnxruntime-node compatibility (requires glibc)
# ----------------------------
FROM node:20-slim AS base

WORKDIR /app

# ----------------------------
# Dependency installation
# ----------------------------
FROM base AS deps

# Enable corepack and install a stable pnpm version
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Copy bin directory with yt-dlp binary (already downloaded and committed to repo)
COPY bin ./bin

# Install dependencies (safe for CI/CD)
RUN pnpm install --no-frozen-lockfile

# Verify yt-dlp binary exists
RUN if [ -f ./bin/yt-dlp ]; then \
      FILE_SIZE=$(stat -c%s ./bin/yt-dlp 2>/dev/null || stat -f%z ./bin/yt-dlp 2>/dev/null || echo "0"); \
      echo "✅ yt-dlp binary found in deps stage"; \
      echo "File size: $FILE_SIZE bytes"; \
      if [ "$FILE_SIZE" -eq "0" ]; then \
        echo "❌ ERROR: yt-dlp binary is 0 bytes!"; \
        echo "Please ensure bin/yt-dlp is properly committed to the repository."; \
        exit 1; \
      fi; \
      chmod +x ./bin/yt-dlp; \
    else \
      echo "❌ ERROR: yt-dlp binary not found in bin/ directory!"; \
      echo "Please download yt-dlp and place it in bin/yt-dlp"; \
      echo "Download from: https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux"; \
      exit 1; \
    fi

# ----------------------------
# Build stage
# ----------------------------
FROM base AS builder
WORKDIR /app

# Use same pnpm version as in deps
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate

# Copy dependencies and source
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Copy bin directory from deps stage (contains yt-dlp binary)
COPY --from=deps /app/bin ./bin

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# (Optional) Download models if needed
RUN pnpm run download-models

# Build the application
# ✅ Do not require API keys at build time for server-only routes
RUN pnpm run build

# ----------------------------
# Production runtime
# ----------------------------
FROM base AS runner
WORKDIR /app

# Install ffmpeg and python3 for video/audio processing
# Note: We use standalone yt-dlp binary which doesn't require Python, but keeping it as fallback
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Set runtime environment variables (can be overridden via docker-compose)
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=7000
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN groupadd -r -g 1001 nodejs \
  && useradd -r -u 1001 -g nodejs nextjs

# Copy the built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy bin directory (contains yt-dlp binary) from builder
# The postbuild script already copied it to .next/standalone/bin, but we also copy to root for direct access
COPY --from=builder --chown=nextjs:nodejs /app/bin ./bin

# Verify yt-dlp is executable and working (must be done as root before switching to non-root user)
RUN if [ -f ./bin/yt-dlp ]; then \
      chmod +x ./bin/yt-dlp && \
      FILE_SIZE=$(stat -c%s ./bin/yt-dlp 2>/dev/null || stat -f%z ./bin/yt-dlp 2>/dev/null || echo "0"); \
      echo "✅ yt-dlp found at ./bin/yt-dlp (${FILE_SIZE} bytes)"; \
      if [ "$FILE_SIZE" -eq "0" ]; then \
        echo "❌ ERROR: yt-dlp binary is 0 bytes!"; \
        exit 1; \
      fi; \
      echo "Testing yt-dlp..." && \
      ./bin/yt-dlp --version && \
      echo "✅ yt-dlp is working!"; \
    else \
      echo "❌ ERROR: yt-dlp not found in ./bin directory!"; \
      exit 1; \
    fi

# Use non-root user
USER nextjs

# ----------------------------
# ✅ Expose on port 7000
# ----------------------------
EXPOSE 7000

# Start the server
CMD ["node", "server.js"]
