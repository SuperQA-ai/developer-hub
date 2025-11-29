---
sidebar_position: 3
title: Configuration
description: Configure the SuperQA Jenkins Plugin
---

# Configuration Guide

Learn how to configure the SuperQA Jenkins Plugin at both global and job levels.

## Global Configuration (Recommended)

Setting up global configuration allows you to manage your API key centrally and use it across all jobs.

### Configure API Key

1. Navigate to **Manage Jenkins** → **Configure System**
2. Scroll to the **SuperQA** section
3. Enter your **Default API Key**
   - Get your API key from [SuperQA Account Settings](https://app.superqa.ai/settings)
   - API keys start with `az-`
4. Click **Test API Key** to validate
5. Click **Save**

### API Key Validation

The plugin provides built-in validation tools:

- **Test API Key Button**: Validates your API key and fetches project data
- **Real-time Feedback**: Shows project count, test runs, and environments
- **Smart Caching**: Data is cached for 30 minutes for optimal performance

**Benefits of Global Configuration:**
- ✅ Centralized management - one API key for all jobs
- ✅ Security - API keys stored securely as Jenkins secrets
- ✅ Convenience - no need to enter API key in every job
- ✅ Flexibility - can still override per job if needed

## Job Configuration

The SuperQA plugin offers two build step options:

### Option 1: SuperQA Test Execution (Parameter-Based)

**Best for**: Flexible, reusable configurations with user control

1. **Enable Parameterized Builds**
   - Check **"This project is parameterized"**

2. **Add SuperQA Parameter**
   - Click **Add Parameter** → **SuperQA Parameter**
   - **Name**: `SUPERQA_PARAMETER` (recommended)
   - **Description**: `SuperQA project, test run, environment, and execution settings`
   - **Default Project**: Select your most common project
   - **Default Test Run**: Select your most common test run
   - **Default Environment**: Select your most common environment
   - **Default Poll Timeout**: Set timeout in minutes (1-120, default: 60)
   - **Default Publish Allure Report**: Enable/disable (default: true)

3. **Add Build Step**
   - In **Build** section, add **SuperQA Test Execution**
   - **API Key**: Leave empty (uses global configuration)
   - **SuperQA Parameter Name**: `SUPERQA_PARAMETER`
   - **Allure Report Folder**: Custom folder name (default: `allure-results`)

### Option 2: SuperQA Test Execution with Test Run (Integrated)

**Best for**: Simple, fixed configurations

1. **Add Build Step**
   - In **Build** section, add **SuperQA Test Execution with Test Run**

2. **Configure Settings**
   - **API Key**: Leave empty (uses global configuration)
   - **Project Name**: Select from dropdown
   - **Test Run Name**: Select from dropdown (filtered by project)
   - **Environment Name**: Select from dropdown (filtered by project)
   - **Poll Timeout (minutes)**: 1-120 minutes (default: 60)
   - **Publish Allure Report**: Enable/disable (default: true)

## Dynamic Dropdowns

The plugin automatically fetches and caches your SuperQA data:

- **Project Dropdown**: Shows all available projects
- **Cascading Logic**: Environment and test run dropdowns update based on project selection
- **Smart Caching**: Data cached for 30 minutes
- **Auto-Refresh**: Data fetched automatically when API key is saved

## Configuration Options

### Poll Timeout

Set the maximum wait time for test execution:

- **Smoke tests**: 10-15 minutes
- **Standard suites**: 30-45 minutes
- **Regression tests**: 60-90 minutes
- **Full E2E suites**: 90-120 minutes

### Allure Reports

Control Allure report generation:

- **Enabled**: Downloads reports and attachments, publishes to Jenkins
- **Disabled**: Skips download and publish to save time and storage

### Custom Report Folders

Organize your workspace with custom Allure report folders:

- **Default**: `allure-results`
- **Custom**: Specify any folder name (e.g., `smoke-reports`, `api-reports`)
- **Multiple Steps**: Each build step can use a different folder

## Best Practices

### Use Global API Key

- Store API key globally for security and convenience
- Override only when needed for specific jobs

### Use Parameterized Builds

- Provides flexibility for users to select different configurations
- Enables reusable job configurations
- Simplifies maintenance

### Set Appropriate Timeouts

- Match timeout to your test suite size
- Too short: Tests may be interrupted
- Too long: Wastes build time on failures

### Organize Report Folders

- Use descriptive folder names for multiple test suites
- Keep folders separate for parallel execution
- Archive folders for historical analysis

## Next Steps

- [Usage Examples](./usage.md) - Learn how to use the configured plugin
- [Pipeline Integration](./pipeline-integration.md) - Use in Jenkins pipelines
- [Troubleshooting](./troubleshooting.md) - Common configuration issues
