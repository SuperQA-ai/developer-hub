---
id: configuration
title: Configuration & Notifications
sidebar_position: 3
---

# Configuration & Notifications

When setting up a schedule, you have full control over how tests execute and who gets alerted.

## Run Modes

| Mode | Description |
|---|---|
| **Sequential** | Test cases execute one at a time, in the order defined in the Test Plan. Results are captured step-by-step. |
| **Parallel** | All test cases execute simultaneously. Significantly reduces total run time for large suites. Best for independent tests. |

:::tip When to use Parallel
Use **Parallel** mode for smoke tests and independent functional tests. Use **Sequential** when tests depend on shared state or a specific order of operations.
:::

---

## Environment Selection

The selected environment determines which **Environment Variables** (mapped with `@`) are injected at runtime. SuperQA automatically resolves `@{env.variable}` references based on the environment selected here.

| Environment | Use Case |
|---|---|
| `Staging` | Pre-production validation, regression, and integration testing. |
| `Production` | Live smoke tests, post-deployment checks, and availability monitoring. |
| Custom | Any environment configured under **Configure → Environment**. |

---

## Notifications

Configure who gets notified and when. SuperQA supports notifications on two outcomes:

| Trigger | Description |
|---|---|
| **On Failure** | Notifies the configured recipients immediately when one or more test cases fail during the run. |
| **On Success** | Sends a confirmation notification when all test cases in the run pass. |

### Supported Notification Channels

- **Email** — Enter one or more email addresses to receive run summaries and pass/fail details.
- **Microsoft Teams** — Connect your Teams channel via **Configure → Integrations → Microsoft Teams** to receive rich-formatted run notifications.

:::note
Notification channels must be configured in **Configure → Integrations** before they can be selected on a schedule.
:::
