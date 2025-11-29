---
sidebar_position: 4
title: Workflow Examples
description: Advanced workflow examples for the SuperQA GitHub Action
---

# Workflow Examples

Advanced workflow patterns and examples for the SuperQA GitHub Action.

## Basic Workflow

Simple workflow that runs on push and pull requests:

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

## Matrix Strategy for Multiple Test Suites

Run different test suites in parallel:

```yaml
name: Multi-Suite Testing

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test_suite: ['smoke-tests', 'regression-tests', 'api-tests']
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run SuperQA Tests - ${{ matrix.test_suite }}
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyApp'
          test_run_name: ${{ matrix.test_suite }}
```

## Multi-Environment Testing

Test across different environments:

```yaml
name: Multi-Environment Tests

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        environment: ['staging', 'production']
        test_suite: ['smoke-tests', 'api-tests']
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run Tests - ${{ matrix.environment }}/${{ matrix.test_suite }}
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyApp-${{ matrix.environment }}'
          test_run_name: ${{ matrix.test_suite }}
```

## Scheduled Testing

Run tests on a schedule:

```yaml
name: Nightly Tests

on:
  schedule:
    # Run every day at 2 AM UTC
    - cron: '0 2 * * *'
  workflow_dispatch:  # Allow manual trigger

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run Nightly Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'nightly-regression'
```

## Conditional Execution

Run different tests based on conditions:

```yaml
name: Conditional Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:

jobs:
  smoke-tests:
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'smoke-tests'
  
  full-tests:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'full-regression'
```

## Sequential Test Execution

Run tests in sequence with dependencies:

```yaml
name: Sequential Tests

on:
  push:
    branches: [ main ]

jobs:
  smoke-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Smoke Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'smoke-tests'
  
  integration-tests:
    runs-on: ubuntu-latest
    needs: smoke-tests  # Wait for smoke tests to pass
    steps:
      - uses: actions/checkout@v4
      - name: Run Integration Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'integration-tests'
  
  e2e-tests:
    runs-on: ubuntu-latest
    needs: integration-tests  # Wait for integration tests
    steps:
      - uses: actions/checkout@v4
      - name: Run E2E Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'e2e-tests'
```

## Integration with Other Actions

Combine with other GitHub Actions:

```yaml
name: Full CI Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Run Unit Tests
        run: npm test
      
      - name: Run SuperQA E2E Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'e2e-tests'
      
      - name: Deploy to Staging
        if: success()
        run: npm run deploy:staging
```

## Handling Test Results

Use test results in subsequent steps:

```yaml
name: Tests with Notifications

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run SuperQA Tests
        id: superqa
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'ci-tests'
      
      - name: Success Notification
        if: steps.superqa.outputs.test_result == 'success'
        run: |
          echo "✅ All tests passed!"
          # Add your notification logic here
      
      - name: Failure Notification
        if: steps.superqa.outputs.test_result == 'failure'
        run: |
          echo "❌ Tests failed!"
          # Add your notification logic here
```

## Pull Request Comments

Add test results as PR comments:

```yaml
name: PR Tests with Comments

on:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      
      - name: Run SuperQA Tests
        id: superqa
        uses: superqa-ai/superqa-githubaction@v1
        continue-on-error: true
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'pr-tests'
      
      - name: Comment on PR
        uses: actions/github-script@v7
        with:
          script: |
            const result = '${{ steps.superqa.outputs.test_result }}';
            const emoji = result === 'success' ? '✅' : '❌';
            const message = `${emoji} SuperQA Tests ${result === 'success' ? 'Passed' : 'Failed'}`;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.name,
              body: message
            });
```

## Retry on Failure

Automatically retry failed tests:

```yaml
name: Tests with Retry

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run SuperQA Tests (Attempt 1)
        id: test1
        uses: superqa-ai/superqa-githubaction@v1
        continue-on-error: true
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'flaky-tests'
      
      - name: Retry on Failure
        if: steps.test1.outcome == 'failure'
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'flaky-tests'
```

## Manual Workflow Dispatch

Allow manual triggering with inputs:

```yaml
name: Manual Test Execution

on:
  workflow_dispatch:
    inputs:
      project_name:
        description: 'SuperQA Project Name'
        required: true
        default: 'MyProject'
      test_run_name:
        description: 'Test Run Name'
        required: true
        default: 'ci-tests'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run SuperQA Tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: ${{ github.event.inputs.project_name }}
          test_run_name: ${{ github.event.inputs.test_run_name }}
```

## Next Steps

- [Configuration](./configuration.md) - Learn about all configuration options
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
