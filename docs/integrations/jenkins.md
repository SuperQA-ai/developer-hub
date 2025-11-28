# SuperQA Plugin

A Jenkins plugin for running SuperQA automated tests and generating Allure reports.

## Features

- 🚀 **Easy Integration**: Simple configuration with API key and project details
- 📊 **Allure Reports**: Automatic generation and publishing of Allure test reports with conditional control
- 📁 **Custom Report Folders**: Configurable Allure report folder names for organized workspace management
- 📎 **Rich Attachments**: Automatic download of test recordings, screenshots, and other attachments
- ⏱️ **Flexible Timeouts**: Configurable polling timeout for test execution (default: 1 hour)
- 🔄 **Real-time Monitoring**: Live status updates during test execution with improved parallel execution support
- 📈 **Detailed Results**: Pipeline steps return comprehensive test results with pass/fail counts and test case names
- 🎯 **Dynamic Dropdowns**: Auto-populated project, environment, and test run selections
- 🔧 **API Testing**: Built-in API key validation and project data refresh
- 💾 **Smart Caching**: 30-minute cache for optimal performance
- 🎛️ **Parameterized Builds**: All-in-one SuperQA parameter with cascading dependencies
- 🔗 **Smart Dependencies**: Test run and environment options update based on project selection
- 🧹 **Workspace Management**: Automatic cleanup of custom report folders per build
- 🔀 **Multiple Build Steps**: Support for multiple SuperQA steps in single build with smart state management
- 🔄 **Parallel Execution**: Enhanced support for parallel test runs with proper completion detection

## Installation

### Prerequisites

- Jenkins 2.426.3 or higher
- Java 11 or higher
- Allure Jenkins Plugin (optional, for report publishing)

### Build from Source

1. Clone this repository:
```bash
git clone <repository-url>
cd superqa-jenkins-plugin
```

2. Build the plugin:
```bash
mvn clean package
```

3. Install the plugin:
   - Go to Jenkins → Manage Jenkins → Manage Plugins
   - Click "Advanced" tab
   - Upload the `.hpi` file from `target/superqa-1.0.0.hpi`
   - Restart Jenkins

## Configuration

### Global Configuration (Recommended)

1. Go to Jenkins → **Manage Jenkins** → **Configure System**
2. Find the **"SuperQA"** section
3. Enter your **Default API Key**:
   - This will be used across all jobs unless overridden
   - API key is stored securely as a Jenkins Secret
   - Click **Save** to apply changes

#### API Testing & Validation

The plugin provides built-in tools to test and manage your API configuration:

- **🔍 Test API Key Button**: Validates your API key and fetches project data
- **📊 Real-time Feedback**: Shows project count, test runs, and environments
- **💾 Smart Caching**: 30-minute cache for optimal performance

**Benefits of Global Configuration:**
- ✅ **Centralized Management**: One API key for all jobs
- ✅ **Security**: API keys stored securely
- ✅ **Convenience**: No need to enter API key in every job
- ✅ **Flexibility**: Can still override per job if needed
- ✅ **Dynamic Dropdowns**: Auto-populated with your SuperQA projects
- ✅ **API Validation**: Built-in testing and troubleshooting tools

### Job Configuration

The SuperQA plugin offers two main build step options:

#### Option 1: SuperQA Test Execution (Parameter-Based)

**Recommended for flexibility and reusability**

1. Create a new Jenkins job or edit an existing one
2. Check **"This project is parameterized"**
3. Add **"SuperQA Parameter"** (see Parameterized Builds section below)
4. In the "Build" section, add **"SuperQA Test Execution"** build step
5. Configure the following:

**Required Parameters:**
- **API Key**: Your SuperQA API authentication key (leave empty to use global configuration)
- **SuperQA Parameter Name**: Name of the SuperQA parameter (default: `SUPERQA_PARAMETER`)
- **Allure Report Folder**: 🆕 Custom folder name for Allure reports (default: `allure-results`)

**Settings Source:**
- All test execution settings (project, test run, environment, timeout, Allure reports) come from the SuperQA Parameter
- If no parameter is found, defaults are used: 60 minutes timeout, Allure reports enabled
- Allure reports are saved to the specified custom folder for better workspace organization

