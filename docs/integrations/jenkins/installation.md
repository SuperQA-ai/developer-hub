---
sidebar_position: 2
title: Installation
description: How to install the SuperQA Jenkins Plugin
---

# Installation Guide

This guide walks you through installing the SuperQA Jenkins Plugin in your Jenkins environment.

## Prerequisites

Before you begin, ensure you have:

- Jenkins 2.426.3 or higher
- Java 11 or higher
- Admin access to your Jenkins instance
- (Optional) Allure Jenkins Plugin for report publishing

## Installation Methods

### Method 1: Install from HPI File (Recommended)

1. **Download the Plugin**
   - Download the latest `.hpi` file from the [releases page](https://github.com/SuperQA-ai/superqa-plugin/releases)
   - Or build from source (see Method 2)

2. **Upload to Jenkins**
   - Navigate to **Manage Jenkins** → **Manage Plugins**
   - Click the **Advanced** tab
   - Scroll to the **Deploy Plugin** section
   - Click **Choose File** and select the `superqa-1.0.0.hpi` file
   - Click **Deploy**

3. **Restart Jenkins**
   ```bash
   # Option 1: Restart from UI
   # Go to Manage Jenkins → Prepare for Shutdown
   # Then restart your Jenkins service
   
   # Option 2: Restart via command line
   sudo systemctl restart jenkins
   ```

4. **Verify Installation**
   - Go to **Manage Jenkins** → **Manage Plugins** → **Installed** tab
   - Search for "SuperQA"
   - Confirm the plugin is listed and enabled

### Method 2: Build from Source

If you want to build the plugin yourself or contribute to development:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SuperQA-ai/superqa-plugin.git
   cd superqa-plugin
   ```

2. **Build the Plugin**
   ```bash
   mvn clean package
   ```
   
   This will create `target/superqa-1.0.0.hpi`

3. **Install the HPI File**
   - Follow steps 2-4 from Method 1 above
   - Use the `.hpi` file from the `target/` directory

## Post-Installation Setup

### Install Allure Plugin (Optional but Recommended)

To view Allure reports directly in Jenkins:

1. Go to **Manage Jenkins** → **Manage Plugins** → **Available** tab
2. Search for "Allure"
3. Check **Allure Jenkins Plugin**
4. Click **Install without restart**

### Verify Plugin Functionality

1. Create a new Freestyle project
2. In the **Build** section, verify you can see:
   - **SuperQA Test Execution** build step
   - **SuperQA Test Execution with Test Run** build step
3. In **This project is parameterized**, verify you can see:
   - **SuperQA Parameter** option

## Version Compatibility

| SuperQA Plugin | Jenkins Version | Java Version |
|----------------|-----------------|--------------|
| 1.0.0+         | 2.426.3+        | 11+          |

## Troubleshooting Installation

### Plugin Not Appearing After Install

**Problem**: Plugin doesn't show up in the Installed plugins list.

**Solution**:
1. Check Jenkins logs for errors:
   ```bash
   tail -f /var/log/jenkins/jenkins.log
   ```
2. Ensure Jenkins was restarted after installation
3. Verify the `.hpi` file is not corrupted (try re-downloading)

### Build Step Not Available

**Problem**: SuperQA build steps don't appear in job configuration.

**Solution**:
1. Verify the plugin is enabled in **Manage Plugins** → **Installed**
2. Check for plugin conflicts (disable other test execution plugins temporarily)
3. Restart Jenkins

### Java Version Issues

**Problem**: Plugin fails to load due to Java version mismatch.

**Solution**:
1. Check your Java version:
   ```bash
   java -version
   ```
2. Ensure you're running Java 11 or higher
3. Update Java if needed and restart Jenkins

## Next Steps

Now that the plugin is installed:

- [Configure Global Settings](./configuration.md) - Set up your API key
- [Create Your First Job](./usage.md) - Start running tests
- [Pipeline Integration](./pipeline-integration.md) - Use in Jenkins pipelines
