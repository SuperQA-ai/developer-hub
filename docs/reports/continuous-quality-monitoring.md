---
id: continuous-quality-monitoring
title: Continuous Quality Monitoring
sidebar_position: 3
sidebar_class_name: menu__list-item--icon-continuous-quality
---

# Continuous Quality Monitoring

**Continuous Quality Monitoring (CQM)** is SuperQA's always-on quality dashboard — automatically fed by every scheduled Test Run. It tracks your product's stability over time, surfaces degrading trends before they become production incidents, and gives QA leads and engineering managers a single, authoritative view of quality health across releases and sprints.

---

## Overview

While the [Release Confidence Score](/docs/reports/release-confidence-score) answers *"Is this build safe to ship right now?"*, Continuous Quality Monitoring answers *"Is our product quality improving or degrading over time?"*

CQM aggregates data across all your [Schedules](/docs/run/schedules) and [Test Runs](/docs/run/test-runs) to build a longitudinal picture of your test suite's health — tracking pass rates, flakiness frequency, self-healing events, and stability drift across days, weeks, and months.

---

## Core Metrics

### 📈 Stability Trend
The primary chart in CQM. Shows your overall **pass rate (%)** plotted over time across all scheduled runs.

- An **upward trend** indicates improving code quality or test coverage maturing
- A **downward trend** is an early warning signal — code changes are breaking more tests over time
- **Flat lines** after a drop may indicate a known regression that has not been fixed

You can filter the trend by:
- **Test Plan** — Focus on a specific feature area or regression suite
- **Environment** — Compare Staging vs. Production stability
- **Date Range** — Zoom into a sprint, a month, or a quarter

---

### 🔍 Quality Drift Detection

CQM uses AI-powered **drift detection** to identify when your quality trend is meaningfully changing — not just random variation:

| Drift Type | Description |
|---|---|
| **Gradual Drift** | Pass rate has been declining slowly over multiple runs — often caused by accumulating technical debt or outdated tests |
| **Sudden Drop** | A sharp decline in pass rate between two consecutive runs — typically a bad code push or a breaking infrastructure change |
| **Recovery** | A significant improvement in pass rate — useful to confirm a hotfix or refactor actually worked |

When drift is detected, SuperQA surfaces a **Drift Alert** with the affected test cases, the date it started, and the probable affected area.

---

### 🟡 Flakiness Trends

CQM tracks **flaky tests** across all runs over time — not just within a single release run.

A test is classified as **chronically flaky** if it has failed and recovered (without code changes) across more than a configurable threshold of runs.

| Metric | Description |
|---|---|
| **Flakiness Rate (%)** | Percentage of runs in which this test was flaky |
| **Flip Count** | Total number of pass→fail→pass transitions over the period |
| **Last Stable Run** | The most recent run in which the test passed cleanly on first attempt |
| **Environment Correlation** | Whether the flakiness is isolated to a specific environment (e.g., only flaky on Staging) |

#### Why Flakiness Trends Matter

A test that is flaky in every release run is not just noisy — it is eroding trust in your entire test suite. CQM surfaces the **top flaky tests** ranked by their flakiness rate so you can prioritize which tests to fix, quarantine, or retire.

:::tip
Use the **Quarantine** flag on chronically flaky tests to exclude them from confidence score calculations while you investigate. Quarantined tests still run and are tracked in CQM — they just don't penalize your release scores.
:::

---

### 🔧 Self-Healing Trends

CQM tracks **self-healing events** across all runs over time. Self-healing occurs when the OmniQA AI Engine detects that a step is failing due to a minor UI change and autonomously finds the correct element to continue execution.

| Metric | Description |
|---|---|
| **Self-Healing Rate** | Number of self-healing events per run over time |
| **Healing Success Rate** | Percentage of self-healing attempts that successfully continued execution |
| **Most Healed Test Cases** | Which test cases triggered self-healing most frequently |
| **Most Healed Steps** | Which specific steps are most brittle and require frequent healing |

#### Interpreting Self-Healing Trends

- A **rising self-healing rate** is an early indicator of **UI drift** — your application's front-end is changing faster than your test cases are being updated. This is a maintenance signal.
- A **declining self-healing rate** after a period of updates means your test cases are becoming more robust and aligned with the current UI.
- **Failed self-healing events** (where the AI could not find the element and the test ultimately failed) highlight test cases most urgently in need of manual update.

:::important
Self-healing keeps your tests green in the short term, but it is not a substitute for keeping test cases up to date. Use the self-healing trend data to prioritize test maintenance work.
:::

---

## Dashboard Layout

Navigate to **Reports & Analytics → Continuous Quality Monitoring** to access the dashboard.

### Sections

| Section | Description |
|---|---|
| **Quality Trend Chart** | Pass rate plotted over time across all scheduled runs |
| **Drift Alerts** | AI-detected quality drift events with affected test cases |
| **Flakiness Leaderboard** | Top flaky tests ranked by flakiness rate, with flip counts and environment correlation |
| **Self-Healing Summary** | Self-healing event count per run, success rate, and most frequently healed steps |
| **Run History Table** | Every scheduled test run with its date, test plan, environment, pass rate, flaky count, and self-healing count |

---

## Filters & Time Ranges

All charts and tables in CQM support the following filters:

| Filter | Options |
|---|---|
| **Test Plan** | Filter to a specific plan or view all plans aggregated |
| **Environment** | `Staging`, `Production`, or any custom environment |
| **Schedule** | Filter to data from a specific schedule |
| **Date Range** | Last 7 days, 30 days, 90 days, or a custom range |

---

## Scheduled Reporting

CQM data is refreshed automatically after every scheduled run completes. You can also configure **periodic email reports** to be delivered to your team:

- **Daily Digest** — A summary of all runs that executed in the last 24 hours with pass rate and alerts
- **Weekly Trend Report** — Full quality trend, flakiness leaderboard, and self-healing summary for the week
- **Drift Alert** — Triggered immediately when CQM detects a significant quality drop in a run

Configure delivery recipients and frequency in **Configure → Reports**.

---

## Related

- [**Release Confidence Score**](/docs/reports/release-confidence-score) — Per-release go/no-go verdict with severity-weighted scoring
- [**Schedules**](/docs/run/schedules) — Set up the automated runs that feed CQM data
- [**Test Runs**](/docs/run/test-runs) — Individual run records with full step-level detail
- [**Configure Reports**](/docs/configure/reports) — Set up email report delivery for your team

