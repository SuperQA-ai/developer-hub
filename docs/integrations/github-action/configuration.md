---
sidebar_position: 3
title: Configuration
description: Configuration reference for the SuperQA GitHub Action
---

# Configuration Reference

Complete reference for all configuration options available in the SuperQA GitHub Action.

## Input Parameters

### api_key

- **Type**: String
- **Required**: ✅ Yes
- **Description**: Your SuperQA API authentication key
- **Format**: Must start with `az-`
- **Security**: Store in GitHub Secrets, never hardcode

**Example**:
```yaml
with:
  api_key: ${{ secrets.SUPERQA_API_KEY }}
```

### project_name

- **Type**: String
- **Required**: ✅ Yes
- **Description**: Name of the SuperQA project to run tests for
- **Case Sensitive**: Yes
- **Must Match**: Exact project name in SuperQA

**Example**:
```yaml
with:
  project_name: 'MyApplication'
```

### test_run_name

- **Type**: String
- **Required**: ✅ Yes
- **Description**: Name of the test run to execute
- **Case Sensitive**: Yes
- **Must Match**: Exact test run name in SuperQA project

**Example**:
```yaml
with:
  test_run_name: 'smoke-tests'
```

### base_url

- **Type**: String
- **Required**: ❌ No
- **Default**: `https://app.superqa.ai`
- **Description**: SuperQA API base URL
- **Use Case**: Custom SuperQA installations or different regions

**Example**:
```yaml
with:
  base_url: 'https://custom.superqa.ai'
```

## Output Parameters

### test_result

- **Type**: String
- **Values**: `success` or `failure`
- **Description**: Overall test execution result
- **Use Case**: Conditional workflow steps based on test results

**Example**:
```yaml
- name: Run SuperQA Tests
  id: superqa
  uses: superqa-ai/superqa-githubaction@v1
  with:
    api_key: ${{ secrets.SUPERQA_API_KEY }}
    project_name: 'MyProject'
    test_run_name: 'ci-tests'

- name: Handle Results
  if: steps.superqa.outputs.test_result == 'success'
  run: echo "Tests passed!"
```

## Complete Configuration Example

```yaml
name: SuperQA Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run SuperQA Tests
        id: superqa_tests
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyApplication'
          test_run_name: 'ci-tests'
          base_url: 'https://app.superqa.ai'
      
      - name: Check Results
        run: |
          echo "Test Result: ${{ steps.superqa_tests.outputs.test_result }}"
```

## Environment Variables

While not directly supported as inputs, you can use environment variables:

```yaml
env:
  SUPERQA_PROJECT: 'MyProject'
  SUPERQA_TEST_RUN: 'ci-tests'

steps:
  - name: Run SuperQA Tests
    uses: superqa-ai/superqa-githubaction@v1
    with:
      api_key: ${{ secrets.SUPERQA_API_KEY }}
      project_name: ${{ env.SUPERQA_PROJECT }}
      test_run_name: ${{ env.SUPERQA_TEST_RUN }}
```

## Conditional Execution

Run tests only under certain conditions:

### Run Only on Main Branch

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'production-tests'
```

### Run Only on Pull Requests

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'pr-tests'
```

### Skip on Draft PRs

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    if: github.event.pull_request.draft == false
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'pr-tests'
```

## Timeout Configuration

Set workflow-level timeout:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 30  # Workflow timeout
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'quick-tests'
```

## Retry Configuration

Retry failed tests automatically:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: superqa-ai/superqa-githubaction@v1
        id: tests
        continue-on-error: true
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'flaky-tests'
      
      - name: Retry on Failure
        if: steps.tests.outcome == 'failure'
        uses: superqa-ai/superqa-githubaction@v1
        with:
          api_key: ${{ secrets.SUPERQA_API_KEY }}
          project_name: 'MyProject'
          test_run_name: 'flaky-tests'
```

## Best Practices

### Use Secrets for API Keys

✅ **Good**:
```yaml
api_key: ${{ secrets.SUPERQA_API_KEY }}
```

❌ **Bad**:
```yaml
api_key: 'az-1234567890abcdef'  # Never hardcode!
```

### Use Specific Version

✅ **Good**:
```yaml
uses: superqa-ai/superqa-githubaction@v1
```

❌ **Avoid**:
```yaml
uses: superqa-ai/superqa-githubaction@main  # Unstable
```

### Set Appropriate Timeouts

```yaml
# Short tests
timeout-minutes: 15

# Medium tests
timeout-minutes: 30

# Long tests
timeout-minutes: 60
```

## Next Steps

- [Workflow Examples](./workflow-examples.md) - See advanced usage patterns
- [Troubleshooting](./troubleshooting.md) - Common configuration issues