#### Option 2: SuperQA Test Execution with Test Run (Integrated)

**Best for simple, fixed configurations**

1. Create a new Jenkins job or edit an existing one  
2. In the "Build" section, add **"SuperQA Test Execution with Test Run"** build step
3. Configure all settings directly in the build step:

**Required Parameters:**
- **API Key**: Your SuperQA API authentication key (leave empty to use global configuration)
- **Project Name**: Select from dropdown (auto-populated from your SuperQA projects)
- **Test Run Name**: Select from dropdown (filtered by selected project)
- **Environment Name**: Select from dropdown (filtered by selected project)
- **Poll Timeout (minutes)**: Maximum wait time for test completion (1-120 minutes, default: 60)
- **Publish Allure Report**: Enable automatic Allure report publishing (default: true)

#### Dynamic Dropdown Behavior

The plugin automatically fetches and caches your SuperQA project data:

- **🎯 Project Dropdown**: Shows all available projects from your SuperQA account
- **🔄 Cascading Logic**: Environment and test run dropdowns update based on project selection
- **💾 Smart Caching**: Data is cached for 30 minutes to ensure fast loading
- **🔄 Auto-Refresh**: Data is automatically fetched when API key is saved

**Note:** The API Base URL is automatically set to `https://app.superqa.ai/api` and cannot be changed.

### Parameterized Builds (Recommended)

For dynamic project selection and better user experience, configure your jobs with the all-in-one SuperQA Parameter:

#### Setup Instructions

1. **Enable Parameterized Builds**:
   - In your Jenkins job, check **"This project is parameterized"**

2. **Add SuperQA Parameter**:
   - Click **"Add Parameter"** → **"SuperQA Parameter"**
   - **Name**: `SUPERQA_PARAMETER` (recommended)
   - **Description**: `SuperQA project, test run, environment, and execution settings`
   - **API Key**: (Optional) For populating default dropdowns during configuration
   - **Default Project**: Choose your most common project
   - **Default Test Run**: Choose your most common test run  
   - **Default Environment**: Choose your most common environment
   - **Default Poll Timeout**: Set default timeout in minutes (1-120, default: 60)
   - **Default Publish Allure Report**: Enable/disable Allure reports by default (default: true)

3. **Configure Build Step**:
   - Add **"SuperQA Test Execution"** build step
   - **API Key**: Leave empty (uses global configuration)
   - **SuperQA Parameter Name**: `SUPERQA_PARAMETER` (or leave empty for auto-detection)
   - All settings will be automatically detected from the parameter

#### Benefits of Parameterized Builds

- ✅ **All-in-One Parameter**: Project, test run, environment, timeout, and Allure settings in one parameter
- ✅ **Smart Dependencies**: Test runs and environments automatically filter based on project
- ✅ **Complete Control**: Users can adjust timeout and Allure settings per build
- ✅ **Simplified Setup**: Easier job configuration with single parameter
- ✅ **User-Friendly**: Clean "Build with Parameters" interface
- ✅ **Flexible**: Different users can run different test combinations with custom settings
- ✅ **Reusable**: One job configuration supports multiple test scenarios

#### Build with Parameters Experience

When users click **"Build with Parameters"**, they'll see a comprehensive SuperQA Parameter with:
- **Project**: Dropdown populated from your SuperQA account
- **Test Run**: Dropdown that updates based on selected project  
- **Environment**: Dropdown that updates based on selected project
- **Poll Timeout (minutes)**: Number input for custom timeout (1-120 minutes)
- **Publish Allure Report**: Checkbox to enable/disable Allure reports

The interface looks like:

```
SuperQA Parameter
Project:              [Demo ▼]           <- Dropdown with all available projects
Test Run:             [CardReport Run ▼] <- Updates when project changes  
Environment:          [Demo ▼]           <- Updates when project changes
Poll Timeout:         [60] minutes       <- Adjustable timeout
Publish Allure Report [✓] Enabled        <- Enable/disable reports

[Build] [Cancel]
```

**Smart Behavior:**
- When user selects a different project, test run and environment dropdowns automatically refresh
- Only test runs and environments available for the selected project are shown
- Default values are pre-selected for quick builds
- Users can customize timeout and Allure settings for each build
- Settings are remembered in the parameter value for build history

