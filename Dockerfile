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

# Copy scripts directory needed for postinstall script
COPY scripts ./scripts

# Create bin directory for yt-dlp binary
RUN mkdir -p bin

# Install dependencies (safe for CI/CD)
# This will run postinstall script which downloads yt-dlp
RUN pnpm install --no-frozen-lockfile

# Verify yt-dlp was downloaded successfully
RUN if [ -f ./bin/yt-dlp ]; then \
      FILE_SIZE=$(stat -c%s ./bin/yt-dlp 2>/dev/null || stat -f%z ./bin/yt-dlp 2>/dev/null || echo "0"); \
      echo "✅ yt-dlp downloaded in deps stage"; \
      echo "File size: $FILE_SIZE bytes"; \
      if [ "$FILE_SIZE" -eq "0" ]; then \
        echo "❌ ERROR: yt-dlp binary is 0 bytes after download!"; \
        echo "The download may have failed. Retrying download..."; \
        node scripts/download-yt-dlp.js || exit 1; \
        FILE_SIZE=$(stat -c%s ./bin/yt-dlp 2>/dev/null || stat -f%z ./bin/yt-dlp 2>/dev/null || echo "0"); \
        if [ "$FILE_SIZE" -eq "0" ]; then \
          echo "❌ ERROR: Retry also failed. yt-dlp binary is still 0 bytes."; \
          exit 1; \
        fi; \
      fi; \
      chmod +x ./bin/yt-dlp && \
      ./bin/yt-dlp --version || (echo "❌ ERROR: yt-dlp verification failed" && exit 1); \
    else \
      echo "❌ ERROR: yt-dlp binary not found after postinstall!"; \
      echo "Attempting manual download..."; \
      node scripts/download-yt-dlp.js || exit 1; \
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
# Copy bin directory from deps stage (contains yt-dlp binary from postinstall)
# This ensures the downloaded yt-dlp binary is preserved even if bin/ exists in source
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

# Install ffmpeg for video/audio processing (required by yt-dlp for some formats)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
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

# Copy bin directory (contains yt-dlp binary) - CRITICAL: Must be at /app/bin
# Check if bin exists in builder first and verify file size
RUN if [ -d /app/bin ] && [ -f /app/bin/yt-dlp ]; then \
      FILE_SIZE=$(stat -c%s /app/bin/yt-dlp 2>/dev/null || stat -f%z /app/bin/yt-dlp 2>/dev/null || echo "0"); \
      echo "✅ yt-dlp found in builder at /app/bin/yt-dlp"; \
      echo "File size: $FILE_SIZE bytes"; \
      if [ "$FILE_SIZE" -eq "0" ]; then \
        echo "❌ ERROR: yt-dlp binary is 0 bytes in builder!"; \
        exit 1; \
      fi; \
    else \
      echo "❌ ERROR: yt-dlp not found in builder /app/bin/"; \
      ls -la /app/bin/ 2>/dev/null || echo "bin directory does not exist in builder"; \
      exit 1; \
    fi

# Copy bin directory to /app/bin (main location)
COPY --from=builder --chown=nextjs:nodejs /app/bin ./bin

# Also ensure it's in standalone directory (postbuild should have done this, but double-check)
RUN if [ -d .next/standalone ] && [ -f ./bin/yt-dlp ]; then \
      mkdir -p .next/standalone/bin && \
      cp ./bin/yt-dlp .next/standalone/bin/yt-dlp && \
      chmod +x .next/standalone/bin/yt-dlp && \
      echo "✅ Also copied yt-dlp to .next/standalone/bin/"; \
    fi

# Ensure yt-dlp is executable and verify it exists and has content (must be done as root before switching to non-root user)
RUN echo "🔍 Verifying yt-dlp installation..." && \
    if [ -f ./bin/yt-dlp ]; then \
      FILE_SIZE=$(stat -c%s ./bin/yt-dlp 2>/dev/null || stat -f%z ./bin/yt-dlp 2>/dev/null || echo "0"); \
      echo "✅ yt-dlp found at ./bin/yt-dlp"; \
      echo "File size: $FILE_SIZE bytes"; \
      ls -lh ./bin/yt-dlp; \
      if [ "$FILE_SIZE" -eq "0" ]; then \
        echo "❌ ERROR: yt-dlp binary is 0 bytes!"; \
        echo "This means the download failed or file was corrupted during copy."; \
        exit 1; \
      fi; \
      chmod +x ./bin/yt-dlp && \
      echo "Testing yt-dlp version..." && \
      VERSION_OUTPUT=$(./bin/yt-dlp --version 2>&1) && \
      if [ -z "$VERSION_OUTPUT" ]; then \
        echo "❌ ERROR: yt-dlp --version returned empty output!"; \
        echo "Binary may be corrupted or incompatible with this system."; \
        exit 1; \
      fi; \
      echo "✅ yt-dlp version: $VERSION_OUTPUT"; \
      echo "✅ yt-dlp is working!"; \
    else \
      echo "❌ ERROR: yt-dlp not found in ./bin directory!" && \
      echo "Current directory: $(pwd)" && \
      echo "Contents of /app:" && \
      ls -la /app/ | head -20 && \
      echo "Contents of ./bin (if exists):" && \
      ls -la ./bin/ 2>/dev/null || echo "bin directory does not exist" && \
      echo "Contents of .next/standalone/bin (if exists):" && \
      ls -la .next/standalone/bin/ 2>/dev/null || echo ".next/standalone/bin does not exist" && \
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
