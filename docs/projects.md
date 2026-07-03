---
id: projects
title: Projects
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-projects
---

# Projects

A **project** is your workspace for organizing and running tests against a specific application. It brings together your test suites, scenarios, test cases, and results in one place — giving you a complete view of quality for that application.

Creating a project is the first step to using SuperQA. Once a project is set up, SuperQA uses your **Application URL** to analyze your application's interface, enabling AI-powered test generation, cloud-based test execution, and intelligent reporting.

---

## Why create a project?

When you create a project, you're telling SuperQA:

- **What to test** — the Application URL is the entry point SuperQA uses to crawl, analyze, and interact with your application during test execution.
- **Where to test** — the Environment (e.g. *Staging*, *Production*) determines which version of your application SuperQA runs tests against, helping you catch bugs before they reach production.
- **How to organize** — all test suites, scenarios, and results are scoped to a project, making it easy to track quality across multiple applications or teams.

---

## Create your first project

1. Click the **+ Create new project** button in the top-right corner of the Projects page.
2. Fill in the required fields:

| Field | What it does |
|---|---|
| **Project Name** | Identifies your project across SuperQA — in dashboards, reports, and integration notifications (Slack, Jira, Email). Choose something descriptive like *Checkout Flow Tests* or *API Regression*. |
| **Description** | Provides context for your team about what this project covers. This helps team members understand the scope at a glance. |
| **Environment** | Sets the target environment (e.g. *Staging*, *Production*). SuperQA uses this to determine which version of your application to execute tests against. You can test against Staging to catch issues before deploying to Production. |
| **Application URL** | The base URL of your application (e.g. `https://my-app.com`). SuperQA uses this as the starting point for all test executions — it navigates to this URL, analyzes the interface, and performs test actions from there. This is also the URL used by AI test case generation to discover and map your application's user flows. |

3. Click **Create** to set up the project.

:::tip
Start with your **Staging** environment. This lets you validate tests against pre-production builds without affecting live users. You can always change the environment later.
:::

---

## Find and manage projects

The Projects page shows all projects in your organization as cards. Each card gives you a quick summary of activity:

- **Test cases** — the total number of test cases created in this project. A growing count means your test coverage is expanding.
- **Suites** — the number of test suites. Suites group related test cases together for organized execution.
- **Status** — whether the project is *Active* and available for test execution.

### Search and filter

As your organization grows, use the controls at the top to find projects quickly:

- **Search** — type a keyword to filter by project name or description.
- **Filters** — narrow results by status or other criteria.

### Grid and list views

Toggle between two layouts using the view icons:

- **Grid view** — visual cards for a quick overview of each project.
- **List view** — compact rows for scanning many projects at once.

### Project actions

Click the **⋮** menu on any project card to access options like editing project details or archiving a project.

---

## What's next?

Once your project is set up, you're ready to:

- **[Generate test cases](./build/test-case-gen.md)** — let SuperQA's AI analyze your Application URL and automatically create test cases based on discovered user flows.
- **[Build test suites](./build/test-suites/overview.md)** — group test cases into suites for organized execution and reporting.
- **[Run tests](./run/test-runs/overview.md)** — execute your tests on SuperQA's cloud-simulated environments and review video playback of every step.
