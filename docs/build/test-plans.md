---
id: test-plans
title: Test Plans
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-test-plans
---

# Test Plans

While Release Plans are focused on gating deployments, **Test Plans** are the foundation of your **Production Monitoring** strategy. A Test Plan is a structured configuration that bundles together test cases designed to verify the continuous health and core stability of your application in production.

Once created, you can execute Test Plans on-demand, but their primary purpose is to be attached to automated **Schedules** to continuously monitor your live environments.

---

## 1. Creating a Test Plan

To define a new testing strategy:
1. Navigate to **BUILD > Test Plans** and click **+ New Test Plan**.
2. **Select the Test Plan Type:** Choose a predefined strategy based on your goal:
   - **Smoke Test** *(Fast - Shallow)*: Quick build stability check. Is the app alive and are core flows reachable?
   - **Sanity Test** *(Focused - Module)*: Post-fix validation. Did a recent change work without breaking nearby features?
   - **Regression Test** *(Comprehensive)*: Full coverage after changes. Does everything still work end-to-end?
3. **Name & Describe:** Provide a descriptive name (e.g., *Sprint 24 Smoke Test*) and an optional goal.
4. **Select Test Cases:** The system will automatically filter and display test cases that match your chosen strategy (e.g., highlighting tests tagged as "Smoke"). Select the specific suites and scenarios you wish to include.
5. Review and save your plan.

---

## 2. On-Demand Execution

If you need immediate feedback, you can trigger a Test Plan manually.

1. From the Test Plans list, click **Execute Now** on the desired plan.
2. The **Execution Settings** modal will appear.
3. Choose the **Run Mode** (Sequential or Parallel).
4. Select the target **Environment** (e.g., staging or production). 
5. Click **Next** to launch the run.

---

## 3. Continuous Scheduling & Reports

Because Test Plans are built for **Production Monitoring**, their major advantage is that they can be fully automated via schedules. Connecting a Test Plan to a schedule ensures your application's health is verified continuously without manual intervention.

1. From the Test Plans list, click the **Schedule** button on a plan.
2. Configure the **Schedule Configuration**:
   - Set a **Start Date** and specific **Execution Times**.
   - Choose a **Recurrence Pattern** (e.g., daily, weekly).
   - Select the **Run Mode** (Sequential/Parallel) and target **Environment**.
3. Proceed to set up custom notifications, or click **Skip Notifications & Create Schedule**.

### Continuous Reporting
Every time a scheduled (or on-demand) Test Plan finishes, it generates a comprehensive **Test Run Report**. You can continuously monitor these reports under **RUN > Test Runs** to track stability trends over time.

---

## 4. Triggering via CI/CD (GitHub Actions)

In addition to manual executions and time-based schedules, Test Plans can be directly mapped to and triggered by your CI/CD pipelines. 

By integrating with our [GitHub Action](../configure/integrations/github-action/overview.md), you can configure your pipeline to automatically execute a specific Test Plan whenever code is pushed or a pull request is opened. This ensures that a passing Smoke or Sanity Test Plan becomes a mandatory check before code can be merged and deployed.