## Usage

### Basic Usage

1. **Configure Global API Key** (Recommended):
   - Go to `Manage Jenkins` → `Configure System` → `SuperQA`
   - Enter your SuperQA API key
   - Click `Save`

2. **Create Jenkins Job**:
   - Create a new Jenkins job
   - Add `SuperQA Test Execution` build step
   - Leave API key empty (uses global configuration)
   - Set your project, test run, and environment names

3. **Run and Monitor**:
   - Run the Jenkins job
   - Monitor the build console for real-time progress
   - View Allure reports in the build results

### Advanced Usage

#### Custom Timeouts

The plugin now defaults to 60 minutes (1 hour) timeout. Adjust based on your test suite:
- Smoke tests: 10-15 minutes
- Standard suites: 30-45 minutes  
- Regression tests: 60-90 minutes
- Full E2E suites: 90-120 minutes

#### Allure Reports and Attachments

The plugin automatically handles rich test artifacts:

**Allure Reports:**
- **Conditional Control**: Enable/disable via SuperQA Parameter or build step
- **Smart Download**: Only downloads when enabled to save time and storage
- **Local Storage**: All files stored in `allure-results/` folder

**Rich Attachments:**
- **Video Recordings**: Automatic download of browser session recordings
- **Screenshots**: Test step screenshots and failure captures  
- **Local References**: JSON files updated to reference local files for offline viewing
- **Multiple Formats**: Supports MP4 videos, PNG/JPEG images, and other file types

**Example Build Output:**
```
📥 Downloading Allure reports...
✅ Downloaded: allure_report_20250917_044233-result.json
📎 Found 1 attachment(s) to download
📥 Downloading attachment: Browser Recording
✅ Downloaded attachment: recording_20250917_044233.mp4 (Browser Recording)
📊 Publishing Allure report...
```

**When Allure is Disabled:**
```
📊 Allure reports disabled - skipping download and publish
✅ SuperQA Test Execution completed successfully!
```

#### Multiple Test Runs

To run multiple test suites, you have several options:

**Option 1: Multiple Build Steps (Same Job)**
- Add multiple "SuperQA Test Execution" build steps
- First step cleans allure-results folder, subsequent steps append
- Use different SuperQA Parameters for different test configurations

**Option 2: Separate Jobs**
- Job 1: API Tests
- Job 2: UI Tests  
- Job 3: Integration Tests
- Each job can have its own timeout and Allure settings

#### Pipeline Integration

The SuperQA plugin supports multiple pipeline approaches with the new `@Symbol` annotations for cleaner syntax.

##### 1. Traditional Pipeline (Fixed Configuration)

```groovy
pipeline {
    agent any
    stages {
        stage('SuperQA Tests') {
            steps {
                // Using @Symbol annotation for cleaner syntax
                superQATest(
                    apiKey: '', // Uses global configuration
                    projectName: 'Demo',
                    testRunName: 'CardReport Run',
                    environmentName: 'Demo',
                    pollTimeoutMinutes: 30,
                    publishAllureReport: true
                )
            }
        }
    }
}
```

##### 2. Parameterized Pipeline with Standard Parameters

```groovy
pipeline {
    agent any
    parameters {
        choice(
            name: 'SUPERQA_PROJECT_NAME',
            choices: ['Demo', 'MyProject', 'TestProject'],
            description: 'SuperQA Project to execute tests for'
        )
        choice(
            name: 'SUPERQA_TEST_RUN_NAME', 
            choices: ['api-tests', 'smoke-tests', 'regression'],
            description: 'SuperQA Test Run to execute'
        )
        choice(
            name: 'SUPERQA_ENVIRONMENT_NAME',
            choices: ['Demo', 'Staging', 'Production'],
            description: 'SuperQA Environment to run tests against'
        )
        booleanParam(
            name: 'PUBLISH_ALLURE',
            defaultValue: true,
            description: 'Publish Allure reports'
        )
    }
    stages {
        stage('SuperQA Tests') {
            steps {
                superQATest(
                    apiKey: '', // Uses global configuration
                    projectName: '', // Automatically detects SUPERQA_PROJECT_NAME
                    testRunName: '', // Automatically detects TEST_RUN_NAME
                    environmentName: '', // Automatically detects ENVIRONMENT_NAME
                    pollTimeoutMinutes: 30,
                    publishAllureReport: params.PUBLISH_ALLURE
                )
            }
        }
    }
}
```

