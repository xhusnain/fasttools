FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS system-deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    python3 \
    && rm -rf /var/lib/apt/lists/*

FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run download-models && bun run build

FROM system-deps AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=7000
ENV HOSTNAME="0.0.0.0"

# Bun image creates a 'bun' user by default
# We can use it or create a new one. Let's use 'bun'.

COPY --from=builder --chown=bun:bun /app/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static
COPY --from=builder --chown=bun:bun /app/public ./public
COPY --from=builder --chown=bun:bun /app/bin ./bin

RUN if [ -f ./bin/yt-dlp ]; then \
    chmod +x ./bin/yt-dlp && \
    ./bin/yt-dlp --version > /dev/null 2>&1 || true; \
    fi

USER bun
EXPOSE 7000
CMD ["bun", "server.js"]
