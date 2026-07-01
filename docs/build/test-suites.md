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

## 1. Creating and Viewing a Test Suite

1. Navigate to **BUILD > Test Suites** in the left sidebar.
2. Click the **+ Add Test Suite** button.
3. Fill in the **Suite Name** and **Description**, then click **Create**.

When you click into a specific Test Suite, you are presented with its dedicated management view. This is where you actually build out your testing coverage for that specific domain.

### Suite Overview
At the top of the suite view, you can click the **Suite summary** info icon to toggle the overview display. This reveals critical metrics about the suite at a glance:
* **Scenarios count**: The number of groupings within this suite.
* **Test Cases count**: The total number of individual tests.
* **Credits consumed**: How many AI/execution credits this suite has utilized.

---

## 2. Test Cases: Regular vs. Reusable

Tests within a suite are organized under **Scenarios**. When you click **Add Test Case**, you are presented with two distinct types of test cases depending on your needs:

### Regular Test Case
A standard test case designed for a specific scenario. When creating a regular test case, you'll define:
* **Title & Description**: What the test does.
* **Classification**: You must define its **Severity**, **Priority**, and **Test Condition** (e.g., Happy Path). 
* **Conditions**: Optional Pre-conditions and Post-conditions.

### Reusable Template
Sometimes, you have a sequence of steps (like "Log into the application") that applies to dozens of different test cases. Instead of rewriting those steps every time, you can create a **Reusable Template**.
* The fields for a Reusable Template are identical to a Regular Test case.
* The key difference is that once saved, this template can be **imported** directly into other test cases across different suites, saving you time and ensuring consistency.

---

## 3. Creating Test Steps (The Editor)

Once you've created a test case and clicked **Enter Edit Mode**, you arrive at the Steps Editor. SuperQA provides powerful, AI-driven ways to build out the exact sequence of actions for your test.

By clicking the **More Options** (⋮) button in the steps header, you unlock several advanced step creation methods:

### Import Template
If you previously created a Reusable Template (like a login flow), you can click **Import Template** to instantly pull those predefined steps into your current test case.

### Generate Steps with AI (Browser Understanding)
Instead of manually typing out CSS selectors or XPath, you can use SuperQA's AI Browser Understanding. 
Simply describe what you want the test to do in plain English. The AI will analyze your application's interface and automatically generate the exact, actionable steps required to perform that flow.

### SuperQA Click and Record
If you prefer a hands-on approach, you can activate the **Click and Record** feature. As you navigate and interact with your application in the browser, SuperQA will automatically record your clicks, inputs, and validations, converting them into formal test steps on the fly.
