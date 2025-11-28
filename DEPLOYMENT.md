# Deployment Guide

This guide covers different deployment options for the SuperQA Developer Hub.

## Table of Contents

- [GitHub Pages (Recommended)](#github-pages-recommended)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [Docker](#docker)
- [Self-Hosted](#self-hosted)

---

## GitHub Pages (Recommended)

The easiest way to deploy the SuperQA Developer Hub is using GitHub Pages with GitHub Actions.

### Prerequisites

- Repository hosted on GitHub
- GitHub Actions enabled

### Setup Steps

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Configure Repository Secrets (Optional)**
   - Go to Settings → Secrets and variables → Actions
   - Add `SEGMENT_API_KEY` if you want analytics tracking

3. **Push to Main Branch**
   ```bash
   git push origin main
   ```

4. **Monitor Deployment**
   - Go to the "Actions" tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Once complete, your site will be live at `https://<username>.github.io/developer-hub/`

### Custom Domain

To use a custom domain (e.g., `developer.superqa.ai`):

1. **Add CNAME Record**
   - In your DNS provider, add a CNAME record pointing to `<username>.github.io`

2. **Configure Custom Domain**
   - Go to Settings → Pages
   - Add your custom domain under "Custom domain"
   - Check "Enforce HTTPS"

3. **Update `docusaurus.config.ts`**
   ```typescript
   url: 'https://developer.superqa.ai',
   baseUrl: '/',
   ```

---

## Vercel

Deploy to Vercel with zero configuration.

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Via Vercel Dashboard

1. Import your GitHub repository at [vercel.com/new](https://vercel.com/new)
2. Configure build settings:
   - **Framework Preset**: Docusaurus
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
3. Add environment variables (if needed):
   - `SEGMENT_API_KEY`
4. Click "Deploy"

---

## Netlify

Deploy to Netlify with continuous deployment.

### Via Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Via Netlify Dashboard

1. Connect your repository at [app.netlify.com](https://app.netlify.com)
2. Configure build settings:
   - **Build command**: `yarn build`
   - **Publish directory**: `build`
3. Add environment variables:
   - `SEGMENT_API_KEY`
4. Click "Deploy site"

### Netlify Configuration File

Create `netlify.toml` in the root:

```toml
[build]
  command = "yarn build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "22"
```

---

## Docker

Deploy using Docker for containerized environments.

### Build and Run

```bash
# Build the image
docker build -t superqa-developer-hub .

# Run the container
docker run -p 80:80 superqa-developer-hub

# Or run on a different port
docker run -p 8080:80 superqa-developer-hub
```

The site will be available at `http://localhost` (or `http://localhost:8080`).

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  docs:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```

### Production Optimization

For production, consider using multi-stage builds (already configured in `Dockerfile`):

```dockerfile
FROM node:22-alpine as base
# ... build stage ...

FROM nginx:stable-alpine as deploy
# ... serve static files ...
```

---

## Self-Hosted

Deploy to your own server using nginx, Apache, or any static file server.

### Build the Site

```bash
yarn build
```

This creates a `build/` directory with static files.

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name developer.superqa.ai;
    root /var/www/developer-hub/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Deploy Steps

```bash
# Build the site
yarn build

# Copy to server
scp -r build/* user@server:/var/www/developer-hub/

# Restart nginx
ssh user@server 'sudo systemctl restart nginx'
```

---

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Key variables:

- **BASE_URL**: Base URL path (default: `/`)
- **SEGMENT_API_KEY**: Analytics tracking key
- **NODE_OPTIONS**: Memory allocation for build

---

## Continuous Deployment

### GitHub Actions (Configured)

The repository includes two workflows:

1. **deploy.yml** - Deploys to GitHub Pages on push to `main`
2. **preview-deploy.yml** - Builds preview for pull requests

### Adding Custom Deployment

To deploy to a custom server, add a new workflow:

```yaml
name: Deploy to Custom Server

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'yarn'
      - run: yarn install --frozen-lockfile
      - run: yarn build
      - name: Deploy to server
        run: |
          # Add your deployment commands here
          # e.g., rsync, scp, custom script
```

---

## Troubleshooting

### Build Fails with Memory Error

Increase Node.js memory allocation:

```bash
export NODE_OPTIONS=--max-old-space-size=8192
yarn build
```

### Broken Links on Deployment

Check `docusaurus.config.ts`:

- Ensure `url` matches your domain
- Ensure `baseUrl` matches your deployment path

### Assets Not Loading

Check that `baseUrl` is configured correctly:

- Root domain: `baseUrl: '/'`
- Subdirectory: `baseUrl: '/developer-hub/'`

---

## Performance Optimization

### Enable Faster Build

In `docusaurus.config.ts`:

```typescript
future: {
  experimental_faster: true, // Enable Rspack
}
```

### Preload Critical Resources

Add to `docusaurus.config.ts`:

```typescript
headTags: [
  {
    tagName: 'link',
    attributes: {
      rel: 'preload',
      href: '/fonts/your-font.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
  },
],
```

---

## Monitoring

### Analytics

The site supports:
- **Segment**: Configure via `SEGMENT_API_KEY`
- **Google Tag Manager**: ID `GTM-MJB7HPB` (update in `docusaurus.config.ts`)

### Error Tracking

Consider adding error tracking:
- [Sentry](https://sentry.io/)
- [LogRocket](https://logrocket.com/)
- [Rollbar](https://rollbar.com/)

---

## Support

For deployment issues:

1. Check the [GitHub Issues](https://github.com/superqa/developer-hub/issues)
2. Review [Docusaurus Deployment Docs](https://docusaurus.io/docs/deployment)
3. Contact the SuperQA team

---

**Last Updated**: November 2025

