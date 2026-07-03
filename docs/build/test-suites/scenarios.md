---
id: scenarios
title: Scenarios
sidebar_position: 3
---

# Scenarios

If **Test Suites** are the high-level domains (e.g., "User Authentication"), **Scenarios** are the specific, logical groupings inside them.

A Scenario groups a cluster of closely related test cases. This structure prevents a large Test Suite from becoming an unmanageable list of hundreds of tests.

## Why use Scenarios?

Consider a Test Suite named **"User Authentication"**. Instead of throwing all authentication tests into one massive list, you create Scenarios to keep them segmented:

- **Scenario 1: SSO Login** (Contains tests for Google, Microsoft, and SAML logins)
- **Scenario 2: Standard Login** (Contains tests for valid login, invalid password, locked account, etc.)
- **Scenario 3: Password Reset** (Contains tests for the forgot password flow)

By grouping test cases into Scenarios, you can quickly locate specific flows, track coverage in granular areas, and execute highly targeted test runs without having to run the entire overarching Test Suite.
