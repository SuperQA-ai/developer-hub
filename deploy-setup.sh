#!/bin/bash

# SuperQA Developer Hub - Quick Deployment Setup Script
# This script helps you quickly set up and deploy the Developer Hub

set -e

echo "🚀 SuperQA Developer Hub - Deployment Setup"
echo "==========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}▶ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check prerequisites
print_step "Checking prerequisites..."

if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 22+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 22 ]; then
    print_warning "Node.js version $NODE_VERSION detected. Version 22+ is recommended."
else
    print_success "Node.js version: $(node -v)"
fi

if ! command -v yarn &> /dev/null; then
    print_warning "Yarn is not installed. Installing Yarn..."
    npm install -g yarn
    print_success "Yarn installed"
else
    print_success "Yarn version: $(yarn -v)"
fi

if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
else
    print_success "Git version: $(git --version)"
fi

echo ""

# Install dependencies
print_step "Installing dependencies..."
yarn install --frozen-lockfile
print_success "Dependencies installed"

echo ""

# Build the site
print_step "Building the site..."
yarn build
print_success "Build completed successfully!"

echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    print_error "Not a git repository. Please initialize git first."
    exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    print_warning "You have uncommitted changes."
    echo ""
    read -p "Do you want to commit these changes now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add -A
        echo ""
        echo "Enter commit message (or press Enter for default):"
        read COMMIT_MSG
        
        if [ -z "$COMMIT_MSG" ]; then
            COMMIT_MSG="feat: configure SuperQA Developer Hub for deployment

- Add comprehensive CI/CD workflows
- Update documentation and deployment guides
- Fix deprecated Docusaurus configuration
- Update branding to SuperQA"
        fi
        
        git commit -m "$COMMIT_MSG"
        print_success "Changes committed"
    fi
fi

echo ""

# Check for remote
if ! git remote | grep -q "origin"; then
    print_warning "No remote 'origin' found."
    echo ""
    read -p "Enter your GitHub repository URL: " REPO_URL
    git remote add origin "$REPO_URL"
    print_success "Remote 'origin' added"
fi

echo ""
print_step "Git status:"
git status
echo ""

# Ask about pushing
read -p "Do you want to push to GitHub now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    CURRENT_BRANCH=$(git branch --show-current)
    print_step "Pushing to origin/$CURRENT_BRANCH..."
    git push -u origin "$CURRENT_BRANCH"
    print_success "Pushed to GitHub!"
    echo ""
    print_success "🎉 Deployment initiated!"
    echo ""
    echo "Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Navigate to Settings → Pages"
    echo "3. Set Source to 'GitHub Actions'"
    echo "4. Go to Actions tab to monitor deployment"
    echo ""
    echo "Your site will be available at:"
    echo "https://$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | cut -d'/' -f1).github.io/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | cut -d'/' -f2)/"
else
    print_warning "Skipped push. You can push manually later with: git push origin main"
fi

echo ""
print_success "✨ Setup complete!"
echo ""
echo "📚 Additional resources:"
echo "  - README.md - Getting started guide"
echo "  - DEPLOYMENT.md - Comprehensive deployment options"
echo "  - CHANGES_SUMMARY.md - Summary of all changes"
echo ""
echo "🛠️ Quick commands:"
echo "  yarn start       - Start development server"
echo "  yarn build       - Build for production"
echo "  yarn serve       - Serve built site locally"
echo ""

