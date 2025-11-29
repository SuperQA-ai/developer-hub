---
sidebar_position: 1
title: Overview
description: Introduction to the SuperQA GitHub Action
---

# SuperQA GitHub Action

Execute SuperQA test suites directly in your GitHub Actions workflows with seamless CI/CD integration.

## Key Features

### ✅ Simple Integration
Execute SuperQA test suites with minimal configuration. Add a single step to your workflow and you're ready to go.

### 🔐 Secure API Key Handling
Store your API key securely using GitHub Secrets. Never expose sensitive credentials in your workflow files.

### 📝 Clean Configuration
Simple YAML configuration with clear input parameters. Easy to understand and maintain.

### 🚀 Fast and Lightweight
Minimal overhead with efficient execution. Your tests run quickly without unnecessary delays.

### 🔄 Flexible Triggers
Run tests on push, pull requests, schedules, or manual triggers. Full control over when tests execute.

## Prerequisites

Before using the SuperQA GitHub Action, ensure you have:

- **GitHub Repository**: With Actions enabled
- **SuperQA Account**: With an active API key
- **Test Configuration**: Project, test run, and environment set up in SuperQA

## Quick Start

Add this to your workflow file (`.github/workflows/superqa.yml`):

```yaml
name: SuperQA Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run SuperQA Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'ci-tests'
```

That's it! Your tests will run automatically on every push and pull request.

## How It Works

1. **Trigger**: Workflow is triggered by configured event (push, PR, etc.)
2. **Checkout**: Code is checked out (if needed)
3. **Execute**: SuperQA Action runs your test suite
4. **Results**: Test results determine workflow success/failure

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `api_key` | SuperQA API key (starts with `az-`) | ✅ | - |
| `project_name` | Project name in SuperQA | ✅ | - |
| `test_run_name` | Test run name to execute | ✅ | - |
| `base_url` | SuperQA base URL | ❌ | `https://app.superqa.ai` |

## Outputs

| Output | Description |
|--------|-------------|
| `test_result` | Test execution result (`success` or `failure`) |

## Use Cases

### Continuous Integration
Run tests automatically on every code change to catch issues early.

### Pull Request Validation
Ensure all PRs pass tests before merging to protect your main branch.

### Scheduled Testing
Run tests on a schedule to monitor application health.

### Multi-Environment Testing
Test across different environments (staging, production) using matrix strategies.

## What's Next?

- [Setup Guide](./setup.md) - Get your API key and configure secrets
- [Configuration](./configuration.md) - Learn about all configuration options
- [Workflow Examples](./workflow-examples.md) - See advanced usage patterns
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
