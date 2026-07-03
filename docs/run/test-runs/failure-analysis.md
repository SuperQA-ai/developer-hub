---
id: failure-analysis
title: Failure Analysis
sidebar_position: 4
---

# Understanding Failed Status

:::danger Failed Test Cases Require Immediate Attention
A test case marked **Failed** means at least one step did not meet its expected outcome. Failed rows are highlighted with a **red border** in the Test Case Status Table — look for the ❌ icon and the red `Failed` badge.
:::

When a Test Run contains failures, the detail view surfaces them immediately:

- **Failed test cases appear at the top** of the Test Case Status Table (pinned above Passed and Skipped entries).
- Each failed row displays the **failing step count** inline (e.g., `2 of 8 steps failed`).
- Clicking a failed row expands the **step-level log** directly to the first failed step, with the exact error message shown in red.
- The **run summary banner** turns red and shows the total failure count prominently.

![Test Run detail view showing failed test cases highlighted in red with prominent Failed status badges](/img/test_run_failed_status_new.png.png)

## What Causes a Failure?

| Failure Type | Example |
|---|---|
| **Assertion mismatch** | Expected `"Welcome, Admin"` but got `"Login failed"` |
| **Element not found** | The button `#submit-order` was not present on the page |
| **Timeout** | The page did not load within the configured timeout window |
| **Hard Stop step** | A step marked Hard Stop failed and terminated execution immediately |
| **API error** | An upstream API returned a non-2xx response during test execution |
