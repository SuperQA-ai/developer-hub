---
id: release-confidence-score
title: Release Confidence Score
sidebar_position: 2
---

# Release Confidence Score

The **Release Confidence Score** provides an actionable, quantitative metric representing the overall stability and readiness of a specific release. This score helps product and engineering teams determine whether a build is safe to launch based on immediate, real-world testing data.

## How it Works

The score is primarily calculated from **Release Runs**. When you trigger a manual "Execute Now" run against a specific release build, SuperQA aggregates the outcomes of all executed test cases to calculate the launch readiness score.

### Key Factors

- **Pass/Fail Ratio:** The core of the score depends on the percentage of tests that passed versus failed during the release run.
- **Severity Weights:** Not all test failures are equal. A failure in a `Critical` or `Blocker` test heavily penalizes the score compared to a `Low` severity UI glitch.
- **Flakiness:** Tests that exhibit flaky behavior during the run can introduce uncertainty, slightly lowering the confidence score until stabilized.

## Using the Score

Navigate to **Reports & Analytics > Release Confidence Score** to view a historical trend of your releases. 

- **Green (High Confidence):** The build is highly stable and ready for deployment.
- **Yellow (Moderate Confidence):** Some non-critical tests failed or exhibited flakiness. Review the specific failures before launching.
- **Red (Low Confidence):** Critical failures detected. The release should be blocked until the underlying issues are resolved and the release is re-tested.
