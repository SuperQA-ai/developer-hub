---
sidebar_position: 6
title: Troubleshooting
description: Common issues and solutions for the SuperQA Jenkins Plugin
---

# Troubleshooting Guide

Common issues and solutions when using the SuperQA Jenkins Plugin.

## Installation Issues

### Plugin Not Appearing After Install

**Symptoms:**
- Plugin doesn't show in Installed plugins list
- Build steps not available in job configuration

**Solutions:**

1. **Verify Installation**
   ```bash
   # Check Jenkins logs
   tail -f /var/log/jenkins/jenkins.log
   ```

2. **Restart Jenkins**
   - Go to Manage Jenkins → Prepare for Shutdown
   - Restart Jenkins service

3. **Check Plugin File**
   - Ensure `.hpi` file is not corrupted
   - Try re-downloading and installing

### Java Version Mismatch

**Symptoms:**
- Plugin fails to load
- Error: "Unsupported class file major version"

**Solutions:**

1. **Check Java Version**
   ```bash
   java -version
   ```
   
2. **Update Java**
   - Ensure Java 11 or higher is installed
   - Restart Jenkins after updating

## Configuration Issues

### API Key Validation Fails

**Symptoms:**
- "Invalid API key" error
- "Authentication failed" message

**Solutions:**

1. **Verify API Key Format**
   - API keys must start with `az-`
   - Check for extra spaces or characters

2. **Check API Key Status**
   - Log in to [SuperQA](https://app.superqa.ai)
   - Navigate to Account Settings
   - Verify API key is active and not expired

3. **Test Connection**
   - Click "Test API Key" button in global configuration
   - Check response for specific error messages

### Dropdowns Not Populating

**Symptoms:**
- Project/Test Run/Environment dropdowns are empty
- "No options available" message

**Solutions:**

1. **Verify API Key**
   - Ensure global API key is configured
   - Test API key connection

2. **Clear Cache**
   - Save global configuration again
   - Wait 30 minutes for cache to refresh
   - Or restart Jenkins to clear cache immediately

3. **Check Network**
   - Ensure Jenkins can reach `https://app.superqa.ai`
   - Check firewall/proxy settings

## Execution Issues

### Tests Timeout

**Symptoms:**
- Build fails with timeout error
- Tests don't complete within configured time

**Solutions:**

1. **Increase Timeout**
   - Adjust Poll Timeout in job configuration
   - Match timeout to test suite size:
     - Smoke: 15 minutes
     - Regression: 90 minutes
     - Full E2E: 120 minutes

2. **Check Test Status**
   - Log in to SuperQA
   - Verify tests are actually running
   - Check for stuck tests

### Allure Reports Not Generated

**Symptoms:**
- No Allure report link in build
- Reports folder is empty

**Solutions:**

1. **Verify Allure Plugin**
   - Install Allure Jenkins Plugin
   - Go to Manage Plugins → Installed
   - Search for "Allure"

2. **Check Configuration**
   - Ensure "Publish Allure Report" is enabled
   - Verify custom folder name is correct

3. **Check Build Logs**
   - Look for download errors in console output
   - Verify network connectivity to SuperQA

### Attachments Not Downloading

**Symptoms:**
- Videos/screenshots missing from reports
- Attachment download errors in logs

**Solutions:**

1. **Check Network**
   - Ensure Jenkins can download from SuperQA CDN
   - Check firewall rules

2. **Verify Disk Space**
   ```bash
   df -h
   ```
   - Ensure sufficient disk space for downloads

3. **Check Permissions**
   - Verify Jenkins has write access to workspace
   - Check folder permissions

## Pipeline Issues

### Parameter Not Detected

**Symptoms:**
- Pipeline can't find SUPERQA_PARAMETER
- Empty values in pipeline execution

**Solutions:**

1. **Verify Parameter Name**
   ```groovy
   // Ensure parameter name matches
   parameters {
       superQAParameter(
           name: 'SUPERQA_PARAMETER',  // Must match
           ...
       )
   }
   
   steps {
       superQATest(
           parameterName: 'SUPERQA_PARAMETER'  // Must match
       )
   }
   ```

2. **Check Parameter Scope**
   - Parameters must be defined at pipeline level
   - Not inside stages or steps

### Result Object Null

**Symptoms:**
- `result` variable is null
- Cannot access result properties

**Solutions:**

1. **Wrap in Script Block**
   ```groovy
   steps {
       script {
           def result = superQATest(...)
           echo "Total: ${result.totalTestCases}"
       }
   }
   ```

2. **Check Return Value**
   - Ensure step completed successfully
   - Check for exceptions in logs

## Performance Issues

### Slow Dropdown Loading

**Symptoms:**
- Dropdowns take long time to load
- Job configuration page slow

**Solutions:**

1. **Use Caching**
   - Data is cached for 30 minutes
   - Wait for cache to populate on first load

2. **Reduce Projects**
   - If you have many projects, consider filtering
   - Use separate API keys for different teams

### Large Report Downloads

**Symptoms:**
- Build takes long time to complete
- High network usage

**Solutions:**

1. **Disable Allure for Some Builds**
   - Set `publishAllureReport: false` for quick builds
   - Enable only for important builds

2. **Use Custom Folders**
   - Organize reports in separate folders
   - Clean up old reports periodically

## Error Messages

### "Project not found"

**Cause:** Selected project doesn't exist or API key doesn't have access

**Solution:**
- Verify project name is correct
- Check API key permissions
- Refresh dropdown by re-saving global configuration

### "Test run not found"

**Cause:** Selected test run doesn't exist in the project

**Solution:**
- Verify test run name is correct
- Ensure test run belongs to selected project
- Check if test run was deleted

### "Environment not found"

**Cause:** Selected environment doesn't exist in the project

**Solution:**
- Verify environment name is correct
- Ensure environment belongs to selected project
- Check if environment was deleted

### "Execution failed to start"

**Cause:** SuperQA couldn't start the test execution

**Solution:**
- Check SuperQA service status
- Verify project/test run/environment configuration
- Check build logs for specific error message

## Getting Help

If you're still experiencing issues:

1. **Check Build Console**
   - Review full console output for error messages
   - Look for specific error codes

2. **Enable Debug Logging**
   - Go to Manage Jenkins → System Log
   - Add logger for `ai.superqa.jenkins`
   - Set level to `FINE` or `FINEST`

3. **Contact Support**
   - Email: [support@superqa.ai](mailto:support@superqa.ai)
   - Include:
     - Jenkins version
     - Plugin version
     - Build console output
     - Steps to reproduce

## Next Steps

- [Overview](./overview.md) - Plugin features and capabilities
- [Configuration](./configuration.md) - Review configuration options
- [Usage](./usage.md) - Learn best practices
