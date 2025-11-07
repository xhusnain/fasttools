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
RUN pnpm install --no-frozen-lockfile

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
# Copy bin directory (contains yt-dlp binary) - ensure it's copied to both root and standalone
COPY --from=builder --chown=nextjs:nodejs /app/bin ./bin
# Also copy to standalone directory if it exists (for Next.js standalone mode)
RUN if [ -d .next/standalone ]; then \
      mkdir -p .next/standalone/bin && \
      cp -r ./bin/* .next/standalone/bin/ 2>/dev/null || true; \
    fi

# Ensure yt-dlp is executable and verify it exists (must be done as root before switching to non-root user)
RUN if [ -f ./bin/yt-dlp ]; then \
      chmod +x ./bin/yt-dlp && \
      ls -lh ./bin/yt-dlp && \
      ./bin/yt-dlp --version || echo "Warning: yt-dlp version check failed"; \
    else \
      echo "ERROR: yt-dlp not found in ./bin directory!" && \
      ls -la ./bin/ || echo "bin directory does not exist"; \
    fi

# Use non-root user
USER nextjs

# ----------------------------
# ✅ Expose on port 7000
# ----------------------------
EXPOSE 7000

# Start the server
CMD ["node", "server.js"]
