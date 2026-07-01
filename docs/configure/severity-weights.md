---
id: severity-weights
title: Severity Weights
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-severity-weights
---

# Severity Weights

**Severity Weights** define how much each bug severity level contributes to your overall release health score. When a test fails, the severity of the failure directly impacts how confident SuperQA is in your release readiness — a Blocker failure carries far more weight than a Trivial one.

By tuning these weights, you control how your team's quality bar is calculated and reflected in reports. For example, a team with strict zero-tolerance for critical issues might assign Critical a weight of 90, while a team with more relaxed standards might lower it.

Navigate to **Configure > Severity Weights** to adjust these settings.

---

## Severity Levels & Default Weights

SuperQA has 6 built-in severity levels, each with a numeric weight. The weights must always **decrease from Blocker down to Trivial** — each level must be lower than the level above it.

| Severity | Code | Default Weight |
|---|---|---|
| **Blocker** | BL | 100 |
| **Critical** | CR | 75 |
| **Major** | MJ | 40 |
| **Normal** | NM | 20 |
| **Minor** | MI | 10 |
| **Trivial** | TR | 5 |

These defaults reflect a standard severity gradient. You can adjust any level using its slider.

---

## Adjusting the Weights

Each severity level has an interactive **slider** you can drag to set its weight (0–100):

1. Drag the slider for any severity level to your desired value.
2. Ensure each level remains **lower** than the one above it (e.g., Critical must be less than Blocker). SuperQA enforces this rule automatically.
3. Click **Save Weights** in the top-right corner to apply your changes and recalculate all existing scores.

If you want to go back to the original values, click **Reset to defaults** to restore the default weights (100 – 75 – 40 – 20 – 10 – 5).

> **How scores are recalculated:** When you save new weights, SuperQA immediately recalculates your release confidence scores across all test runs using the updated values. This means historical reports will also reflect the new weighting.
