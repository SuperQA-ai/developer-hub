---
id: test-suites
title: Test Suites
sidebar_position: 1
sidebar_class_name: menu__list-item--icon-test-suites
---

# Test Suites

Before you can write a test case, you need a place to organize it. **Test Suites** are the fundamental building blocks of your QA architecture. They allow you to group related testing scenarios into logical collections (e.g., "Checkout Flow," "User Authentication," or "Settings Page") so they can be executed and tracked together.

By logically grouping your tests into suites, you ensure that test runs remain organized, execution reports are easy to decipher, and specific areas of your application can be tested independently.

---

## 1. Creating a Test Suite

Creating a test suite is the first step in building your testing hierarchy.

1. Navigate to **BUILD > Test Suites** in the left sidebar.
2. Click the **+ Add Test Suite** button.
3. Fill in the required fields:
   * **Suite Name**: Give it a descriptive name (e.g., *E-Commerce Checkout*).
   * **Description**: Optionally describe what scenarios this suite is meant to cover.
4. Click **Create**.

Your new Test Suite will now appear in the list.

---

## 2. Navigating the Test Suite View

When you click into a specific Test Suite, you are presented with its dedicated management view. This is where you actually build out your testing coverage for that specific domain.

* **Header Metrics**: Instantly see how many Scenarios and Test Cases exist within this suite.
* **Add Scenario**: Within a suite, tests are further broken down into **Scenarios** (e.g., *Successful Login*, *Invalid Password*). Use the **+ Add Scenario** button to start creating these groups.
* **Test Case Listing**: All scenarios and their child test cases are listed here. You can expand a scenario to see its exact test cases, view their current automation status, and jump directly into the step editor.
* **Suite Execution**: From the top action bar, you can trigger a manual run of the entire suite directly against a specific environment, without needing to create a scheduled plan.

> **What's Next?**
> Now that you've created a Test Suite, the next step is to populate it. Learn how to break your suite down by creating Scenarios and adding **Test Cases** to them.
