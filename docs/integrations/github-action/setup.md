---
sidebar_position: 2
title: Setup
description: Set up the SuperQA GitHub Action in your repository
---

# Setup Guide

Learn how to set up the SuperQA GitHub Action in your GitHub repository.

## Step 1: Get Your SuperQA API Key

1. **Log in to SuperQA**
   - Navigate to [https://app.superqa.ai](https://app.superqa.ai)
   - Sign in with your credentials

2. **Access Account Settings**
   - Click on your profile icon
   - Select "Account Settings" or "API Keys"

3. **Generate API Key**
   - Click "Generate New API Key" or "Create API Key"
   - Give it a descriptive name (e.g., "GitHub Actions")
   - Copy the generated API key
   - **Important**: API keys start with `az-`

4. **Save Securely**
   - Store the API key securely
   - You'll need it for the next step

## Step 2: Add API Key to GitHub Secrets

GitHub Secrets allow you to store sensitive information securely.

1. **Navigate to Repository Settings**
   - Go to your GitHub repository
   - Click **Settings** tab
   - Click **Secrets and variables** → **Actions** in the left sidebar

2. **Create New Secret**
   - Click **New repository secret** button
   - **Name**: `SUPERQA_API_KEY`
   - **Value**: Paste your SuperQA API key (starts with `az-`)
   - Click **Add secret**

3. **Verify Secret**
   - You should see `SUPERQA_API_KEY` in your secrets list
   - The value will be hidden for security

:::tip
Use the exact name `SUPERQA_API_KEY` to match the examples in this documentation. You can use a different name, but remember to update it in your workflow files.
:::

## Step 3: Create Workflow File

Create a workflow file to run SuperQA tests.

1. **Create Directory**
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create Workflow File**
   Create `.github/workflows/superqa.yml`:

   ```yaml
   name: SuperQA Tests
   
   on:
     push:
       branches: [ main, develop ]
     pull_request:
       branches: [ main ]
   
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v4
         
         - name: Run SuperQA Tests
           uses: superqa-ai/superqa-githubaction@v1
           with:
             api_key: ${{ secrets.SUPERQA_API_KEY }}
             project_name: 'MyProject'
             test_run_name: 'ci-tests'
   ```

3. **Customize Configuration**
   - Replace `'MyProject'` with your SuperQA project name
   - Replace `'ci-tests'` with your test run name
   - Adjust triggers (`on:`) as needed

4. **Commit and Push**
   ```bash
   git add .github/workflows/superqa.yml
   git commit -m "Add SuperQA GitHub Action workflow"
   git push
   ```

## Step 4: Verify Setup

1. **Trigger Workflow**
   - Push a commit to trigger the workflow
   - Or create a pull request

2. **Monitor Execution**
   - Go to **Actions** tab in your repository
   - Click on the workflow run
   - Watch the "Run SuperQA Tests" step

3. **Check Results**
   - ✅ Green checkmark = Tests passed
   - ❌ Red X = Tests failed
   - Click on the step for detailed logs

## Configuration Options

### Workflow Triggers

Control when tests run:

```yaml
# Run on push to specific branches
on:
  push:
    branches: [ main, develop, staging ]

# Run on pull requests
on:
  pull_request:
    branches: [ main ]

# Run on schedule (daily at 2 AM)
on:
  schedule:
    - cron: '0 2 * * *'

# Run manually
on:
  workflow_dispatch:

# Combine multiple triggers
on:
  push:
    branches: [ main ]
  pull_request:
  schedule:
    - cron: '0 2 * * *'
  workflow_dispatch:
```

### Runner Selection

Choose the appropriate runner:

```yaml
jobs:
  test:
    # Ubuntu (recommended)
    runs-on: ubuntu-latest
    
    # Or macOS
    # runs-on: macos-latest
    
    # Or Windows
    # runs-on: windows-latest
```

## Best Practices

### Use Organization Secrets

For multiple repositories:

1. Go to **Organization Settings** → **Secrets and variables** → **Actions**
2. Create organization-level secret
3. Grant access to specific repositories
4. Use the same secret across all repositories

### Protect Your Main Branch

Require tests to pass before merging:

1. Go to **Settings** → **Branches**
2. Add branch protection rule for `main`
3. Enable "Require status checks to pass"
4. Select your SuperQA workflow

### Use Environment-Specific Secrets

For different environments:

```yaml
jobs:
  test-staging:
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'staging-tests'
  
  test-production:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'production-tests'
```

## Troubleshooting Setup

### Secret Not Found

**Error**: `Input required and not supplied: api_key`

**Solution**:
- Verify secret name is exactly `SUPERQA_API_KEY`
- Check secret is created in the correct repository
- Ensure workflow file uses `${{ secrets.SUPERQA_API_KEY }}`

### Invalid API Key

**Error**: `Invalid API key format` or `Authentication failed`

**Solution**:
- Verify API key starts with `az-`
- Check for extra spaces or characters
- Regenerate API key in SuperQA if needed

### Workflow Not Triggering

**Solution**:
- Check workflow file is in `.github/workflows/` directory
- Verify YAML syntax is correct
- Ensure triggers match your actions (push, PR, etc.)

## Next Steps

- [Configuration](./configuration.md) - Learn about all configuration options
- [Workflow Examples](./workflow-examples.md) - See advanced usage patterns
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
