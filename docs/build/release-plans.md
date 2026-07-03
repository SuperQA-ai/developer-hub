---
id: release-plans
title: Release Plans
sidebar_position: 3
sidebar_class_name: menu__list-item--icon-release-plans
---

# Release Plans

While **Test Plans** are used to organize your general testing strategies (like Sanity, Regression, or Smoke testing), **Release Plans** are specifically designed to align with your product milestones. 

A Release Plan maps directly to the features you are about to ship—whether it's a **Major**, **Minor**, or **Patch/Hotfix** release. By bundling the exact test cases relevant to a release, you get targeted validation before deploying to production.

---

## 1. Creating a Release Plan

To map out your upcoming deployment:
1. Navigate to **BUILD > Release Plans** and click **+ New Release Plan**.
2. **Select the Release Type:** Choose between Major, Minor, or Patch depending on the scope of your deployment.
3. **Name & Describe:** Provide a version name (e.g., `Version 2.0 Release`) and a description of the release intent.
4. **Map Test Cases:** In the next step, select the specific Test Suites, Scenarios, or individual Test Cases that cover the new features or bug fixes. You can easily search, filter, and sequence the test cases exactly how they should be validated.

---

## 2. On-Demand Execution vs. Scheduling

**Important:** Release Plans cannot be scheduled to run automatically. 

The true purpose of a Release Plan is on-demand, manual execution right before you ship. This gives the team a dedicated, focused verification cycle that isn't mixed in with daily automated schedules.

---

## 3. Executing a Release Plan

When you are ready to ship, click **Execute Now** on your Release Plan. 

### Execution Settings
Before the run starts, the Execution Settings modal will prompt you to configure:
- **Run Mode:** Choose between **Sequential** (running one after another) or **Parallel** execution.
- **Environment:** Select the target environment (e.g., `production` or `staging`) you are validating. The system will automatically inject the corresponding test data for that environment.

### Live Browser & Confidence Score
Once executed, you can watch the test run live in the browser, giving you visual confirmation of exactly how the application is behaving. 

When the execution completes, SuperQA calculates a **Release Confidence Score**. This score is not just a simple pass/fail ratio; it dynamically calculates the health of your release based on your [Severity Weights](../configure/severity-weights.md) configuration. 

Because every test case has an assigned severity, failures carry different weights. A failed "Blocker" test will drastically lower your score, while a failed "Trivial" test will have a minor impact. Based on this weighted score, SuperQA gives you a clear, quantitative verdict: **Ready** to ship, or **Caution** if critical issues or flakiness were found. You can view detailed breakdowns of these runs under **Reports & Analytics > Release Confidence Score**.
