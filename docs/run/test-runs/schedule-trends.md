---
id: schedule-trends
title: Schedule-Wise Trends
sidebar_position: 4
---

# Schedule-Wise Trends

By default, the Test Runs page shows every individual execution in a flat list. To view your runs grouped by their schedule and analyze execution trends over time, switch to the **By Schedule** view using the toggle at the top right of the page.

![Test Runs list switched to the By Schedule view](/img/test_runs_by_schedule.png.png)

This view lists all your active and past schedules. Clicking into any schedule opens its **Trend Detail** view, which includes an Execution Calendar:

- **Pass Rate & Avg Duration:** See how stable and performant this specific schedule has been across all its runs.
- **Execution Calendar:** A GitHub-style contribution graph showing executions day by day. Green blocks indicate passing runs, and red blocks indicate failures, making it easy to spot flaky periods or recent regressions at a glance.

![Execution Calendar showing daily pass/fail trends for a schedule](/img/schedule_execution_calendar.png.png)
