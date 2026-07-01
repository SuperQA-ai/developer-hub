---
id: integrations-overview
title: Overview
sidebar_position: 1
---

# Integrations

SuperQA connects with the tools your team already uses for notifications, CI/CD pipelines, and bug tracking. The Integrations hub gives you a single place to see, configure, and manage every connection.

Navigate to **Configure > Integrations** to view all available integrations.

---

## Integration Categories

Use the filter tabs at the top to browse integrations by category:

| Tab | What it contains |
|---|---|
| **All** | Every integration in one view. |
| **Notifications** | Tools that receive test run alerts and reports (Email, Microsoft Teams). |
| **CI / CD** | Pipelines that trigger automated test runs (GitHub Actions). |
| **Test Management** | Tools that sync test results and failures (Jira). |

---

## Available Integrations

### ✅ Configured

These integrations are available and ready to use:

| Integration | Category | What it does |
|---|---|---|
| **Email** | Notifications | Send test reports and failure notifications to your team's email addresses. |
| **GitHub Repository Access** | CI / CD | Connect your GitHub account so the Test Case Agent can read your repositories and generate tests from your code. |
| **GitHub Actions CI/CD** | CI / CD | Run SuperQA tests automatically in your GitHub Actions pipeline using a SuperQA API key. |
| **Jira** | Test Management | Link test failures directly to Jira issues and sync test results with your project board. |

### ⚙️ Not Configured

| Integration | Category | What it does |
|---|---|---|
| **Microsoft Teams** | Notifications | Send test run results, failures, and release updates to Microsoft Teams channels. |


---

## Status Indicators

Each integration card shows its current status:

| Status | Meaning |
|---|---|
| 🟢 **Connected** | Fully authorized and active (e.g., GitHub OAuth connected). |
| 🟢 **Configured** | Set up and ready to use (e.g., recipients saved, API key in place). |
| 🟠 **Not Configured** | Available but not yet set up — click **Set Up** to configure. |

---

## Individual Integration Guides

- [Email](./mail.md) — Set up email recipients for test notifications.
- [GitHub Repository Access](./github-repo.md) — Connect GitHub for AI-powered test generation from code.
- [GitHub Actions CI/CD](./github-action/overview.md) — Automate test runs in your CI pipeline.
- [Jira](./jira.md) — Link test failures to Jira issues automatically.
- [Microsoft Teams](./microsoft-teams.md) — Send notifications to Teams channels.
