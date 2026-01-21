FROM node:20-slim AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Debian-slim uses apt instead of apk
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json* ./
# Use npm install to handle loose lockfile matches across platforms
RUN npm install

# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_SITE_URL "https://www.fasttools.store"
ENV NEXT_PUBLIC_API_URL "https://api.fasttools.store"
ENV NEXT_PUBLIC_PYTHON_API_URL "https://api-removebg.fasttools.store"
ENV NEXT_PUBLIC_SITE_NAME "fasttools"
ENV NEXT_PUBLIC_GA_ID "G-4G804HZ22C"
ENV NEXT_PUBLIC_GTM_ID ""
ENV CLOUDFLARE_ACCOUNT_ID "c64b9be052fb497f7b1a3121316d4d9f"
ENV CLOUDFLARE_API_TOKEN "***REMOVED***"

# Ensure the build script runs
RUN npm run build

# 3. Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 8080
ENV HOSTNAME "0.0.0.0"
ENV CLOUDFLARE_ACCOUNT_ID "c64b9be052fb497f7b1a3121316d4d9f"
ENV CLOUDFLARE_API_TOKEN "***REMOVED***"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy essential folders
COPY --from=builder /app/public ./public

# Set permissions for the standalone server
# Note: Next.js standalone output includes its own node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/data ./data

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]