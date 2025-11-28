# SuperQA Developer Hub

Welcome to the SuperQA Developer Hub!

Learn AI-powered test automation skills at your own pace. Comprehensive guides, tutorials, API documentation, and reference materials to help you build, automate, and scale your testing with SuperQA.

## What is SuperQA?

SuperQA is an AI-powered test automation platform that enables you to:
- Create and execute automated tests using natural language
- Integrate with CI/CD pipelines (Jenkins, GitHub Actions, etc.)
- Generate comprehensive test reports and analytics
- Automate browser interactions with AI assistance
- Manage test cases, templates, and test runs efficiently

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- Yarn package manager

### Local Development

```bash
# Clone the repository
git clone https://github.com/superqa/developer-hub.git
cd developer-hub

# Install dependencies
yarn install

# Start development server
yarn start
```

This will start the development server at `http://localhost:3000`.

### Building for Production

```bash
# Build the site
yarn build

# Serve the built site locally
yarn serve
```

## 📦 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

### Manual Deployment

```bash
# Build the site
yarn build

# Deploy to GitHub Pages (if configured)
GIT_USER=<your-github-username> yarn deploy
```

### Docker Deployment

```bash
# Build Docker image
docker build -t superqa-developer-hub .

# Run container
docker run -p 80:80 superqa-developer-hub
```

The site will be available at `http://localhost`.

## 🛠️ Available Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve built site locally
- `yarn lint:eslint` - Run ESLint checks
- `yarn typecheck` - Run TypeScript type checking
- `yarn clear` - Clear Docusaurus cache

## 📁 Project Structure

```
developer-hub/
├── docs/                    # Documentation content
│   ├── platform/           # Platform documentation
│   └── integrations/       # Integration guides
├── src/
│   ├── components/         # React components
│   ├── pages/             # Custom pages
│   └── css/               # Global styles
├── static/                # Static assets
├── plugins/               # Custom Docusaurus plugins
├── release-notes/         # Release notes content
└── roadmap/              # Roadmap content
```

## 🤝 Contributing

We welcome contributions! Check out the [Contributors Guide](CONTRIBUTING.md) for details on how to contribute.

### Quick Contributions

Found a typo or broken link? Click the "Edit this page" button at the bottom of any documentation page to make quick edits.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
