---
id: creation
title: Creating a Schedule
sidebar_position: 2
---

# Creating a Schedule

To create a new schedule, navigate to **Run → Schedules** and click **+ New Schedule**.

## Schedule Fields

| Field | Description |
|---|---|
| **Schedule Name** | A unique, descriptive name for this schedule (e.g., `Nightly Regression – Staging`). |
| **Test Plan** | Select the Test Plan whose test cases will be executed. All test cases mapped to this plan will run. |
| **Schedule Type** | Choose how the schedule recurs (see types below). |
| **Execution Date & Time** | The date and time for the first (or only) execution. |
| **Run Mode** | Choose how test cases are executed: **Sequential** or **Parallel**. |
| **Environment** | Select the target environment: `Staging`, `Production`, or any custom environment you have configured. |
| **Notifications** | Configure alert recipients for execution outcomes. |

---

## Schedule Types

### 🔁 Recurring – Daily
Runs automatically every day at the specified time. Ideal for overnight regression suites or daily smoke checks.

```
Example: Runs every day at 02:00 AM on Staging
```

### 📅 Recurring – Weekly
Runs on a specific day of the week at the specified time. Perfect for end-of-week full regression cycles.

```
Example: Runs every Friday at 10:00 PM on Production
```

### ⏱️ One-Time
Runs a single time at the specified date and time, then deactivates automatically. Useful for pre-release validation or deployment verification.

```
Example: Runs once on 2024-08-15 at 06:00 AM on Staging
```
