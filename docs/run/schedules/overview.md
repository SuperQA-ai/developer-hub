---
id: overview
title: Overview
sidebar_position: 1
slug: /run/schedules
---

# Production Monitoring (Schedules)

**Production Monitoring** is the practice of continuously verifying your live application's health. In SuperQA, this is achieved by linking **Test Plans** to automated **Schedules**. 

By running your Test Plans on a recurring basis, your tests stay on autopilot, acting as a continuous monitor in production while you ship.

## How It Works

A **Schedule** is simply the automation engine that powers Production Monitoring. It links a Test Plan to an execution trigger. Once saved, the schedule is **active immediately**. 

Here is what happens during a monitoring cycle:

1. SuperQA detects the scheduled trigger time.
2. The **Test Plan** is loaded with all its mapped test cases.
3. The **OmniQA AI Engine** executes each test case against the selected **Environment**, resolving all `@{env}` and `#{data}` variables automatically.
4. Results are captured and a **Test Run** is created under **Run → Test Runs** for full reporting and drill-down.
5. **Notifications** are dispatched based on pass/fail outcome to all configured channels.