##### 3. Pipeline with SuperQA All-in-One Parameter (Recommended)

```groovy
pipeline {
    agent any
    parameters {
        // Using SuperQA consolidated parameter with @Symbol annotation
        // This provides dynamic dropdowns with cascading dependencies + timeout & Allure settings
        superQAParameter(
            name: 'SUPERQA_PARAMETER',
            description: 'SuperQA project, test run, environment, and execution settings',
            defaultProject: 'Demo',
            defaultTestRun: 'CardReport Run',
            defaultEnvironment: 'Demo',
            defaultPollTimeoutMinutes: 60,
            defaultPublishAllureReport: true
        )
    }
    
    stages {
        stage('Pre-Test Validation') {
            steps {
                script {
                    echo "🔍 Validating parameters..."
                    echo "📋 SuperQA Parameter: ${params.SUPERQA_PARAMETER}"
                    
                    // Extract components for display
                    def parts = params.SUPERQA_PARAMETER.split('\\|')
                    def projectName = parts.length > 0 ? parts[0] : 'Unknown'
                    def testRunName = parts.length > 1 ? parts[1] : 'Unknown'
                    def environmentName = parts.length > 2 ? parts[2] : 'Unknown'
                    def timeoutMinutes = parts.length > 3 ? parts[3] : '60'
                    def allureEnabled = parts.length > 4 ? parts[4] : 'true'
                    
                    echo "📋 Project: ${projectName}"
                    echo "🧪 Test Run: ${testRunName}" 
                    echo "🌍 Environment: ${environmentName}"
                    echo "⏱️ Timeout: ${timeoutMinutes} minutes"
                    echo "📊 Allure Reports: ${allureEnabled}"
                    
                    // Set build description
                    currentBuild.displayName = "#${BUILD_NUMBER} - ${projectName}"
                    currentBuild.description = "${testRunName} in ${environmentName} (${timeoutMinutes}min, Allure: ${allureEnabled})"
                }
            }
        }
        
        stage('SuperQA Test Execution') {
            steps {
                script {
                    try {
                        echo "🚀 Starting SuperQA tests..."
                        
                        // Simplified configuration - all settings come from the parameter
                        superQATest(
                            parameterName: 'SUPERQA_PARAMETER' // All settings auto-detected from this parameter
                        )
                        
                        echo "✅ SuperQA tests completed successfully!"
                        
                    } catch (Exception e) {
                        echo "❌ SuperQA tests failed: ${e.getMessage()}"
                        throw e
                    }
                }
            }
        }
        
        stage('Post-Test Actions') {
            steps {
                script {
                    echo "📊 Processing test results..."
                    
                    // Archive additional artifacts (always available even if Allure disabled)
                    archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
                    
                    // Check if Allure reports were generated
                    def parts = params.SUPERQA_PARAMETER.split('\\|')
                    def allureEnabled = parts.length > 4 ? parts[4] == 'true' : true
                    
                    if (allureEnabled) {
                        echo "📊 Allure reports generated and available in workspace"
                    } else {
                        echo "📊 Allure reports disabled - no report files generated"
                    }
                    
                    // Send notifications based on result
                    if (currentBuild.result == 'SUCCESS') {
                        echo "🎉 Test execution completed successfully!"
                    } else {
                        echo "💥 Test execution failed. Check logs for details."
                    }
                }
            }
        }
    }
    
    post {
        always {
            echo "🧹 Cleaning up..."
        }
        success {
            echo "🎊 Pipeline completed successfully!"
        }
        failure {
            echo "💔 Pipeline failed. Please check the logs."
        }
    }
}
```

##### 4. Pipeline with Integrated Build Step

```groovy
pipeline {
    agent any
    stages {
        stage('SuperQA Tests') {
            steps {
                // Using the integrated build step with @Symbol annotation
                // All settings configured directly in the build step
                superQATestRun(
                    projectName: 'Demo',
                    testRunName: 'CardReport Run', 
                    environmentName: 'Demo',
                    pollTimeoutMinutes: 60,
                    publishAllureReport: true
                )
            }
        }
    }
}
```

