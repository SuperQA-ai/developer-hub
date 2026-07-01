---
id: microsoft-teams-overview
title: Microsoft Teams Integration
sidebar_position: 1
---

# Microsoft Teams Integration

The **Microsoft Teams integration** lets SuperQA send test run results, failure alerts, and release updates directly to your Teams channels. Your team gets notified in the right channel the moment a scheduled test run completes — without needing to log into SuperQA.

Each Teams channel you add becomes a named destination that can be selected by any Test Plan or Schedule, giving you flexible routing (e.g., send checkout test failures to `#qa-alerts` and nightly regression results to `#releases`).

Navigate to **Configure > Integrations**, find the **Microsoft Teams** card, and click **+ Set Up Microsoft Teams**.

---

## Getting a Teams Webhook URL

SuperQA connects to Microsoft Teams using an **Incoming Webhook**. You generate this webhook URL from within Teams itself:

1. Open **Microsoft Teams** and navigate to the channel that should receive test notifications.
2. Click the **···** (More options) menu on the channel → select **Workflows** (or the *Incoming Webhook* connector).
3. Create a **"Post to a channel when a webhook request is received"** flow.
4. Copy the generated **webhook URL** (it will look like `https://...webhook.office.com/...`).

You can repeat this process for as many channels as you need.

---

## Adding Channels in SuperQA

Once you have your webhook URL(s):

1. In the **Microsoft Teams Configuration** dialog, fill in the **Channels** table:

   | Field | Description |
   |---|---|
   | **Display Name** | A friendly label for this channel (e.g., *QA Alerts*, *Nightly Regression*). Used to identify this destination when selecting it in Test Plans or Schedules. |
   | **Webhook URL*** | The full webhook URL generated from Microsoft Teams. Required. |

2. Click **+ Add channel** to add more channels to the list.
3. Click **Save**.

> **Tip:** Add as many channels as you need. Each Test Plan or Schedule will let you pick exactly one channel as its notification destination — so you can route different types of test results to the most relevant Teams channel.

---

## After Setup

Once saved, the Microsoft Teams card changes to **● Configured** with a **Manage Microsoft Teams** button. From there you can add new channels, update webhook URLs, or remove existing ones at any time.
