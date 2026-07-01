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

## Understanding Credit Types

Each credit deduction is categorized by type so you know exactly what consumed credits and why. The **Type** filter (and the **Type** column in the table) uses these categories:

| Credit Type | What triggered it |
|---|---|
| **Test Execution** | A single test case was manually triggered or run via CI/CD. |
| **Step Execution** | An individual test step was executed (e.g., during step-level debugging or verification in the editor). |
| **Batch Execution** | A group of test cases was executed together as a batch run. |
| **Scheduled Run** | A test run was automatically triggered by a configured Schedule (e.g., a nightly run). |
| **Credit Recharge** | Credits were added to your account (a top-up or plan renewal). This row shows a positive credit addition, not a deduction. |
| **Generate Test Steps** | Credits were consumed when the AI generated test steps for a test case using the AI Browser Understanding feature. |

---

## Searching and Filtering

Use the **Filters** panel (click the Filters button at the top of the table) to narrow down your usage history:

| Filter | Description |
|---|---|
| **Type** | Filter by credit type — Test Execution, Step Execution, Batch Execution, Scheduled Run, Credit Recharge, or Generate Test Steps. |
| **Project** | Show only transactions for a specific project. |
| **Suite** | Further narrow results to a specific Test Suite within the selected project. |
| **Scenario** | Filter down to a specific Scenario within the selected Suite. |
| **Date Range** | Filter by a custom date range using the date picker. |

Once you've set your filters, click **Apply Filters**. To clear all filters and return to the full history, click **Reset**.

---

## Source types

The **Source** column indicates where the credits were drawn from:

- **Subscription** — credits from your plan's included monthly allocation.
- **Extra** — credits from a separately purchased extra credit balance. Extra credits are only consumed after your included credits are exhausted.

---

## Frequently asked questions

**Why do some runs cost different amounts?**
Credit cost depends on the type and complexity of the run. A Scheduled Run of a full test suite costs more credits than a single Step Execution. AI features like Generate Test Steps also consume credits.

**How far back does the history go?**
Usage history is retained for the duration of your subscription. Use the Date Range filter to review past activity.

**What is a Credit Recharge entry?**
When your plan renews or you purchase extra credits, a Credit Recharge entry appears in your history showing the number of credits added to your balance.

