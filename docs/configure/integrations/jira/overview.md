---
id: overview
title: Jira Integration
sidebar_position: 1
---

# Jira Integration

When a test fails, the last thing you want to do is manually copy the failure details into a bug ticket. The **Jira integration** eliminates that step entirely — SuperQA automatically creates a Jira issue the moment a test fails, pre-filled with the failure context, mapped to the right priority, and tagged to the right project.

You can also file bugs manually from the Dashboard's live activity feed using the **Create Bug** button that appears on failed test entries.

---

## Setup: A 2-Step Process

Setting up Jira requires two steps: connecting your Atlassian account via OAuth, then configuring how SuperQA maps to your Jira project.

Navigate to **Configure > Integrations**, find the **Jira** card, and click **+ Connect Jira**.

---

### Step 1 — Connect your Atlassian account

SuperQA uses **OAuth 2.0** to connect to Jira — no API tokens or passwords needed.

1. Click **→ Connect with Atlassian**.
2. A browser popup will open taking you to Atlassian's consent screen.
3. Review the permissions SuperQA is requesting:
   - **View**: `jira-user`, `jira-work` — to read your projects and issues.
   - **Update**: `jira-work` — to create and update issues when tests fail.
4. Click **Accept** to authorize.

You will be redirected back to SuperQA, and the dialog will advance to **Step 2**, showing **✅ Connected as Atlassian account**.

---

### Step 2 — Configure your Jira settings

Once connected, configure how SuperQA maps to your Jira project:

| Field | Description |
|---|---|
| **Jira project*** | The target Jira project where issues will be filed (e.g., *SuperQA.Ai*). Required. |
| **Default issue type** | The type of Jira issue created for failures. Options: **Task**, **Bug**, **Story**, **Epic**. Default is *Bug*. |
| **Severity → Jira priority** | Map each SuperQA severity level to a Jira priority. The default mapping is: |

**Default Severity → Priority mapping:**

| SuperQA Severity | Jira Priority |
|---|---|
| Blocker | Highest |
| Critical | High |
| Major | High |
| Normal | Medium |
| Minor | Low |
| Trivial | Lowest |

| Field | Description |
|---|---|
| **Default labels** | Optional tags automatically applied to every Jira issue SuperQA creates (e.g., `superqa`, `automated`). Type a label and press Enter to add it. |
| **Auto-create bugs for failed tests** | When checked, SuperQA automatically files a Jira issue for **every** failed test case on scheduled runs — with no manual action required. |

Click **Save** to activate the integration.

---

## After Setup

Once configured, the Jira card on the Integrations page shows **● Configured** and displays your connected project (e.g., *Connected as on superqaai · Project SA*).

You can return to **Manage Jira** at any time to:
- Switch to a different Jira project.
- Update the severity-to-priority mapping.
- Enable or disable auto-bug creation.
- Add or remove default labels.

> **Tip:** Enable **Auto-create bugs for failed tests** to ensure no failure slips through the cracks during overnight scheduled runs — your Jira backlog will be populated automatically for triage in the morning.
