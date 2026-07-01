---
id: reports
title: Reports
sidebar_position: 3
sidebar_class_name: menu__list-item--icon-configure-reports
---

# Reports

The Reports configuration page lets you define the rules that determine how SuperQA calculates and interprets your test execution results. Rather than just showing raw pass/fail counts, SuperQA produces a **Release Confidence score** — a single, weighted number that tells you how ready your application is for release.

Navigate to **Configure > Reports** to set your thresholds.

---

## Release Confidence

The **Release Confidence** score is automatically calculated based on two inputs:

1. **Severity Weights** — how much each failing test's severity impacts the overall score (configured in [Severity Weights](./severity-weights.md)).
2. **Test Execution Results** — the pass/fail outcomes of the latest test run.

A test run with only Minor failures will produce a much higher confidence score than one with Blocker or Critical failures.

---

## Setting the Release Threshold

The **Release threshold** slider defines the score at which your application is considered **Ready to release** versus still being in a **Caution** state.

| Zone | Score Range | Meaning |
|---|---|---|
| 🟡 **Caution** | 0 – below threshold | The release carries risk. Too many significant failures were detected. |
| 🟢 **Ready** | At or above threshold | The application meets your quality bar and is safe to release. |

The default threshold is **75**.

To adjust it:
1. Drag the **Release threshold** slider to your desired score.
2. Click **Save**.

> **Example:** With a threshold of 75, a test run scoring 74 is marked *Caution* and a run scoring 75 or higher is marked *Ready*. If your team has a stricter quality bar, raise the threshold to 85 or 90.

---

## How It All Connects

The Reports configuration works together with Severity Weights to give you a meaningful, context-aware quality signal:

```
Test Results + Severity Weights → Release Confidence Score → Compared to Threshold → Ready / Caution
```

This means you have full control over what "release ready" means for your team, without being locked into a one-size-fits-all definition.
