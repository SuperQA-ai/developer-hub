---
id: test-plans
title: Test Plans
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-test-plans
---

# Test Plans

A **Test Plan** answers the question: *"Which tests do I need to run, against which environment, and for what purpose?"* It is a structured, reusable configuration that bundles together selected Test Suites under a specific execution goal — such as a Regression cycle, a Smoke test before a release, or a Sprint validation.

Instead of manually selecting suites every time you want to run a specific category of tests, you define a Test Plan once and reuse it across every scheduled or manual execution. This ensures consistency across your QA cycles.

---

## 1. Creating a Test Plan

1. Navigate to **BUILD > Test Plans** in the left sidebar.
2. Click the **+ Add Test Plan** button (top right).
3. Fill in the form:

| Field | Description |
|---|---|
| **Plan Name** | A descriptive label for this plan (e.g., *Sprint 24 Regression*, *Pre-Release Smoke*). |
| **Environment** | Select the environment this plan will run against (e.g., Staging, Production). Environments are configured under **Configure > Environment**. |
| **Description** | Optionally describe the scope or goal of this Test Plan. |

4. Click **Create** to save the plan.

---

## 2. Adding Test Suites to a Plan

Once the plan is created, you need to associate Test Suites with it — these are the suites whose tests will actually run when this plan is executed.

1. Open the newly created Test Plan.
2. Click **+ Add Suite** or the **Add Test Suites** button.
3. A selection panel will appear listing all your available Test Suites.
4. Check the suites you want to include. You can include as many suites as needed.
5. Click **Confirm** to attach them.

> **Tip:** You can mix and match suites from different feature areas into a single Test Plan. For example, a *Full Regression* plan might include the Checkout, Authentication, and Settings suites all at once.

---

## 3. The Test Plan List View

The main Test Plans page shows a summary table of all your plans:

| Column | What it shows |
|---|---|
| **Plan Name** | The name and creation date of the plan. |
| **Environment** | The target environment configured for this plan. |
| **Test Suites** | The number of suites included in this plan. |
| **Test Cases** | The total count of individual test cases across all included suites. |
| **Status** | The last execution outcome of this plan (Passed, Failed, In Progress, or Not Run). |
| **Actions** | Options to Edit, Run, or Delete the plan. |

---

## 4. Running a Test Plan

Test Plans can be executed in two ways:

- **Manual Run**: From the Test Plans list, click the **Run** (▶) button on any plan to trigger an immediate execution.
- **Scheduled Run**: Attach the Test Plan to a **Schedule** (under RUN > Schedules) to automate it on a recurring basis (e.g., every night at midnight).

When a Test Plan is run, SuperQA executes each test case across all associated suites sequentially and generates a consolidated **Test Run Report** showing pass/fail counts, screenshots, and logs for each step.

> **What's Next?**
> Ready to automate? Attach your Test Plan to a **Schedule** so it runs automatically on a cadence that matches your development cycle.
