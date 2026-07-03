---
id: ai-execution
title: AI Execution & Steps
sidebar_position: 5
---

# AI Execution & Steps

The **SuperQA AI** engine completely reimagines how test automation is built and executed. You no longer need to write fragile code or inspect elements for complex CSS selectors.

## 1. Plain English Execution

The major component of our AI automation is the **Steps Editor**. Inside a test case, any user can manually write test steps in **plain English**.

For example, instead of writing code to locate an input field and send keys, you simply write:
> *"Type `admin@acme.com` into the email address field."*
> *"Click the large blue Submit button."*

When you run the test, the SuperQA AI natively parses your plain English steps, deeply analyzes the application's DOM, and flawlessly executes the actions just like a human would.

## 2. Advanced Step Capabilities

While writing your plain English steps, you have access to powerful, advanced features directly within the editor:

- **Data Mapping via `@` and `#`**: By typing `@` inside any step, you can dynamically map Environment Variables. By typing `#`, you can map Test Data variables. For example: *"Type `@{production.username}` and `#{valid_credentials.password}` into the login fields."* The AI seamlessly injects the correct data at runtime.
- **Embedding Reusable Templates**: You can insert a previously created Reusable Test Case directly into your step sequence, chaining complex flows together instantly.
- **Complex Interactions**: The AI natively understands and executes complex user interactions, including drag-and-drops, hover states, and **File Uploads**, right out of the box.

## 3. Soft vs. Hard Assertions

Every step you write can have defined assertions to validate the application's behavior. The AI engine supports both:
- **Hard Assertions**: If the assertion fails, the entire test case fails immediately and execution stops. This is crucial for verifying blockers.
- **Soft Assertions**: If the assertion fails, the failure is logged and flagged, but the test case continues executing the remaining steps. This is perfect for verifying non-critical UI elements without abandoning the core test.

---

## 4. The Omniblade Embedded Chrome Browser

To give you complete visibility and confidence in the SuperQA AI, we built the **Omniblade Embedded Chrome Browser**.

When you trigger an AI test execution, the Omniblade browser launches directly inside the platform. You do not need to check headless logs—you can watch in real-time as the AI navigates your application, inputs data, and evaluates assertions. This transparent execution model ensures you always know exactly what the AI is seeing and doing.

---

## 5. Layman Click & Record

SuperQA is designed to democratize automation so that any non-technical user (a Product Manager, Designer, or stakeholder) can contribute to QA.

Using the Omniblade browser, a layman user can activate the **Click and Record** feature. The user simply navigates the application naturally—clicking buttons, filling out forms, and uploading files. The system silently captures those manual user actions in the background and instantly converts them into formal, plain English test steps. 

The AI can then automate those flows forever, without a single line of code written.
