---
id: overview
title: Overview
sidebar_position: 1
slug: /run/schedules
---

# Schedules Overview

Schedules allow you to automate the execution of your Test Plans on a recurring or one-time basis — no manual triggers needed. Once configured, SuperQA will automatically execute the mapped Test Plan at the defined time, using your selected environment, run mode, and notification preferences.

This is the backbone of **Continuous Quality Monitoring**: your tests keep running on autopilot while you ship.

## How It Works

A Schedule links a **Test Plan** to an automated execution trigger. Once saved, the schedule is **active immediately**. 

Here is what happens at runtime:

1. SuperQA detects the scheduled trigger time.
2. The **Test Plan** is loaded with all its mapped test cases.
3. The **OmniQA AI Engine** executes each test case against the selected **Environment**, resolving all `@{env}` and `#{data}` variables automatically.
4. Results are captured and a **Test Run** is created under **Run → Test Runs** for full reporting and drill-down.
5. **Notifications** are dispatched based on pass/fail outcome to all configured channels.
