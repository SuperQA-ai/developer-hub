---
id: usage-history
title: Usage History
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-usage-history
---

# Usage History

The **Usage History** page provides a transaction-level log of every credit charge across all your projects. Navigate to it from **Profile → Billing → Usage History**.

---

## Transaction table

The page displays a table with the following columns:

| Column | Description |
|---|---|
| **Date** | The date and time the credit charge occurred. |
| **Type** | The kind of activity that consumed credits (e.g. *Scheduled Run*, *Test Execution*). |
| **Project** | The project the activity belongs to. |
| **Suite** | The test suite that was executed. |
| **Scenario** | The specific test scenario within the suite, if applicable. |
| **Amount** | The number of credits consumed by this activity. |
| **Source** | How the credits were funded — *Subscription* (included credits) or *Extra* (purchased credits). |

---

## Searching and filtering

Use the controls at the top of the table to narrow down results:

- **Search** — type a keyword into the search bar to find entries by project name, suite, scenario, or type.
- **Filters** — click the **Filters** button to apply advanced filters such as date range, activity type, or project.

---

## Understanding credit amounts

Each row represents a single billable event. The **Amount** column shows the exact credits deducted. Credit costs vary depending on the type of activity:

| Activity type | Description |
|---|---|
| **Scheduled Run** | A test run triggered by a schedule. Typically consumes a small amount of credits per execution. |
| **Test Execution** | A manually triggered or CI-triggered test execution. Cost depends on test complexity and duration. |

---

## Source types

The **Source** column indicates where the credits were drawn from:

- **Subscription** — credits from your plan's included monthly allocation.
- **Extra** — credits from a separately purchased extra credit balance. Extra credits are only consumed after your included credits are exhausted.

---

## Frequently asked questions

**Why do some runs cost different amounts?**
Credit cost depends on the type and complexity of the run. Simple scheduled runs typically cost less than full test executions that involve more steps and browser resources.

**How far back does the history go?**
Usage history is retained for the duration of your subscription. You can filter by date range to review past activity.

**Can I export my usage history?**
You can use the search and filter controls to isolate specific entries for review.
