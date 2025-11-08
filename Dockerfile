FROM node:20-slim AS base
WORKDIR /app

FROM base AS system-deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    python3 \
    && rm -rf /var/lib/apt/lists/*

FROM base AS deps
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate
COPY package.json pnpm-lock.yaml* .pnpmfile.cjs* ./
RUN pnpm install --no-frozen-lockfile

FROM base AS builder
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run download-models && pnpm run build

FROM system-deps AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=7000
ENV HOSTNAME="0.0.0.0"

RUN groupadd -r -g 1001 nodejs && useradd -r -u 1001 -g nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/bin ./bin

RUN if [ -f ./bin/yt-dlp ]; then \
      chmod +x ./bin/yt-dlp && \
      ./bin/yt-dlp --version > /dev/null 2>&1 || true; \
    fi

USER nextjs
EXPOSE 7000
CMD ["node", "server.js"]
