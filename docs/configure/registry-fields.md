---
id: registry-fields
title: Registry Fields
sidebar_position: 1
sidebar_class_name: menu__list-item--icon-registry-fields
---

# Registry Fields

**Registry Fields** are the metadata fields that are applied to every test case across your entire workspace. They define a consistent, structured vocabulary for classifying test cases — things like priority, severity, test type, and conditions — so your team always describes tests the same way.

Without standardized fields, different team members might classify tests inconsistently (e.g., one person uses "Critical," another uses "P0"). Registry Fields eliminate that ambiguity by enforcing a shared set of values that every test case must follow.

Navigate to **Configure > Registry Fields** to manage these fields.

---

## 1. The Field List

The main page shows a table of all registry fields currently configured for your workspace:

| Column | Description |
|---|---|
| **Field Key** | The internal identifier (e.g., `priority`, `test_category`). Lowercase with underscores. Cannot be changed after creation. |
| **Source** | Whether the field was created by SuperQA (**System**) or added by your team (**Custom**). |
| **Selection Type** | The input type for this field (e.g., Select list, Paragraph, Number). |
| **Required** | Whether every test case must have a value for this field. Required fields show **Yes** in green. |
| **Values** | For select-type fields, shows the number of selectable options (e.g., *4 values*). Click the link to manage the options. |
| **Default** | The value pre-selected by default when a new test case is created (e.g., *Medium*, *Normal*, *Happy Path*). |
| **Actions** | Options to edit or manage each field. |

### Built-in System Fields

SuperQA comes pre-configured with 8 system fields:

| Field Key | Type | Required | Default |
|---|---|---|---|
| `description` | Paragraph | No | — |
| `pre_conditions` | Paragraph | No | — |
| `post_conditions` | Paragraph | No | — |
| `priority` | Select list (single) | **Yes** | Medium |
| `severity` | Select list (single) | **Yes** | Normal |
| `test_category` | Select list (single) | **Yes** | Functional |
| `test_condition` | Select list (single) | **Yes** | Happy Path |
| `test_strategy` | Select list (multiple) | **Yes** | — |

---

## 2. Managing Field Values

For any select-type field, you can click the **values link** (e.g., *4 values*) to drill into and manage that field's options.

Each value entry has:
- **Order** — The display order of the option in dropdowns.
- **Key** — The internal identifier (e.g., `functional`).
- **Label** — The human-readable name shown to users (e.g., *Functional*).
- **Shortcode** — A brief abbreviation for compact display (e.g., `FN`).
- **Icon** — An optional icon for visual distinction.
- **Status** — Whether the value is **Active** (visible) or disabled.

For example, the `test_category` field has 4 values: **Functional** (FN), **Visual** (VS), **Usability** (US), and **Exploratory** (EX).

---

## 3. Adding a Custom Field

To add a new field, click **+ Add Field** in the top-right corner. Fill in the form:

| Field | Description |
|---|---|
| **Field Key*** | The internal identifier. Must be lowercase with underscores (e.g., `test_phase`). **Cannot be changed after creation.** |
| **Selection Type*** | The input type for how users will fill in this field. |
| **Default Value** | Optional. A pre-selected value shown on every new test case. You must add values first before setting a default. |
| **Required** | Toggle on/off. When enabled, every test case in your workspace must have a value for this field. |

### Available Selection Types

| Type | Use case |
|---|---|
| **Select list (single)** | One option from a predefined list (e.g., Priority: High/Medium/Low). |
| **Select list (multiple)** | Multiple options from a list (e.g., Test Strategy: Manual + Automated). |
| **Radio** | Single-choice using radio buttons. |
| **Number** | A numeric input (e.g., estimated duration in minutes). |
| **Short text** | A single line of free text. |
| **Paragraph** | Multi-line free text (e.g., description, pre-conditions). |
| **Checkbox** | A simple true/false toggle. |
| **URL** | A link field (e.g., a reference to a design spec or ticket). |
| **Date** | A date picker input. |

Once you click **+ Create Field**, the field is immediately applied to all test cases in your workspace.

> **⚠️ Important:** The **Field Key** is permanent and cannot be renamed after creation. Choose a clear, descriptive key that your team will recognize (e.g., `test_phase`, `automation_owner`).