##### 5. Scripted Pipeline (Advanced)

```groovy
node {
    try {
        stage('Parameter Validation') {
            echo "🔍 Validating build parameters..."
            echo "📋 SuperQA Parameter: ${params.SUPERQA_PARAMETER}"
            
            // Extract and validate components
            def parts = params.SUPERQA_PARAMETER.split('\\|')
            def projectName = parts.length > 0 ? parts[0] : ''
            def testRunName = parts.length > 1 ? parts[1] : ''
            def environmentName = parts.length > 2 ? parts[2] : ''
            
            echo "📋 Selected Project: ${projectName}"
            echo "🧪 Selected Test Run: ${testRunName}"
            echo "🌍 Selected Environment: ${environmentName}"
            
            // Validate required parameters
            if (!projectName) {
                error("❌ Project name is required!")
            }
        }
        
        stage('SuperQA Test Execution') {
            echo "🚀 Starting SuperQA Test Execution..."
            
            // Record start time
            def startTime = System.currentTimeMillis()
            
            try {
                superQATest(
                    apiKey: '', // Uses global configuration
                    projectName: '', // Leave empty - will auto-detect from SUPERQA_PARAMETER
                    testRunName: '', // Leave empty - will auto-detect from SUPERQA_PARAMETER
                    environmentName: '', // Leave empty - will auto-detect from SUPERQA_PARAMETER
                    pollTimeoutMinutes: params.TIMEOUT_MINUTES.toInteger(),
                    publishAllureReport: params.ENABLE_ALLURE,
                    parameterName: 'SUPERQA_PARAMETER' // Specify which parameter to use
                )
                
                // Calculate execution time
                def endTime = System.currentTimeMillis()
                def executionTime = (endTime - startTime) / 1000
                
                echo "✅ SuperQA tests completed successfully!"
                echo "⏱️ Total execution time: ${executionTime} seconds"
                
            } catch (Exception e) {
                echo "❌ SuperQA tests failed: ${e.getMessage()}"
                currentBuild.result = 'FAILURE'
                throw e
            }
        }
        
    } catch (Exception e) {
        echo "💥 Pipeline failed: ${e.getMessage()}"
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        echo "🧹 Performing cleanup..."
    }
}
```

##### 5. Pipeline with Integrated Build Step

```groovy
pipeline {
    agent any
    
    stages {
        stage('SuperQA Test Execution') {
            steps {
                // Using the integrated build step with built-in dropdowns
                superQATestRun(
                    apiKey: '', // Uses global configuration
                    projectName: 'Demo', // Direct selection
                    testRunName: 'CardReport Run', // Direct selection
                    environmentName: 'Demo', // Direct selection
                    pollTimeoutMinutes: 30,
                    publishAllureReport: true
                )
            }
        }
    }
}
```

##### 6. Pipeline with Results and Custom Allure Folder (New!)

The `superQATest()` step now returns detailed test results and supports custom Allure report folders:

```groovy
pipeline {
    agent any
    parameters {
        string(
            name: 'ALLURE_FOLDER',
            defaultValue: 'test-reports',
            description: 'Custom folder for Allure reports'
        )
    }
    stages {
        stage('SuperQA Tests') {
            steps {
                script {
                    // Execute tests and capture detailed results
                    def result = superQATest(
                        parameterName: 'SUPERQA_PARAMETER',
                        allureReportFolder: params.ALLURE_FOLDER,  // 🆕 Custom folder
                        pollTimeoutMinutes: 90,
                        parallelRun: true
                    )
                    
                    // Process detailed results
                    echo "📊 Test Results Summary:"
                    echo "   Total: ${result.totalTestCases}"
                    echo "   Passed: ${result.passedTestCases}"
                    echo "   Failed: ${result.failedTestCases}"
                    echo "   Skipped: ${result.skippedTestCases}"
                    echo "   Success Rate: ${result.getSuccessRate()}%"
                    
                    // Show test case names
                    if (result.passedTestCases > 0) {
                        echo "✅ Passed Tests: ${result.getPassedTestCaseNames()}"
                    }
                    if (result.failedTestCases > 0) {
                        echo "❌ Failed Tests: ${result.getFailedTestCaseNames()}"
                        currentBuild.result = 'UNSTABLE'
                    }
                    if (result.skippedTestCases > 0) {
                        echo "⏭️ Skipped Tests: ${result.getSkippedTestCaseNames()}"
                    }
                    
                    // Set build description with results
                    currentBuild.description = "Tests: ${result.passedTestCases}✅ ${result.failedTestCases}❌ ${result.skippedTestCases}⏭️"
                }
            }
        }
    }
    post {
        always {
            // Archive reports from custom folder
            archiveArtifacts artifacts: "${params.ALLURE_FOLDER}/**", allowEmptyArchive: true
            
            // Publish Allure reports from custom folder
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: params.ALLURE_FOLDER]]
            ])
        }
    }
}
```

