---
id: github-repo
title: GitHub Repository Access
sidebar_position: 4
---

# GitHub Repository Access

The **GitHub Repository Access** integration allows SuperQA to read your source code directly from your GitHub repositories. Once connected, the AI-powered **Test Case Gen** feature can analyze your codebase to automatically generate relevant, context-aware test cases that match your actual implementation.

Navigate to **Configure > Integrations**, find the **GitHub Repository Access** card, and click **+ Connect GitHub**.

---

## Setup: Connecting Your Account

SuperQA uses a secure OAuth flow to connect to your GitHub account without requiring you to manually generate or manage API tokens.

1. Click **→ Connect with GitHub**.
2. A browser popup will open, taking you to GitHub's authorization screen.
3. Review the permissions SuperQA is requesting (read-only access to your repositories).
4. Click **Authorize** to grant access.

You will be automatically redirected back to SuperQA, and the integration card will update to show a **✅ Connected** status.

---

## Using the Integration

Once your GitHub account is connected, the integration is ready to be used in the Test Case Generator.

1. Navigate to **BUILD > Test Case Gen**.
2. Click the **Connect Repo** button in the prompt interface.
3. Select the repository you want the AI to analyze from the dropdown list (which is now populated directly from your GitHub account).
4. Provide any additional description or context, and click **Send**.

The Test Case Agent will read the selected repository's code to understand the business logic, edge cases, and UI flows, generating a highly accurate suite of test cases tailored to your application.

> **Note:** SuperQA only requests **read access** to your repositories. It cannot modify your code, create pull requests, or alter your repository settings.
