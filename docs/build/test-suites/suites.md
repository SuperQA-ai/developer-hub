---
id: suites
title: Test Suites
sidebar_position: 2
---

# Test Suites

Before you can write a test case or leverage the AI, you need a place to organize your work. **Test Suites** are the fundamental building blocks of your QA architecture.

A Test Suite acts as a high-level container for a specific domain or feature area of your application. Examples of Test Suites include:
- Checkout Flow
- User Authentication
- Settings Page
- Integration Webhooks

By logically grouping your tests into suites, you ensure that test runs remain organized, execution reports are easy to decipher, and specific areas of your application can be isolated and tested independently.

---

## 1. Creating and Viewing a Test Suite

1. Navigate to **BUILD > Test Suites** in the left sidebar.
2. Click the **+ Add Test Suite** button.
3. Fill in the **Suite Name** and **Description**, then click **Create**.

When you click into a specific Test Suite, you are presented with its dedicated management view. This is where you actually build out your testing coverage for that specific domain.

### Suite Overview
At the top of the suite view, you can click the **Suite summary** info icon to toggle the overview display. This reveals critical metrics about the suite at a glance:
* **Scenarios count**: The number of groupings within this suite.
* **Test Cases count**: The total number of individual tests.
* **Credits consumed**: How many AI/execution credits this suite has utilized over its lifetime.
