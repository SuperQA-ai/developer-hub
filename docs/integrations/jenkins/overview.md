---
sidebar_position: 1
title: Overview
description: Introduction to the SuperQA Jenkins Plugin for automated testing
---

# SuperQA Jenkins Plugin

The SuperQA Jenkins Plugin enables seamless integration of SuperQA automated testing into your Jenkins CI/CD pipeline. Execute test suites, monitor results in real-time, and generate comprehensive Allure reports—all within your Jenkins environment.

## Key Features

### 🚀 Easy Integration
Simple configuration with API key and project details. Get started in minutes with minimal setup.

### 📊 Allure Reports
Automatic generation and publishing of Allure test reports with conditional control. Download test recordings, screenshots, and other attachments automatically.

### 🎯 Dynamic Dropdowns
Auto-populated project, environment, and test run selections. Smart cascading dependencies ensure you always select valid combinations.

### 🎛️ Parameterized Builds
All-in-one SuperQA parameter with cascading dependencies. Users can select project, test run, environment, and configure timeout and Allure settings—all from a single parameter.

### 📈 Detailed Results
Pipeline steps return comprehensive test results with pass/fail counts and test case names. Use this data to make informed decisions in your pipeline.

### 🔄 Real-time Monitoring
Live status updates during test execution with improved parallel execution support. Monitor your tests as they run.

### ⏱️ Flexible Timeouts
Configurable polling timeout for test execution (default: 1 hour). Adjust based on your test suite size.

### 🔀 Multiple Build Steps
Support for multiple SuperQA steps in a single build with smart state management. Run different test suites sequentially or in parallel.

## Prerequisites

Before installing the SuperQA Jenkins Plugin, ensure you have:

- **Jenkins**: Version 2.426.3 or higher
- **Java**: Version 11 or higher
- **Allure Jenkins Plugin**: (Optional) For report publishing
- **SuperQA Account**: With an active API key

## Quick Start

1. **Install the Plugin**
   - Download the `.hpi` file or build from source
   - Upload to Jenkins via Manage Plugins → Advanced
   - Restart Jenkins

2. **Configure Global Settings**
   - Go to Manage Jenkins → Configure System → SuperQA
   - Enter your SuperQA API key
   - Test the connection

3. **Create a Job**
   - Add "SuperQA Test Execution" build step
   - Select your project, test run, and environment
   - Run the build

4. **View Results**
   - Monitor execution in the build console
   - View Allure reports in the build results

## What's Next?

- [Installation Guide](./installation.md) - Detailed installation instructions
- [Configuration](./configuration.md) - Set up global and job-level configuration
- [Usage Examples](./usage.md) - Learn how to use the plugin effectively
- [Pipeline Integration](./pipeline-integration.md) - Integrate with Jenkins pipelines
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
