---
id: test-case-gen
title: AI-Powered Test Case Generation
sidebar_label: Test Case Gen
sidebar_position: 5
sidebar_class_name: menu__list-item--icon-test-case-gen
---

# AI-Powered Test Case Generation

Writing comprehensive test cases manually is incredibly time-consuming, and it's easy to miss edge cases. SuperQA takes an **AI-First approach** to solve this. Our elite AI squad analyzes your application features, user flows, or codebase to automatically generate a complete, trustable, and bulletproof suite of Web UI test cases in seconds.

Instead of starting from scratch, you provide the context and the AI instantly maps out the user flows, returning actionable, step-by-step test cases for every scenario.

---

## 1. Triggering Test Generation

To start your first AI-driven generation session, navigate to **BUILD > Test Case Gen**. SuperQA offers three intelligent ways to provide context to the AI, allowing you to feed it user stories, specifications, or even raw code.

### Option A: Text Prompt (User Stories)
In the central text area, describe the user flow, feature, or user story you want to test. 

**Recommended Input Format:** `[Context / Pre-condition] + [User Action / Flow] + [Expected Outcomes / Assertions]`

### Option B: Upload Document
If you have PRDs, technical specifications, or detailed requirements documents, you can drag and drop them directly into the UI. The AI parses the document to understand the underlying business rules and expected behavior. Supports PDF, DOCX, and TXT up to 50MB.

### Option C: Connected GitHub Repository
Click the **GitHub Repository** tab to pull context directly from your connected repository. SuperQA will read your source code (like React components or API routes) so the AI can generate tests that reflect your exact implementation. 

> **Prerequisite:** You must first connect your GitHub account. See the [GitHub Repository Integration](../configure/integrations/github-repo.md) guide for instructions on how to authorize SuperQA to read your codebase.

> **Dynamic Environment Binding:** Notice the `{{app_url}}` mapping in the UI. SuperQA dynamically binds your target application URL using environment keys, ensuring the generated test cases are portable and immediately executable against your active environment selector (e.g., Staging or Production).

---

## 2. Reviewing the Generated Test Cases

Once the AI finishes processing your input, it presents all generated test cases in the **Test Case Agent 2.0** Review Panel. 

### Comprehensive Scenario Coverage
To guarantee bulletproof testing, the AI automatically generates tests across four critical dimensions. You can filter the generated list using the tabs at the top:

1. **Happy Path (Positive):** Scenarios where everything works exactly as intended under normal conditions.
2. **Unhappy Path (Negative):** Scenarios where users provide invalid inputs or trigger expected errors.
3. **Extreme Input (Data):** Scenarios testing the limits of data fields (e.g., extremely long strings or unusual characters).
4. **Edge Case (Boundary):** Scenarios operating right at the limits of allowed business rules (e.g., maximum cart sizes or exact expiry dates).

---

## 3. Editing and Saving to Target Suites

Every generated test case is presented as an expandable card displaying its title, category tag, and step count. 

### Inline Editing
You can review and refine the AI's output before saving it. Click the **Edit (Pencil)** icon to open an inline editing session. From here, you can tweak the execution type (Automated vs. Manual), modify descriptions, and explicitly edit, add, or delete specific test steps.

### Saving Your Test Cases
Once you have reviewed the generated cases, you can save them into your workspace:

1. Use the checkboxes to select specific tests (or use the **Select all in tab** option).
2. Click the **Save Test Cases** button.
3. A **Where should these be saved?** modal will appear. Select the target **Suite** and **Scenario** where these cases should live.
4. **Important Notice:** The modal will warn you that all newly saved AI test cases are initially marked as **Not Automated**. To include them in schedules, you must navigate to the saved case, automate the individual steps, and verify them.
5. Click **Confirm & Save**.
6. A success confirmation will appear, offering a **View in Test Suite** shortcut so you can immediately begin automating the steps!

---

## 4. Generation History

If you ever need to revisit a past generation session, click the **History** button in the top right of the Test Case Gen interface. 

The **History Panel** stores a log of all your previous AI sessions. Each entry displays:
- The context or feature description used.
- The total number of test cases generated.
- The date and time of the session.

Clicking any history item will instantly reload the session, allowing you to review, edit, and save those test cases again without having to re-prompt the AI!
