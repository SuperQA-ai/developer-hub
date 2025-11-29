---
sidebar_position: 5
title: Pipeline Integration
description: Integrate SuperQA with Jenkins pipelines
---

# Pipeline Integration

Learn how to integrate SuperQA testing into your Jenkins pipelines using declarative or scripted syntax.

## Pipeline Syntax

The SuperQA plugin provides these symbols for pipeline use:

- **`superQATest`**: Main build step (returns `SuperQAResult` object)
- **`superQATestRun`**: Integrated build step with direct configuration
- **`superQAParameter`**: Parameter for project/test run/environment selection

## Declarative Pipeline Examples

### Basic Pipeline

Simple pipeline with fixed configuration:

```groovy
pipeline {
    agent any
    stages {
        stage('SuperQA Tests') {
            steps {
                superQATest(
                    projectName: 'Demo',
                    testRunName: 'Smoke Tests',
                    environmentName: 'Staging',
                    pollTimeoutMinutes: 30,
                    publishAllureReport: true
                )
            }
        }
    }
}
```

### Parameterized Pipeline

Pipeline with SuperQA parameter for user selection:

```groovy
pipeline {
    agent any
    parameters {
        superQAParameter(
            name: 'SUPERQA_PARAMETER',
            description: 'SuperQA test configuration',
            defaultProject: 'Demo',
            defaultTestRun: 'Smoke Tests',
            defaultEnvironment: 'Staging',
            defaultPollTimeoutMinutes: 60,
            defaultPublishAllureReport: true
        )
    }
    
    stages {
        stage('SuperQA Tests') {
            steps {
                superQATest(
                    parameterName: 'SUPERQA_PARAMETER'
                )
            }
        }
    }
}
```

### Pipeline with Results Handling

Capture and process test results:

```groovy
pipeline {
    agent any
    stages {
        stage('SuperQA Tests') {
            steps {
                script {
                    def result = superQATest(
                        projectName: 'MyApp',
                        testRunName: 'Regression',
                        environmentName: 'Staging',
                        pollTimeoutMinutes: 90
                    )
                    
                    echo "📊 Test Results:"
                    echo "   Total: ${result.totalTestCases}"
                    echo "   Passed: ${result.passedTestCases}"
                    echo "   Failed: ${result.failedTestCases}"
                    echo "   Success Rate: ${result.getSuccessRate()}%"
                    
                    if (result.hasFailures()) {
                        echo "❌ Failed Tests: ${result.getFailedTestCaseNames()}"
                        currentBuild.result = 'UNSTABLE'
                    }
                    
                    currentBuild.description = "Tests: ${result.passedTestCases}✅ ${result.failedTestCases}❌"
                }
            }
        }
    }
}
```

### Multi-Suite Pipeline

Run multiple test suites with custom report folders:

```groovy
pipeline {
    agent any
    stages {
        stage('Parallel Tests') {
            parallel {
                stage('Smoke Tests') {
                    steps {
                        script {
                            def result = superQATest(
                                projectName: 'MyApp',
                                testRunName: 'Smoke Tests',
                                environmentName: 'Staging',
                                allureReportFolder: 'smoke-reports',
                                pollTimeoutMinutes: 15
                            )
                            echo "🔥 Smoke: ${result.passedTestCases}/${result.totalTestCases} passed"
                        }
                    }
                }
                stage('API Tests') {
                    steps {
                        script {
                            def result = superQATest(
                                projectName: 'MyApp',
                                testRunName: 'API Tests',
                                environmentName: 'Staging',
                                allureReportFolder: 'api-reports',
                                pollTimeoutMinutes: 30
                            )
                            echo "🔌 API: ${result.passedTestCases}/${result.totalTestCases} passed"
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '*-reports/**', allowEmptyArchive: true
            allure([
                results: [
                    [path: 'smoke-reports'],
                    [path: 'api-reports']
                ]
            ])
        }
    }
}
```

## Scripted Pipeline Examples

### Basic Scripted Pipeline

