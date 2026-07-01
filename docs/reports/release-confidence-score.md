---
id: release-confidence-score
title: Release Confidence Score
sidebar_position: 2
sidebar_class_name: menu__list-item--icon-release-confidence
---

# Release Confidence Score

Get a **confidence score** and a clear **Ready / Caution** verdict before every release — every failure weighted by severity so you know exactly what is blocking you and what is safe to ignore.

## Core Features

- **Confidence score**: An actionable, quantitative metric representing overall stability.
- **AI summary**: Automated, intelligent summary of the release readiness and any outstanding issues.
- **Flakiness signal**: Identifies tests that exhibited unstable behavior during the run.
- **Self healing**: Tracks AI-driven self-healing events that resolved broken steps automatically.

## How it Works

The score is primarily calculated from **Release Runs**. When you trigger a manual "Execute Now" run (or *Check now* from a Release Plan) against a specific release build, SuperQA aggregates the outcomes of all executed test cases to calculate the launch readiness score.

### Using the Verdict

Navigate to **Reports & Analytics > Release Confidence Score** to view the verdict of your releases. 

- **Green (Ready):** The build is highly stable and ready for deployment.
- **Red/Yellow (Caution):** Critical failures or flakiness detected. Review the specific failures before launching.
