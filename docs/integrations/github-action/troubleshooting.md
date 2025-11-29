---
sidebar_position: 5
title: Troubleshooting
description: Common issues and solutions for the SuperQA GitHub Action
---

# Troubleshooting Guide

Common issues and solutions when using the SuperQA GitHub Action.

## Setup Issues

### Secret Not Found

**Symptoms:**
- Error: `Input required and not supplied: api_key`
- Workflow fails immediately

**Solutions:**

1. **Verify Secret Name**
   - Check secret is named exactly `SUPERQA_API_KEY`
   - Secret names are case-sensitive

2. **Check Secret Location**
   - Ensure secret is in the correct repository
   - For organization secrets, verify repository access

3. **Verify Workflow Syntax**
   ```yaml
   # Correct
   api_key: ${{ secrets.SUPERQA_API_KEY }}
   
   # Incorrect
   api_key: $SUPERQA_API_KEY  # Missing ${{ }}
   ```

### Invalid API Key Format

**Symptoms:**
- Error: `Invalid API key format`
- Error: `API key must start with 'az-'`

**Solutions:**

1. **Check API Key Format**
   - API keys must start with `az-`
   - Example: `az-1234567890abcdef`

2. **Verify No Extra Characters**
   - Check for spaces before/after the key
   - Ensure no line breaks in the secret value

3. **Regenerate API Key**
   - Log in to SuperQA
   - Generate a new API key
   - Update GitHub secret

## Authentication Issues

### Authentication Failed

**Symptoms:**
- Error: `Authentication failed`
- Error: `Unauthorized`

**Solutions:**