```groovy
node {
    stage('SuperQA Tests') {
        try {
            def result = superQATest(
                projectName: 'Demo',
                testRunName: 'Smoke Tests',
                environmentName: 'Staging',
                pollTimeoutMinutes: 30
            )
            
            echo "✅ Tests completed: ${result.getSuccessRate()}% success rate"
            
        } catch (Exception e) {
            echo "❌ Tests failed: ${e.getMessage()}"
            currentBuild.result = 'FAILURE'
            throw e
        }
    }
}
```

### Advanced Scripted Pipeline

```groovy
node {
    try {
        stage('Validation') {
            echo "🔍 Validating parameters..."
            def parts = params.SUPERQA_PARAMETER.split('\\|')
            def projectName = parts[0]
            def testRunName = parts[1]
            def environmentName = parts[2]
            
            echo "📋 Project: ${projectName}"
            echo "🧪 Test Run: ${testRunName}"
            echo "🌍 Environment: ${environmentName}"
        }
        
        stage('Test Execution') {
            def startTime = System.currentTimeMillis()
            
            def result = superQATest(
                parameterName: 'SUPERQA_PARAMETER',
                allureReportFolder: "reports-${BUILD_NUMBER}"
            )
            
            def executionTime = (System.currentTimeMillis() - startTime) / 1000
            
            echo "⏱️ Execution time: ${executionTime} seconds"
            echo "📊 Results: ${result.passedTestCases}✅ ${result.failedTestCases}❌"
            
            if (result.hasFailures()) {
                currentBuild.result = 'UNSTABLE'
            }
        }
        
    } catch (Exception e) {
        echo "💥 Pipeline failed: ${e.getMessage()}"
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        echo "🧹 Cleanup complete"
    }
}
```

## SuperQAResult Object

The `superQATest()` step returns a result object with comprehensive test data.

### Properties

```groovy
result.totalTestCases          // Total number of test cases
result.passedTestCases         // Number of passed tests
result.failedTestCases         // Number of failed tests
result.skippedTestCases        // Number of skipped tests
result.success                 // Overall success status (boolean)
result.overallResult           // "success" or "failed"
result.status                  // Execution status
result.scheduleId              // SuperQA execution ID
```

### Methods

```groovy
result.hasFailures()                  // Returns true if any tests failed
result.getSuccessRate()               // Returns percentage (0-100)
result.isCompleted()                  // Returns true if execution finished
result.getPassedTestCaseNames()       // Comma-separated passed test names
result.getFailedTestCaseNames()       // Comma-separated failed test names
result.getSkippedTestCaseNames()      // Comma-separated skipped test names
```

### Usage Example

```groovy
def result = superQATest(parameterName: 'SUPERQA_PARAMETER')

if (result.isCompleted()) {
    echo "Success rate: ${result.getSuccessRate()}%"
    
    if (result.hasFailures()) {
        echo "Failed tests: ${result.getFailedTestCaseNames()}"
        currentBuild.result = 'UNSTABLE'
    } else {
        echo "All ${result.totalTestCases} tests passed!"
    }
}
```

## Pipeline Parameters

### superQATest Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `parameterName` | String | `"SUPERQA_PARAMETER"` | Name of SuperQA parameter |
| `projectName` | String | `""` | Override project name |
| `testRunName` | String | `""` | Override test run name |
| `environmentName` | String | `""` | Override environment name |
| `pollTimeoutMinutes` | Integer | `60` | Polling timeout (1-120) |
| `publishAllureReport` | Boolean | `true` | Enable Allure reports |
| `allureReportFolder` | String | `"allure-results"` | Custom report folder |

## Best Practices

### Error Handling

Always wrap test execution in try-catch:

```groovy
try {
    superQATest(...)
} catch (Exception e) {
    echo "Test execution failed: ${e.getMessage()}"
    currentBuild.result = 'FAILURE'
    throw e
}
```

### Build Descriptions

Set meaningful build descriptions:

```groovy
def result = superQATest(...)
currentBuild.description = "Tests: ${result.passedTestCases}✅ ${result.failedTestCases}❌"
```

### Artifact Archiving

Archive reports for historical analysis:

```groovy
post {
    always {
        archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
    }
}
```

## Next Steps

- [Usage Examples](./usage.md) - More usage patterns
- [Troubleshooting](./troubleshooting.md) - Common pipeline issues
