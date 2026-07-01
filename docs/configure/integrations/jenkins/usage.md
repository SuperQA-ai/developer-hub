---
sidebar_position: 4
title: Usage
description: How to use the SuperQA Jenkins Plugin
---

# Usage Guide

Learn how to effectively use the SuperQA Jenkins Plugin in your Jenkins jobs.

## Basic Usage

### Running Your First Test

1. **Create a Jenkins Job**
   - Create a new Freestyle project
   - Name it (e.g., "SuperQA Smoke Tests")

2. **Add SuperQA Build Step**
   - In **Build** section, add **SuperQA Test Execution with Test Run**
   - Leave **API Key** empty (uses global configuration)
   - Select **Project Name** from dropdown
   - Select **Test Run Name** from dropdown
   - Select **Environment Name** from dropdown
   - Set **Poll Timeout** (default: 60 minutes)
   - Enable **Publish Allure Report** (default: true)

3. **Save and Run**
   - Click **Save**
   - Click **Build Now**
   - Monitor progress in the build console

### Build Console Output

During execution, you'll see real-time updates:

```
🚀 Starting SuperQA Test Execution...
📋 Project: Demo
🧪 Test Run: Smoke Tests
🌍 Environment: Staging
⏱️ Poll Timeout: 60 minutes
📊 Allure Reports: Enabled

✅ Test execution started successfully
🔄 Polling for test results... (1/120)
📊 Status: Running | Phase: Execution
📈 Progress: 5/10 tests completed

✅ All tests completed!
📊 Results: 8 passed, 2 failed, 0 skipped

📥 Downloading Allure reports...
✅ Downloaded: allure_report_result.json
📎 Found 3 attachment(s) to download
✅ Downloaded: recording_001.mp4 (Browser Recording)
✅ Downloaded: screenshot_001.png (Test Screenshot)

📊 Publishing Allure report...
✅ SuperQA Test Execution completed!
```

## Parameterized Builds

Parameterized builds provide flexibility for users to select different test configurations.

### Setup

1. **Enable Parameters**
   - Check **"This project is parameterized"**

2. **Add SuperQA Parameter**
   - Click **Add Parameter** → **SuperQA Parameter**
   - **Name**: `SUPERQA_PARAMETER`
   - Configure defaults for your most common scenario

3. **Add Build Step**
   - Add **SuperQA Test Execution** build step
   - **Parameter Name**: `SUPERQA_PARAMETER`

### User Experience

When users click **"Build with Parameters"**, they see:

```
SuperQA Parameter
├─ Project:              [Demo ▼]
├─ Test Run:             [Smoke Tests ▼]
├─ Environment:          [Staging ▼]
├─ Poll Timeout:         [60] minutes
└─ Publish Allure Report [✓] Enabled

[Build] [Cancel]
```

**Smart Behavior:**
- Test run and environment dropdowns update when project changes
- Only valid combinations are shown
- Defaults are pre-selected for quick builds

## Allure Reports and Attachments

### Allure Reports

When enabled, the plugin automatically:

1. **Downloads** Allure result files
2. **Downloads** test attachments (videos, screenshots)
3. **Updates** JSON files with local file references
4. **Publishes** reports to Jenkins

**View Reports:**
- Click **Allure Report** link in build sidebar
- Navigate through test results, screenshots, and videos

### Attachments

The plugin downloads rich test artifacts:

- **Video Recordings**: Browser session recordings (MP4)
- **Screenshots**: Test step captures and failure screenshots (PNG/JPEG)
- **Other Files**: Logs, network traces, etc.

All files are stored locally in the `allure-results/` folder (or your custom folder).

### Disabling Allure Reports

To skip Allure processing:

1. **In Parameterized Builds**: Uncheck "Publish Allure Report"
2. **In Build Step**: Set "Publish Allure Report" to false

**When Disabled:**
```
📊 Allure reports disabled - skipping download and publish
✅ SuperQA Test Execution completed successfully!
```

## Multiple Test Runs

### Option 1: Multiple Build Steps (Same Job)

Add multiple "SuperQA Test Execution" build steps:

```
Build Steps:
1. SuperQA Test Execution (Smoke Tests)
   - Folder: smoke-reports
2. SuperQA Test Execution (API Tests)
   - Folder: api-reports
3. SuperQA Test Execution (UI Tests)
   - Folder: ui-reports
```

**Benefits:**
- Single job for all test suites
- Sequential execution
- Combined build status

### Option 2: Separate Jobs

Create separate jobs for each test suite:

```
Jobs:
├─ SuperQA-Smoke-Tests
├─ SuperQA-API-Tests
└─ SuperQA-UI-Tests
```

**Benefits:**
- Independent execution
- Parallel execution possible
- Easier to manage permissions

## Custom Report Folders

Organize your workspace with custom folders:

```groovy
// Build Step Configuration
Allure Report Folder: test-reports-${BUILD_NUMBER}
```

**Use Cases:**
- **Multiple Suites**: `smoke-reports`, `api-reports`, `ui-reports`
- **Versioned Reports**: `reports-${BUILD_NUMBER}`
- **Environment-Based**: `staging-reports`, `prod-reports`

## Best Practices

### Timeout Configuration

Match timeout to your test suite:

```
Smoke Tests:     15 minutes
API Tests:       30 minutes
Integration:     45 minutes
Regression:      90 minutes
Full E2E:        120 minutes
```

### Build Naming

Use descriptive build names:

```groovy
currentBuild.displayName = "#${BUILD_NUMBER} - ${PROJECT_NAME}"
currentBuild.description = "${TEST_RUN_NAME} in ${ENVIRONMENT_NAME}"
```

### Artifact Archiving

Archive reports for historical analysis:

```groovy
archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
```

## Next Steps

- [Pipeline Integration](./pipeline-integration.md) - Use in Jenkins pipelines
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