##### 7. Multi-Configuration Pipeline with Different Report Folders

```groovy
pipeline {
    agent any
    stages {
        stage('Parallel Test Execution') {
            parallel {
                stage('Smoke Tests') {
                    steps {
                        script {
                            def smokeResult = superQATest(
                                projectName: 'MyApp',
                                testRunName: 'Smoke Tests',
                                environmentName: 'Staging',
                                allureReportFolder: 'smoke-reports',
                                pollTimeoutMinutes: 30
                            )
                            
                            echo "🔥 Smoke Tests: ${smokeResult.passedTestCases}/${smokeResult.totalTestCases} passed"
                            
                            // Fail fast if smoke tests fail
                            if (smokeResult.hasFailures()) {
                                error("Smoke tests failed - stopping pipeline")
                            }
                        }
                    }
                }
                stage('API Tests') {
                    steps {
                        script {
                            def apiResult = superQATest(
                                projectName: 'MyApp',
                                testRunName: 'API Tests',
                                environmentName: 'Staging',
                                allureReportFolder: 'api-reports',
                                pollTimeoutMinutes: 45
                            )
                            
                            echo "🔌 API Tests: ${apiResult.passedTestCases}/${apiResult.totalTestCases} passed"
                        }
                    }
                }
                stage('UI Tests') {
                    steps {
                        script {
                            def uiResult = superQATest(
                                projectName: 'MyApp',
                                testRunName: 'UI Tests',
                                environmentName: 'Staging',
                                allureReportFolder: 'ui-reports',
                                pollTimeoutMinutes: 120,
                                parallelRun: true
                            )
                            
                            echo "🖥️ UI Tests: ${uiResult.passedTestCases}/${uiResult.totalTestCases} passed"
                        }
                    }
                }
            }
        }
        stage('Generate Combined Report') {
            steps {
                script {
                    echo "📊 Generating combined test report..."
                    // Combine all report folders for unified view
                    sh '''
                        mkdir -p combined-reports
                        cp -r smoke-reports/* combined-reports/ 2>/dev/null || true
                        cp -r api-reports/* combined-reports/ 2>/dev/null || true  
                        cp -r ui-reports/* combined-reports/ 2>/dev/null || true
                    '''
                }
            }
        }
    }
    post {
        always {
            // Archive all report folders
            archiveArtifacts artifacts: "*-reports/**", allowEmptyArchive: true
            
            // Publish combined Allure report
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [
                    [path: 'smoke-reports'],
                    [path: 'api-reports'],
                    [path: 'ui-reports']
                ]
            ])
        }
    }
}
```

##### Pipeline Symbol Reference

The plugin provides these `@Symbol` annotations for use in pipelines:

- **`superQATest`**: Main build step for executing SuperQA tests (now returns `SuperQAResult` object)
- **`superQATestRun`**: Integrated build step with built-in dropdowns for project, test run, and environment
- **`superQAParameter`**: Consolidated custom parameter for project, test run, and environment selection (with cascading dependencies)

##### SuperQATest Parameters

