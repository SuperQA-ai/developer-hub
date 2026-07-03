---
id: release-confidence-score
title: Release Confidence Score
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-release-confidence
---

# Release Confidence Score

The **Release Confidence Score** is SuperQA's definitive go/no-go signal before every release. Every time you execute a [Release Run](/docs/run/release-runs), SuperQA aggregates the results of all mapped test cases — weighted by severity — and produces a single numeric score and a clear verdict: ✅ **Ready to Ship** or ⚠️ **Caution**.

No more gut-feel releases. No more crossing fingers on deploy day.

---

## How the Score is Calculated

The Release Confidence Score is computed from the outcome of all test cases in the executed **Release Plan**. Each failed test case deducts from the score based on its **severity weight** — configured in [Configure → Severity Weights](/docs/configure/severity-weights).

### Severity Weights

| Severity | Default Weight | Impact on Score |
|---|---|---|
| **Blocker** | 100 | Maximum deduction — blocks release |
| **Critical** | 75 | High deduction — serious risk |
| **Major** | 40 | Moderate deduction — notable issue |
| **Normal** | 20 | Low deduction — quality concern |
| **Minor** | 10 | Minimal deduction — cosmetic/edge case |
| **Trivial** | 5 | Near-zero deduction — safe to ship |

:::tip Customize Your Quality Bar
You can adjust severity weights in **Configure → Severity Weights**. Higher weights on Critical/Blocker = stricter release gate. Lower weights = more relaxed threshold. Changes retroactively recalculate all historical scores.
:::

### Score Formula

```
Confidence Score = (Weighted Pass Points / Total Possible Weighted Points) × 100
```

- A test case that **passes** contributes its full severity weight as a positive point.
- A test case that **fails** contributes zero points for its weight.
- **Flaky** tests (those that passed on retry) are weighted at 50% of their full value.

The resulting score is a percentage from **0 to 100**.

---

## Verdict Thresholds

SuperQA produces one of two verdicts after every Release Run:

| Score Range | Verdict | Meaning |
|---|---|---|
| **Above threshold** | ✅ **Ready to Ship** | High confidence. The build is stable and safe to deploy. |
| **Below threshold** | ⚠️ **Caution** | Failures or flakiness detected. Review before deploying. |

The pass threshold is determined by your configured **Severity Weights** — if critical or blocker failures are present, the weighted score drops below the threshold and the verdict switches to **Caution**.

---

## Flakiness Signal

The Release Confidence Score also surfaces **flaky tests** — test cases that did not fail cleanly but exhibited unstable behavior during the Release Run:

- A test that **failed on first attempt but passed on retry** is flagged as **Flaky**
- Flaky tests are shown in a dedicated **Flakiness Report** panel within the score view
- Each flaky test shows: how many times it flipped, which steps were unstable, and the environment it was flaky in

| Flakiness Indicator | Description |
|---|---|
| 🟡 **Flaky** | Test passed eventually but required retries |
| 🔴 **Consistently Failing** | Test failed every attempt — true regression |
| 🟢 **Stable** | Test passed on first attempt every time |

Flaky tests are **not counted as full failures** in the score calculation, but they are flagged as risk indicators. A release with many flaky tests should be treated with caution even if the overall score is high.

---

## Self-Healing Events

SuperQA's OmniQA AI Engine includes a **self-healing** capability — when a step fails due to a minor UI change (e.g., a button moved, a selector changed), the AI attempts to locate the correct element and continue execution rather than failing the entire test.

The Release Confidence Score report surfaces all self-healing events that occurred during the run:

| Self-Healing Detail | Description |
|---|---|
| **Test Case** | Which test case triggered self-healing |
| **Step** | The specific step that encountered an issue |
| **Original Selector** | What the AI originally tried to interact with |
| **Healed Selector** | What the AI found and used instead |
| **Outcome** | Whether self-healing succeeded or ultimately failed |

:::important Why Self-Healing Matters for Confidence
A test that passed only because of self-healing suggests the application's UI has drifted from what was originally recorded. These are flagged separately so you can update the test case to reflect the new UI state — preventing future brittleness.
:::

Self-healed tests **count as passing** in the score, but they appear in the self-healing section as items requiring your attention.

---

## AI Release Summary

At the top of every Release Confidence Score report, SuperQA generates an **AI-written executive summary** of the run:

- Overall health narrative in plain English
- List of the highest-risk failures with their severity
- Flakiness and self-healing highlights
- A recommendation: ship, hold, or ship with noted risks

This summary is designed to be shared directly with engineering leads or product managers as a release sign-off artifact.

---

## Viewing the Score

1. Navigate to **Reports & Analytics → Release Confidence Score**
2. Select the **Release Plan** and the specific **Release Run** to view
3. The score, verdict, AI summary, flakiness panel, and self-healing log are all available on a single page
4. Use the **Export** button to download the full report as a PDF for stakeholder sharing

---

## Score History

The Release Confidence Score page maintains a **history of all past runs** for each Release Plan. Use this to:

- Track improvement across iterations of the same release
- Compare scores before and after a hotfix
- See whether self-healing events are increasing (sign of UI drift)

---

## Related

- [**Severity Weights**](/docs/configure/severity-weights) — Configure how much each failure severity impacts the score
- [**Release Plans**](/docs/build/release-plans) — Map test cases to release milestones
- [**Release Runs**](/docs/run/release-runs) — Trigger and view the execution that generates this score
- [**Continuous Quality Monitoring**](/docs/reports/continuous-quality-monitoring) — Long-term trend tracking across all scheduled runs

