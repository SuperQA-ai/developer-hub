---
id: test-cases
title: Test Cases & Importing
sidebar_position: 4
---

# Test Cases & Importing

Inside a Scenario, you write the actual **Test Cases**. A Test Case represents a single end-to-end journey that you want the AI to execute.

## Regular vs. Reusable Test Cases

SuperQA supports two distinct test case types to keep your architecture scalable and DRY (Don't Repeat Yourself).

### 1. Regular Test Cases
A standard test case designed to validate a specific flow once. When creating a regular test case, you define:
* **Title & Description**: What the test does.
* **Classification**: You must define its **Test Strategy** (e.g., Smoke, Regression), **Severity** (e.g., Blocker, Trivial), and **Priority**. These classifications are heavily used by the AI engine when calculating your Release Confidence Scores.
* **Conditions**: Optional Pre-conditions and Post-conditions.

### 2. Reusable Templates
Sometimes, you have a sequence of steps (like "Log into the application" or "Add item to cart") that applies to dozens of different test cases. 

Instead of rewriting those steps every single time, you can create a **Reusable Template**. 
* The fields for a Reusable Template are identical to a Regular Test Case.
* The key difference is that once saved, a Reusable Template can be **embedded directly into the steps** of other test cases across different suites. If the login flow ever changes, you only update the template once, and every test case that uses it inherits the change automatically.

---

## Importing Test Cases

If you are migrating from an older test management tool (like Excel, TestRail, or Jira), you do not have to rewrite your tests from scratch. SuperQA features a deeply integrated import engine.

When you upload your test cases, the system allows for massive field mapping natively. During the import process, you can map your legacy spreadsheet columns directly to SuperQA's advanced metadata fields:
- Map your old priority tags to SuperQA **Priority**.
- Map legacy severities directly to SuperQA **Severity**.
- Map existing **Test Strategy**, **Pre-conditions**, and **Post-conditions**.

Once imported, all that is left is to let the SuperQA AI execute the steps!
