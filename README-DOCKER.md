# Docker Production Setup

This guide explains how to run FastTools in production using Docker.

## Prerequisites

- Docker 20.10+
- Docker Compose 2.0+
- (Optional) `yq` for YAML to .env conversion

## Quick Start

1. **Copy the environment template:**
   ```bash
   cp .env.production.example .env.production
   ```

2. **Fill in your API keys in `.env.production`:**
   ```bash
   nano .env.production  # or use your preferred editor
   ```

3. **Build and run with Docker Compose:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

## Using YAML Configuration

If you prefer to use the YAML format (`production.env.yaml`):

### Option 1: Convert YAML to .env (Recommended)
```bash
# Install yq if not already installed
# On Ubuntu/Debian: apt-get install yq
# On macOS: brew install yq

# Convert YAML to .env format
yq -o props production.env.yaml > .env.production
```

### Option 2: Use envsubst with YAML
```bash
# Use a tool like yq to convert and export
export $(yq -o props production.env.yaml | xargs)
docker-compose -f docker-compose.prod.yml up -d --build
```

### Option 3: Manual Conversion
Simply copy values from `production.env.yaml` to `.env.production` manually.

## Environment Variables

Required environment variables (from `lib/env.ts`):

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI features | Yes* |
| `OPENAI_API_KEY` | OpenAI API key (fallback for AI) | No |
| `YOUTUBE_API_KEY` | YouTube API key | No |
| `INSTAGRAM_API_KEY` | Instagram API key | No |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | No (defaults to fasttools.store) |
| `NODE_ENV` | Set to `production` | Yes |

\* At least one AI API key (GEMINI or OPENAI) is recommended for AI features to work.

## Docker Commands

### Build the image:
```bash
docker-compose -f docker-compose.prod.yml build
```

### Start the container:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### View logs:
```bash
docker-compose -f docker-compose.prod.yml logs -f
```

### Stop the container:
```bash
docker-compose -f docker-compose.prod.yml down
```

### Rebuild after code changes:
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### Access container shell:
```bash
docker exec -it fasttools-app sh
```

## Production Deployment

1. **Build and test locally:**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

2. **Verify the application:**
   - Visit `http://localhost:3000`
   - Check health endpoint: `http://localhost:3000/api/instagram/test`

3. **Deploy to your server:**
   - Copy `.env.production` to your server
   - Copy `docker-compose.prod.yml` and `Dockerfile` to your server
   - Run `docker-compose -f docker-compose.prod.yml up -d --build`

## Port Configuration

Default port is `3000`. To change it:

1. Update `PORT` in `.env.production`:
   ```
   PORT=8080
   ```

2. Update `docker-compose.prod.yml` ports mapping:
   ```yaml
   ports:
     - "8080:3000"
   ```

## Troubleshooting

### Container won't start
- Check logs: `docker-compose -f docker-compose.prod.yml logs`
- Verify `.env.production` file exists and has correct values
- Ensure port 3000 is not already in use

### Build fails
- Ensure all dependencies are in `package.json`
- Check Node.js version (requires 18+)
- Verify `pnpm-lock.yaml` exists

### Environment variables not working
- Verify `.env.production` is in the same directory as `docker-compose.prod.yml`
- Check that variable names match exactly (case-sensitive)
- Restart container after changing `.env.production`

## Security Notes

- **Never commit `.env.production`** to version control
- Use secrets management (Docker Secrets, Kubernetes Secrets, etc.) in production
- Rotate API keys regularly
- Keep Docker images updated

## Next Steps

- Set up reverse proxy (nginx/traefik) for SSL/TLS
- Configure monitoring and logging
- Set up automated backups
- Enable health checks and auto-restart

