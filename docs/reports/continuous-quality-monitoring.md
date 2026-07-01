---
id: continuous-quality-monitoring
title: Continuous Quality Monitoring
sidebar_position: 3
---

# Continuous Quality Monitoring

**Continuous Quality Monitoring (CQM)** provides a long-term, high-level view of your application's health over time. Unlike the Release Confidence Score (which evaluates a single, point-in-time build), CQM analyzes trends across multiple continuous test executions.

## How it Works

CQM is driven by scheduled **Test Runs**. As your automated suites execute on a recurring basis (e.g., nightly, hourly, or on every commit to a specific branch), SuperQA aggregates the results to form a continuous quality baseline.

### Key Metrics Tracked

- **Pass Rate Trends:** Visualizes how your overall pass rate is shifting over time. A downward trend indicates degrading code quality or stale tests.
- **Flakiness Over Time:** Identifies tests that flip between passing and failing across multiple automated runs, allowing you to quarantine and fix unstable tests.
- **Execution Duration:** Tracks the time it takes your suites to run, helping you identify performance regressions or bloated test suites.

## Using the Dashboard

Navigate to **Reports & Analytics > Continuous Quality Monitoring** to access your telemetry data.

Use the dashboard to track the stability of your core features across days, weeks, or months. This data is invaluable for QA managers and engineering leads to ensure that continuous integration efforts are actually yielding continuous quality.
