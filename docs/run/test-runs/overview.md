---
id: overview
title: Overview
sidebar_position: 1
slug: /run/test-runs
---

# Test Runs Overview

A **Test Plan** defines *what* to test and *when* — it groups your test cases by strategy (Smoke, Sanity, Regression) and configures how they run. A **Test Run** is the actual outcome of executing that plan. It is the answer to: *"Did my application pass the criteria I set?"*

Every time a Test Plan fires — on a schedule, manually, or from a CI/CD pipeline — SuperQA produces a Test Run record that gives you:

- **A pass/fail verdict** on every test case in the plan
- **The exact step where things went wrong** — not just "it failed", but which action, what was expected, and what actually happened
- **Evidence** — video, screenshots, and logs so you can act immediately, not just observe

Use Test Runs to answer: *"Is my app healthy right now? If not, what broke, where, and what do I do next?"*

---

## From Test Plan to Test Run — How It Works

```
Test Plan (your strategy)
    │
    ├─ Smoke Test Cases  ──┐
    ├─ Sanity Test Cases   ├──► SuperQA executes each case
    └─ Regression Cases  ──┘         │
                                      ▼
                              Test Run (the outcome)
                                      │
                    ┌─────────────────┼──────────────────┐
                    ▼                 ▼                   ▼
              Pass/Fail          Step-Level           Artifacts
              per case           error detail    (Video · Screenshots · Logs)
```

A Test Plan can produce **many Test Runs** over time — one per execution. This lets you track whether quality is improving, stable, or degrading across deployments.

---

## What a Test Run Tracks

Every time a schedule fires or a manual run is triggered, SuperQA creates a timestamped **Test Run** entry. This entry tracks:

- Which **Test Plan** was executed and against which **Environment**
- The **status of every test case** in that plan
- **Step-by-step execution details** for each test case — what happened and why
- **Artifacts** captured during execution: video, screenshots, logs

Test Runs are your primary debugging and audit surface. If something failed, this is where you find out exactly what, when, and why.

---

## Run Origins

A Test Run can be created from two sources:

| Source | Description |
|---|---|
| **Schedule** | Automatically triggered based on a configured daily, weekly, or one-time schedule. |
| **Test Plan** | Manually launched from a Test Plan's detail view by clicking **Run Now**. |

Both produce an identical Test Run record — the only difference is how the run was initiated.
