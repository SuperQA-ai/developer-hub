---
id: dashboard
title: Dashboard
sidebar_position: 3
sidebar_class_name: menu__list-item--icon-dashboard
---

# Dashboard

The Dashboard is your **mission control** for testing health. It provides a bird's-eye view of your entire workspace, enabling you to instantly answer key questions: *Are my tests passing? How are my runs trending over time? Are there any live issues I need to jump on?*

By aggregating data across all your Test Suites and Schedules, the Dashboard helps you spot bottlenecks early and take immediate action on failures.

---

## 1. Top-Level Metrics
At the very top of the Dashboard, you'll find four primary metric cards that give you the current state of your workspace at a glance:

| Metric | What it tracks |
|---|---|
| **Test Suites** | The total number of active Test Suites and the total Scenarios within them. |
| **Schedules** | The number of active automated schedules (e.g., nightly runs) and their current status (scheduled vs. failed). |
| **Run History** | The cumulative total of all executions, broken down by exact outcomes (Passed, Failed, Yet to Start). |
| **Success Rate** | Your overall pass percentage, represented visually by a progress bar. |

---

## 2. Visualizing Trends and Results
Below the metrics, two core charts help you understand the trajectory of your quality assurance efforts:

* **Test Results Overview**: A donut chart illustrating the exact distribution of your test outcomes (Passed, Failed, Yet to Start). You can toggle the view to see the raw distribution.
* **Test Execution Trend**: A line chart mapping your performance over a selected timeframe (defaulting to the Last 7 Days). It overlays the **Success Rate %** (blue line) against your **Total Executions** (green line), making it easy to spot if a sudden spike in executions correlated with a drop in success rate.

---

## 3. Live Overview & Integrations
The lower section of the Dashboard keeps you connected to the pulse of your active testing and integrations.

### Test Suites Overview
A tabular summary of your active Test Suites showing the number of Scenarios, Test Cases, and Schedules attached to each suite. From here, you can click **View All** to jump straight into managing your suites.

### Recent Activity (Live) & Issue Tracking
This scrollable feed tracks live updates across your project, giving you a real-time audit log of what's happening.

* **Status Changes**: Watch as test cases transition from `yet to start` to `success` or `failed`.
* **Schedule Executions**: See when automated schedules are triggered and placed in a `pending` state.
* **Jira & Issue Integration**: When a test fails, a pink **Create Bug** button appears directly in the activity feed, allowing you to file a bug instantly. If a bug has already been linked, it displays a blue pill with the issue key (e.g., `SA-97`) that you can click to jump straight to the ticket in your issue tracker.

> **What's Next?**
> Now that you have an overview of your testing health, it's time to build out your coverage. Head over to the **Test Suites** section to start organizing your scenarios!