The `superQATest()` step supports the following parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `parameterName` | String | `"SUPERQA_PARAMETER"` | Name of SuperQA parameter to use |
| `projectName` | String | `""` | Override project name |
| `testRunName` | String | `""` | Override test run name |
| `environmentName` | String | `""` | Override environment name |
| `pollTimeoutMinutes` | Integer | `60` | Polling timeout in minutes |
| `publishAllureReport` | Boolean | `true` | Enable Allure report publishing |
| `parallelRun` | Boolean | `false` | Enable parallel test execution |
| `allureReportFolder` | String | `"allure-results"` | 🆕 Custom Allure report folder name |

##### SuperQAResult Object

The `superQATest()` step returns a `SuperQAResult` object with the following properties and methods:

**Properties:**
```groovy
result.totalTestCases          // Integer: Total number of test cases
result.passedTestCases         // Integer: Number of passed tests
result.failedTestCases         // Integer: Number of failed tests  
result.skippedTestCases        // Integer: Number of skipped tests
result.completedTestCases      // Integer: Number of completed tests
result.success                 // Boolean: Overall success status
result.overallResult           // String: "success" or "failed"
result.status                  // String: Execution status
result.currentPhase            // String: Current execution phase
result.scheduleId              // String: SuperQA execution ID
result.allureUrls              // List<String>: Allure report URLs
```

**Methods:**
```groovy
result.hasFailures()           // Boolean: true if any tests failed
result.getSuccessRate()        // Double: percentage of passed tests (0-100)
result.isCompleted()           // Boolean: true if execution finished
result.getPassedTestCaseNames()   // String: comma-separated passed test names
result.getFailedTestCaseNames()   // String: comma-separated failed test names
result.getSkippedTestCaseNames()  // String: comma-separated skipped test names
```

**Example Usage:**
```groovy
def result = superQATest(parameterName: 'SUPERQA_PARAMETER')

echo "Tests completed: ${result.isCompleted()}"
echo "Success rate: ${result.getSuccessRate()}%"

if (result.hasFailures()) {
    echo "Failed tests: ${result.getFailedTestCaseNames()}"
    currentBuild.result = 'UNSTABLE'
} else {
    echo "All tests passed: ${result.getPassedTestCaseNames()}"
}
```

##### Parameter Detection

The plugin automatically detects parameters in the following order:

1. **User-specified parameter**: If `parameterName` is provided in the build step, it looks for that specific parameter
2. **Auto-detection**: Looks for SuperQA parameters containing pipe-separated values (project|testrun|environment)
3. **Standard parameter names**: Falls back to `SUPERQA_PROJECT_NAME`, `SUPERQA_TEST_RUN_NAME`, `SUPERQA_ENVIRONMENT_NAME`

**Consolidated Parameter Format:**
- **SuperQA Parameter**: Contains all three values separated by pipes: `"Demo|CardReport Run|Demo"`
- **Extraction**: Plugin automatically extracts project, test run, and environment from the composite value

**Best Practices:**
- Use **Freestyle jobs with SuperQA Parameter** for the best user experience with dynamic dropdowns
- Use **Pipeline with superQAParameter** for advanced pipeline features with dynamic behavior
- Use **Standard pipeline parameters** for simple static parameter lists
- Specify `parameterName` in build step when using multiple SuperQA parameters
- Always leave API key empty to use global configuration for security

## API Integration

The plugin integrates with SuperQA API endpoints:

- `GET /execute-now/project-mapping` - Fetch project, environment, and test run data
- `POST /execute-now` - Trigger test execution
- `GET /execute-now/status/{scheduleId}` - Poll execution status
- Download Allure reports from provided URLs

### Project Mapping API

The plugin uses the project mapping endpoint to provide dynamic dropdowns:

```bash
curl -X GET "https://app.superqa.ai/api/execute-now/project-mapping" \
  -H "x-api-key: your-api-key"
```

