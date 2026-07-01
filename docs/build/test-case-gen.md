---
id: test-case-gen
title: Test Case Gen
sidebar_position: 5
sidebar_class_name: menu__list-item--icon-test-case-gen
---

# Test Case Gen

Writing comprehensive test cases manually is incredibly time-consuming, and it's easy to miss edge cases. **Test Case Gen** solves this by leveraging SuperQA's advanced AI to analyze your application features and automatically generate a complete suite of test cases across multiple categories.

Instead of starting from scratch, you provide a plain English description (or upload specifications), and the AI instantly maps out the user flows, returning actionable, step-by-step test cases for Positive, Negative, Boundary, and Data testing scenarios.

---

## 1. Triggering Test Generation

To start generating tests, navigate to **BUILD > Test Case Gen**. The main interface gives you several ways to provide context to the AI:

* **Description Prompt:** In the central text area, describe the UI flow, feature, or page you want to test (e.g., *Verify user login with valid credentials on https://example.com*).
* **Upload Docs:** If you have PRDs or technical specifications, click the **Upload Docs** button to guide the AI.
* **Connect Repo:** Click the **Connect Repo** button to pull context directly from your connected GitHub repository. SuperQA will read your source code so the AI can generate tests that reflect your actual implementation. To use this feature, first connect your GitHub account under [Configure > Integrations > GitHub Repository Access](../configure/integrations/github-repo.md).

* **Example Prompts:** If you aren't sure where to start, click one of the quick-start chips (like *Shopify Checkout*) to auto-fill the prompt.

Once you are satisfied with your context, click the **Send** button.

---

## 2. The Active Generation Session

Once triggered, the **Test Case Agent 2.0** springs into action. You will see a live progress panel detailing its thought process:
* Analyzing scope, business rules, and edge cases.
* Generating scenarios across Positive, Negative, Boundary, and Data categories.

**Interactive Refinement:** You don't have to wait passively. At the bottom of the screen is a live chat interface where you can speak directly to the AI agent to refine the scope, request specific edge cases, or ask QA-related questions on the fly.

---

## 3. Reviewing & Editing Outcomes

When the agent finishes, it presents all generated test cases in the Review Panel on the right. 

### Filtering & Categorization
The AI automatically categorizes your tests to ensure comprehensive coverage. You can filter the generated list using the tabs at the top: **All**, **Positive**, **Negative**, **Boundary**, and **Data**.

### Inline Editing
Each generated test case is presented as an expandable card displaying its title, category tag, and step count. 
* Click the **Expand (Chevron)** button to review the exact, numbered test steps (e.g., *Navigate to page, Input field, Click, Verify redirection*).
* Click the **Edit (Pencil)** icon to open an inline editing session. From here, you can tweak the Title, Description, toggle between Automated/Manual execution, and modify, add, or delete specific steps.

---

## 4. Saving Your Generated Tests

Once you have reviewed the generated cases, you can save them into your workspace:

1. Use the checkboxes to select specific tests (or use the **Select all in tab** option).
2. Click the **Save Test Cases** button.
3. In the confirmation drawer, select the target **Test Suite** and **Scenario** where these cases should live.
4. Click **Save**.

> **⚠️ Important Automation Note**
> When AI-generated test cases are saved to a suite, they are initially marked as **Not Automated**. To include them in automated schedules, you must navigate to the saved case in your Test Suite, open the Steps Editor, and automate the specific steps!
