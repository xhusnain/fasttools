# ----------------------------
# Base image for Node.js
# ----------------------------
FROM node:20-alpine AS base

# Add compatibility libraries
RUN apk add --no-cache libc6-compat

WORKDIR /app

# ----------------------------
# Dependency installation
# ----------------------------
FROM base AS deps

# Enable corepack and install a stable pnpm version
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

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

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# (Optional) Download models if needed
RUN pnpm run download-models || echo "Skipping model download"

# Build the application
RUN pnpm run build

# ----------------------------
# Production runtime
# ----------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy the built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

# ----------------------------
# ✅ Expose on port 7000
# ----------------------------
EXPOSE 7000
ENV PORT=7000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
