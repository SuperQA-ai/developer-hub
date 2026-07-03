---
id: release-runs
title: Release Runs
sidebar_position: 3
sidebar_class_name: menu__list-item--icon-release-runs
---

# Release Runs

A **Release Run** is the execution record produced when you manually trigger a **Release Plan** by clicking **Run Now**. It gives you the same step-by-step test case results, execution videos, screenshots, and logs as a [Test Run](/docs/run/test-runs) — but it is always linked to a specific **Release Plan milestone** rather than a recurring schedule.

:::important Key Difference from Test Runs
**Test Runs** can be triggered by a Schedule (automated, recurring) or manually from a Test Plan.  
**Release Runs** are **always manual** — triggered by clicking **Run Now** directly from a Release Plan. There is no scheduling. You run it when you are ready to validate a release.
:::

---

## When to Use a Release Run

Release Runs are your **pre-release gate**. Use them when you are about to ship a new version and need a definitive go/no-go signal against your release criteria.

Typical triggers:
- A new build is deployed to Staging and you need to validate it before pushing to Production
- A milestone (Major, Minor, or Patch release) is ready for final sign-off
- You want to generate a **Release Confidence Score** to confirm readiness

---

## Triggering a Release Run

1. Navigate to **Build → Release Plans**
2. Open the Release Plan you want to execute
3. Click **Run Now**
4. Select the **Environment** (e.g., `Staging`, `Production`)
5. Choose the **Run Mode** — Sequential or Parallel
6. Click **Confirm** to start execution

SuperQA immediately begins executing all test cases mapped to that Release Plan. A Release Run record is created under **Run → Release Runs** in real time.

---

## Release Run List

Navigate to **Run → Release Runs** to see all historical release executions.

| Column | Description |
|---|---|
| **Run Name** | Auto-generated name based on the Release Plan and timestamp (e.g., `v2.4.0 Release – 2024-08-15 10:00 AM`). |
| **Release Plan** | The Release Plan this run is linked to. |
| **Milestone** | The version milestone (e.g., `v2.4.0 – Major`, `v2.4.1 – Patch`). |
| **Environment** | The environment executed against (`Staging`, `Production`, or custom). |
| **Run Mode** | Sequential or Parallel. |
| **Status** | Overall run status: `Passed`, `Failed`, `In Progress`, or `Aborted`. |
| **Confidence Score** | The Release Confidence Score generated for this run. |
| **Duration** | Total execution time. |
| **Triggered By** | The user who clicked Run Now. |
| **Date & Time** | When the run started. |

---

## Release Run Detail

Click any release run to open its **detail view** — identical in structure to a Test Run detail, covering:

### Run Summary
- Total test cases: **Passed / Failed / Skipped / In Progress**
- Overall Pass Rate (%)
- Release Confidence Score verdict: ✅ **Ready to Ship** or ⚠️ **Caution**
- Environment and run mode used
- Start time and total duration

### Test Case Status Table

Every test case in the Release Plan is listed with its individual status:

| Status | Description |
|---|---|
| ✅ **Passed** | All steps executed successfully. |
| ❌ **Failed** | One or more steps failed or an assertion was not met. |
| ⏭️ **Skipped** | Skipped due to a dependency failure or manual override. |
| 🔄 **In Progress** | Currently executing (live run). |
| ⚠️ **Aborted** | Execution was interrupted before completion. |

---

## Step-Level Execution Details

Click any test case row to expand its full **step-level log**:

| Detail | Description |
|---|---|
| **Step Number** | Sequence order within the test case. |
| **Step Description** | The plain-English instruction executed (e.g., *"Click the Checkout button"*). |
| **Status** | Passed or Failed for that step. |
| **Assertion Result** | Actual vs. expected value if an assertion was included. |
| **Duration** | Time taken for that specific step. |
| **Error Message** | Exact error or mismatch reason if the step failed. |

---

## Execution Artifacts

Identical to Test Runs — every test case in a Release Run captures:

### 🎥 Execution Video
Full screen recording of the OmniQA AI Engine executing the test case inside the Omniblade Chrome Browser. Scrub through to see exactly what the AI did at every step.

### 📸 Screenshots
- Captured before and after each step action
- Captured at the exact point of any failure

### 📋 Logs
- Network requests during the run
- Browser console errors
- AI decision logs — what the engine interpreted at each step
- `@{env}` and `#{data}` variable resolution trace

:::note
All artifacts are accessible directly from the step-level detail panel within the Release Run.
:::

---

## Release Confidence Score

Unlike a standard Test Run, every Release Run automatically generates a **Release Confidence Score** on completion. This score:

- Weighs pass/fail rates by **severity** (Critical failures count more than Minor ones)
- Produces a clear verdict: ✅ **Ready to Ship** or ⚠️ **Caution — Critical Issues Found**

See [**Release Confidence Score**](/docs/reports/release-confidence-score) for full details on how the score is calculated.

---

## Re-Running a Release

From any Release Run detail view you can:

- **Re-Run All** — Re-execute all test cases in the Release Plan
- **Re-Run Failed Only** — Re-execute only the failed test cases, ideal for after a hotfix
- **Re-Run Single Test Case** — Target a specific failing test case for a quick re-check

---

## Next Steps

- [**Release Confidence Score**](/docs/reports/release-confidence-score) — Understand how your run results are turned into a ship/hold verdict.
- [**Release Plans**](/docs/build/release-plans) — Manage the milestones and test case mappings that power Release Runs.
- [**Test Runs**](/docs/run/test-runs) — For schedule-driven or continuous execution outside of release milestones.