1. **Verify API Key is Active**
   - Log in to [SuperQA](https://app.superqa.ai)
   - Check API key status in Account Settings
   - Ensure key hasn't been revoked or expired

2. **Check Account Status**
   - Verify your SuperQA account is active
   - Ensure subscription is current

3. **Test API Key**
   - Try using the API key in SuperQA web interface
   - Verify it works outside GitHub Actions

## Execution Issues

### Project Not Found

**Symptoms:**
- Error: `Project 'ProjectName' not found`
- Workflow fails after authentication

**Solutions:**

1. **Verify Project Name**
   - Check exact project name in SuperQA
   - Project names are case-sensitive
   - Match spacing and special characters exactly

2. **Check API Key Permissions**
   - Ensure API key has access to the project
   - Verify project hasn't been deleted

### Test Run Not Found

**Symptoms:**
- Error: `Test run 'TestRunName' not found`
- Error: `Test run not found in project`

**Solutions:**

1. **Verify Test Run Name**
   - Check exact test run name in SuperQA
   - Test run names are case-sensitive

2. **Ensure Test Run Exists in Project**
   - Verify test run belongs to the specified project
   - Check test run hasn't been deleted

### Workflow Timeout

**Symptoms:**
- Workflow runs for maximum time and fails
- Error: `The job running on runner ... has exceeded the maximum execution time`

**Solutions:**

1. **Increase Workflow Timeout**
   ```yaml
   jobs:
     test:
       runs-on: ubuntu-latest
       timeout-minutes: 60  # Increase as needed
   ```

2. **Check Test Execution**
   - Log in to SuperQA
   - Verify tests are actually running
   - Check for stuck or hanging tests

3. **Split Long Test Suites**
   - Break into smaller test runs
   - Use matrix strategy for parallel execution

## Workflow Issues

### Workflow Not Triggering

**Symptoms:**
- Workflow doesn't run on push/PR
- No workflow runs appear in Actions tab

**Solutions:**

1. **Verify Workflow File Location**
   - Must be in `.github/workflows/` directory
   - File must have `.yml` or `.yaml` extension

2. **Check YAML Syntax**
   - Use a YAML validator
   - Check for indentation errors
   - Verify no tabs (use spaces)

3. **Verify Triggers**
   ```yaml
   # Check your triggers match your actions
   on:
     push:
       branches: [ main ]  # Must match branch name exactly
   ```

### Workflow Fails on Checkout

**Symptoms:**
- Error during `actions/checkout` step
- Permission denied errors

**Solutions:**

1. **Verify Repository Access**
   - Ensure workflow has read access to repository
   - Check repository settings → Actions → General

2. **Use Correct Checkout Version**
   ```yaml
   - uses: actions/checkout@v4  # Use latest version
   ```

## Network Issues

### Connection Timeout

**Symptoms:**
- Error: `Connection timeout`
- Error: `Failed to connect to app.superqa.ai`

**Solutions:**

1. **Check GitHub Actions Status**
   - Visit [GitHub Status](https://www.githubstatus.com/)
   - Verify Actions service is operational

2. **Check SuperQA Status**
   - Verify SuperQA service is accessible
   - Try accessing from browser

3. **Retry Workflow**
   - Network issues are often temporary
   - Re-run the workflow

### SSL/TLS Errors

**Symptoms:**
- Error: `SSL certificate problem`
- Error: `unable to verify the first certificate`

**Solutions:**

1. **Use Default Base URL**
   - Don't override `base_url` unless necessary
   - Default: `https://app.superqa.ai`

2. **Check Custom Base URL**
   - If using custom URL, verify SSL certificate is valid
   - Ensure URL is correct

## Result Issues

### Tests Pass but Workflow Fails

**Symptoms:**
- Tests complete successfully in SuperQA
- Workflow still fails

**Solutions:**

1. **Check Subsequent Steps**
   - Error might be in a step after SuperQA action
   - Review full workflow logs

2. **Verify Output Handling**
   ```yaml
   - name: Run Tests
     id: superqa
     uses: superqa-ai/superqa-githubaction@v1
     with:
       api_key: ${{ secrets.SUPERQA_API_KEY }}
       project_name: 'MyProject'
       test_run_name: 'tests'
   
   - name: Check Results
     run: echo "${{ steps.superqa.outputs.test_result }}"
   ```

### Incorrect Test Results

**Symptoms:**
- Workflow shows different results than SuperQA UI
- Results don't match expectations

**Solutions:**

1. **Verify Test Run**
   - Check you're running the correct test run
   - Verify test run configuration in SuperQA

2. **Check Timing**
   - Ensure you're looking at the same execution
   - Check execution timestamps

## Debugging

### Enable Debug Logging

Add debug output to your workflow:

```yaml
- name: Run SuperQA Tests
  uses: superqa-ai/superqa-githubaction@v1
  with:
    api_key: ${{ secrets.SUPERQA_API_KEY }}
    project_name: 'MyProject'
    test_run_name: 'ci-tests'

- name: Debug Output
  if: always()
  run: |
    echo "Workflow: ${{ github.workflow }}"
    echo "Run ID: ${{ github.run_id }}"
    echo "Event: ${{ github.event_name }}"
    echo "Ref: ${{ github.ref }}"
```

### View Detailed Logs

1. Go to **Actions** tab in your repository
2. Click on the failed workflow run
3. Click on the job name
4. Expand each step to see detailed logs
5. Look for error messages and stack traces

### Test Locally

Test your configuration before pushing:

1. **Validate YAML**
   ```bash
   # Install yamllint
   pip install yamllint
   
   # Validate workflow file
   yamllint .github/workflows/superqa.yml
   ```

2. **Use Act (Local GitHub Actions)**
   ```bash
   # Install act
   brew install act
   
   # Run workflow locally
   act -s SUPERQA_API_KEY=your-api-key
   ```

## Getting Help

If you're still experiencing issues:

1. **Check Workflow Logs**
   - Review complete workflow output
   - Look for specific error messages

2. **Verify Configuration**
   - Double-check all input parameters
   - Ensure secrets are correctly configured

3. **Contact Support**
   - Email: [support@superqa.ai](mailto:support@superqa.ai)
   - Include:
     - Workflow file content
     - Error messages
     - Workflow run URL
     - Steps to reproduce

## Next Steps

- [Overview](./overview.md) - Action features and capabilities
- [Setup](./setup.md) - Review setup steps
- [Configuration](./configuration.md) - Check configuration options
- [Workflow Examples](./workflow-examples.md) - See working examples