**Response Structure:**
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "projectName": "My Test Project",
        "testRuns": ["api", "smoke-tests", "regression"],
        "environments": ["staging", "production"]
      }
    ],
    "totalProjects": 1,
    "totalTestRuns": 3,
    "totalEnvironments": 2
  }
}
```

**Caching Behavior:**
- **First Call**: API call + store in cache
- **Subsequent Calls**: Use cached data (if < 30 minutes old)
- **Cache Expiry**: After 30 minutes, next call fetches fresh data
- **Auto-Refresh**: Data is automatically fetched when API key is saved

## Troubleshooting

### Common Issues

1. **Authentication Failed**
   - Use the "Test API Key" button in global configuration to validate your API key
   - Verify your API key is correct (check both global and job-specific settings)
   - Check API key permissions in SuperQA dashboard
   - Ensure API base URL is accessible
   - Check if global API key is configured in Jenkins system settings

2. **Dropdowns Not Populated**
   - Click "Test API Key" button to fetch project data
   - Check if API key has proper permissions to access project mapping
   - Verify SuperQA account has projects configured

3. **Test Execution Timeout**
   - Increase poll timeout value
   - Check test execution status in SuperQA dashboard
   - Verify test run name and environment are correct

4. **Allure Reports Not Generated**
   - Check if Allure reports are enabled in SuperQA Parameter or build step
   - Look for log message: `📊 Allure reports disabled - skipping download and publish`
   - Ensure Allure Jenkins plugin is installed (if you want to publish reports)
   - Check if test execution completed successfully
   - Verify SuperQA is configured to generate Allure reports

5. **Allure Reports Downloaded But Not Needed**
   - Set `Publish Allure Report` to `false` in SuperQA Parameter
   - Check parameter value format: `project|testRun|environment|timeout|false`
   - Plugin will skip download when disabled to save time and storage

6. **Missing Video Recordings or Screenshots**
   - Video recordings and screenshots are only downloaded when Allure reports are enabled
   - Check if test execution generated attachments in SuperQA dashboard
   - Look for log messages: `📎 Found X attachment(s) to download`
   - Files are saved to `allure-results/` folder with original names

7. **Build Fails Immediately**
   - Check Jenkins console logs for detailed error messages
   - Verify all required parameters are provided
   - Test API connectivity using the "Test API Key" button

8. **Project Data Not Updating**
   - Check if cache has expired (30-minute cache duration)
   - Verify API key permissions for project mapping endpoint
   - Data is automatically refreshed when API key is saved

9. **Parameterized Builds Issues**
   - **Parameters not detected**: Ensure parameter names match exactly (`SUPERQA_PARAMETER` for consolidated parameter, or `SUPERQA_PROJECT_NAME`, `SUPERQA_TEST_RUN_NAME`, `SUPERQA_ENVIRONMENT_NAME` for individual parameters)
   - **Build fails with "No project name specified"**: Check console output for parameter detection debug messages and verify `parameterName` field in build step
   - **Multiple SuperQA parameters**: Use the `parameterName` field in the build step to specify which parameter to use
   - **Empty parameter values**: Verify that the SuperQA Parameter contains pipe-separated values (project|testrun|environment)

8. **SuperQA Parameter Configuration**
   - **SuperQA Parameter not available**: Ensure plugin is properly installed and Jenkins is restarted
   - **Cascading dependencies not working**: Verify JavaScript is enabled in browser and no console errors
   - **Default values not showing**: Check API key configuration and project data availability
   - **Parameter format issues**: Ensure the parameter value follows the format "project|testrun|environment"

### Debug Mode

Enable debug logging in Jenkins:
1. Go to Manage Jenkins → System Log
2. Add new log recorder for `io.jenkins.plugins.superqa`
3. Set log level to `FINE` or `ALL`

## Development

### Building

```bash
mvn clean compile
mvn clean test
mvn clean package
```

### Testing

```bash
mvn clean test
```

### Local Development

1. Start Jenkins with plugin:
```bash
mvn hpi:run
```

2. Access Jenkins at `http://localhost:8080/jenkins`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review Jenkins and SuperQA documentation

## Changelog

### Version 1.0.0
- Initial release
- Basic test execution functionality
- Allure report integration
- Configurable timeouts and parameters
- Dynamic dropdowns for project, environment, and test run selection
- API key testing and validation tools
- Smart caching system (30-minute cache)
- Project mapping API integration
- Global configuration with centralized API key management
- **NEW**: Parameterized builds with custom SuperQA parameters
- **NEW**: Cascading parameter dependencies (test run and environment depend on project)
- **NEW**: Enhanced "Build with Parameters" user experience
- **NEW**: Smart parameter detection and fallback mechanisms
- **NEW**: Comprehensive debug logging for parameter troubleshooting
