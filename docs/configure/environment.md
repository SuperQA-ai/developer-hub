---
id: environment
title: Environment
sidebar_position: 6
sidebar_class_name: menu__list-item--icon-environment
---

# Environment Management

**Environments** let you run the same test suite against different deployment targets — for example, verifying a feature on **Staging** before promoting it to **Production**. Each environment holds its own set of configuration variables (like base URLs, API keys, or company IDs) that are automatically injected into test runs when that environment is selected.

## Why Environments Matter

The real power of environments is how they connect to your **test steps**. Instead of hardcoding values directly into a test step (e.g., typing `https://app.production.com` as a URL), you reference the environment variable instead (e.g., `{{APP_URL}}`).

When a test run is triggered:
- SuperQA looks at the **selected environment**
- Finds the value for `APP_URL` in that environment
- Injects it into every step that references it — automatically

This means:
- ✅ **No test case edits needed** when moving from Staging to Production
- ✅ **No risk** of accidentally leaving a hardcoded staging URL in a production run
- ✅ **One test, multiple environments** — write once, run anywhere

Just select the target environment when scheduling or running a test plan, and all the variable values are swapped in for you.

Navigate to **Configure > Environment** to manage your environments.

---

## 1. The Environment List

The main page shows a table of all environments configured for your workspace:

| Column | Description |
|---|---|
| **Environment** | The environment name with a colored avatar showing its initials (e.g., **DE** for default, **ST** for staging). |
| **Source** | Whether the environment is **System** (built-in, like `default`) or **Custom** (created by your team). |
| **Description** | An optional note describing what this environment is used for. |
| **Variables** | The number of configuration variables stored in this environment. Click the link to view or manage them. |
| **Last Update** | Who last modified this environment and when. |
| **Actions** | Options to edit or delete the environment (not available on System environments). |

Use **Search environments...** or **Filters** to find a specific environment in larger workspaces.

---

## 2. Creating a New Environment

1. Click the **+ New Environment** button.
2. Fill in the **Create New Environment** form:

| Field | Description |
|---|---|
| **Environment Name*** | A unique name for this environment. Must be lowercase and can include letters, numbers, hyphens, and underscores (e.g., `staging`, `qa-testing`). Required. |
| **Description** | Optional. Describe what this environment targets (e.g., *"Pre-production environment for UAT testing"*). |

3. Click **+ Create Environment**.

---

## 3. Managing Environment Variables

Click on any environment name to open its **variable list** — the configuration values that will be injected into test runs when this environment is selected.

| Column | Description |
|---|---|
| **Name** | The variable key in UPPERCASE (e.g., `APP_URL`, `company_Id`). |
| **Value** | The actual value used at runtime (e.g., `https://mvt.apmkingstrack.com`). |
| **Type** | Either **Predefined** (system-defined, name is locked) or **Custom** (user-defined). |
| **Updated** | The date this variable was last modified. |

### Adding a Variable

Click **+ Add Variable** and fill in the form:

| Field | Description |
|---|---|
| **Variable Name*** | The key name. Must be UPPERCASE and can include letters, numbers, and underscores (e.g., `APP_URL`, `API_KEY`). Required. |
| **Value*** | The value that will be used when this variable is referenced during a test run. Required. |
| **Mark as predefined variable** | When checked, this variable is treated as system-defined — its name becomes non-editable after creation. Use this for core config values like base URLs that should never be accidentally renamed. |

Click **+ Add Variable** to save.

> **How to use variables in test steps:** Reference any environment variable in a step using double curly braces — `{{VARIABLE_NAME}}`. For example, use `{{APP_URL}}` as the navigation target in a step instead of typing the URL directly. When the test runs, SuperQA replaces `{{APP_URL}}` with the actual value from the selected environment. Switching from Staging to Production is then as simple as selecting a different environment at run time — no test case changes required.

