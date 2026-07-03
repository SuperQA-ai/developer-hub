---
id: run-detail
title: Test Run List & Detail
sidebar_position: 3
---

# Test Run List & Detail

Navigate to **Run → Test Runs** to see all historical runs across your project. 

## The Test Run List

Each row in the list shows:

| Column | Description |
|---|---|
| **Run Name** | Auto-generated name based on the Test Plan and timestamp (e.g., `Regression Suite – 2024-08-15 02:00 AM`). |
| **Test Plan** | The Test Plan this run is linked to. |
| **Environment** | The environment the run was executed against (e.g., `Staging`, `Production`). |
| **Run Mode** | Sequential or Parallel. |
| **Status** | Overall run status: `Passed`, `Failed`, `In Progress`, or `Aborted`. |
| **Duration** | Total execution time. |
| **Triggered By** | `Schedule` or the user who triggered a manual run. |
| **Date & Time** | When the run started. |

### Filtering & Search

From the Test Runs list, you can filter runs by:

- **Test Plan** — Narrow to runs from a specific plan
- **Status** — Show only `Failed` runs for triage
- **Environment** — Filter by `Staging` or `Production`
- **Date Range** — Focus on a specific time window
- **Triggered By** — Filter manual vs. scheduled runs

:::tip Triage Workflow
Set the **Status** filter to `Failed` to instantly see only runs that need attention. Combine with a **Date Range** filter to scope your triage to the most recent deployment window.
:::

---



## Test Run Detail

Click any run from the list to open its **detail view**. This is the main execution report.

### Run Summary

The top of the detail view shows the run-level summary:

- Total test cases: **Passed / Failed / Skipped / In Progress**
- Overall Pass Rate (%)
- Environment and run mode used
- Start time and total duration

### Test Case Status Table

Below the summary, every test case in the mapped Test Plan is listed with its individual status.

| Status | Description |
|---|---|
| ✅ **Passed** | All steps in the test case executed successfully. |
| ❌ **Failed** | One or more steps failed or an assertion was not met. |
| ⏭️ **Skipped** | The test case was skipped due to a dependency failure or manual override. |
| 🔄 **In Progress** | The test case is currently being executed (live run). |
| ⚠️ **Aborted** | Execution was interrupted before this test case completed. |

---

## Step-Level Execution Details

Click any test case row to expand its **step-level execution log**. For each step in the test case you will see:

| Detail | Description |
|---|---|
| **Step Number** | The sequence order of the step within the test case. |
| **Step Description** | The plain-English instruction that was executed (e.g., *"Click the Login button"*). |
| **Status** | Passed or Failed for that individual step. |
| **Assertion Result** | If the step included an assertion, the actual vs. expected value is shown. |
| **Duration** | How long that specific step took to execute. |
| **Error Message** | If the step failed, the exact error or mismatch reason is displayed here. |

:::tip Hard vs. Soft Assertions
Steps marked as **Hard Stop** will terminate the test case immediately on failure. **Soft** steps log the failure and continue executing the remaining steps. You control this per step in the Test Case editor.
:::

---

## Re-Run a Test

From any Test Run detail view, you can quickly verify fixes without leaving the context:

- **Re-Run All** — Re-execute the entire Test Plan against the same or a different environment.
- **Re-Run Failed Only** — Re-execute only the test cases that failed, saving time when fixing specific issues.
- **Re-Run Single Test Case** — Drill into one test case and trigger a targeted re-run.

:::tip Re-Run Failed Tests Only
Use **Re-Run Failed Only** from the detail view to re-execute only failed test cases after you deploy a fix — no need to re-run the entire suite.
:::
