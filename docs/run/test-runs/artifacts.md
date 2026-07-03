---
id: artifacts
title: Video, Screenshots & Logs
sidebar_position: 5
---

# Video, Screenshots & Logs

For every test case executed, SuperQA automatically captures three types of evidence. Each one answers a different question and points you toward a different action. All of these are accessible directly from the step-level detail panel.

---

## 🎥 Execution Video — *"What exactly did the AI do?"*

A full screen recording of the OmniQA AI Engine executing the test case inside the embedded Omniblade Chrome Browser. The video player is embedded directly in the run detail — use the **"Go to" timestamps** next to each step to jump to that exact moment.

![Test Run replay panel showing the embedded video player alongside the step-by-step execution log](/img/superqa_replay_v3.png)

**How to use the video:**
1. Open the Test Run detail and click a test case row to expand it.
2. Select the **Video** tab in the artifact panel on the right.
3. Press **Play** or click **Go to `0:00`** next to any step to jump directly to that moment.
4. Toggle **Theater Mode** for a full-screen view.

**Outcomes and actions the video helps you take:**

| What you see in the video | What it means | Action to take |
|---|---|---|
| AI clicks the wrong element | The selector or step description is ambiguous | Edit the step in the Test Case editor to be more specific |
| Page loads slowly, causing a timeout | The environment is under load or degraded | Increase the step timeout, or flag an infrastructure issue |
| A UI element is missing entirely | A deployment broke or removed that element | File a bug — the feature is missing in this environment |
| AI completes all steps but assertion fails | The data returned by the app is wrong | Investigate the backend — the UI behaved correctly |
| Video cuts off mid-execution | A Hard Stop step failed and terminated the run | Fix the Hard Stop step first before investigating later steps |

:::note Video Retention
Execution videos are retained per run and per test case for the full retention period configured in your account settings. Videos are not shared outside your organization.
:::

---

## 📸 Screenshots — *"What did the UI look like at the moment of failure?"*

Automatic screenshots are captured at three key moments:

- **Before each step action** — the state of the UI just before the AI interacts with the page
- **After each step action** — confirmation that the intended change occurred
- **At the point of any failure** — the exact UI state at the moment the step broke

Failure screenshots are automatically highlighted with a **red border and FAIL badge** so you can spot them instantly without scrubbing the video.

![Screenshots panel showing before/after captures and a failure-point screenshot with a red FAIL indicator](/img/test_run_screenshots_panel_new.png.png)

**How to access screenshots:**
1. Expand any test case row in the run detail.
2. Click the **Screenshots** tab in the artifact panel.
3. Browse the screenshot grid — failure screenshots appear first, highlighted in red.
4. Click any screenshot to open it full size.

**Outcomes and actions screenshots help you take:**

| What you see in the screenshot | What it means | Action to take |
|---|---|---|
| An error modal or toast visible at failure point | The app explicitly reported an error | Copy the error text and report it to the dev team |
| The page looks visually broken or unstyled | A CSS regression or missing asset | Compare with a passing run's screenshot to pinpoint the change |
| The expected element is simply not on screen | A UI change removed or renamed the element | Update the step selector, or raise a bug if it was unintentional |
| The before and after screenshots are identical | The AI's action had no effect on the UI | The click/input step may be targeting the wrong element |
| A loading spinner visible at failure point | The page timed out waiting for a response | Investigate backend latency or increase the timeout threshold |

:::tip Compare Runs Side by Side
Open two Test Run detail views in separate browser tabs and compare failure screenshots between a passing run and a failing run to immediately spot what changed in the UI.
:::

---

## 📋 Logs — *"Why did it fail at the infrastructure level?"*

Full execution logs capture everything happening beneath the surface during a test run — beyond what the video or screenshots can show.

**What the logs contain:**

| Log Type | What it captures |
|---|---|
| **Network Requests** | Every HTTP request made by the browser during execution — method, URL, status code, and response time |
| **Console Errors** | JavaScript errors and warnings thrown in the browser console during the test |
| **AI Decision Log** | What the OmniQA engine interpreted at each step — which element it identified, what action it decided to take, and why |
| **Variable Resolution Trace** | How every `@{env}` environment variable and `#{data}` test data variable was resolved at runtime |

**Outcomes and actions the logs help you take:**

| What you find in the logs | What it means | Action to take |
|---|---|---|
| A network request returns `401 Unauthorized` | The test environment credentials or auth token are expired | Rotate the credentials in [Environment settings](/docs/configure/environment) |
| A network request returns `500 Internal Server Error` | The backend crashed during the test | Escalate to the engineering team — this is a server-side bug |
| A console error shows `ReferenceError: X is not defined` | A JavaScript file failed to load, breaking the page | This is a frontend deployment issue — report to the dev team |
| The AI Decision Log shows the engine picked the wrong element | The step instruction is ambiguous or a similar element exists nearby | Refine the step description in the Test Case editor to be more precise |
| A variable shows as `undefined` in the Variable Resolution Trace | An environment variable or test data value was not configured | Add the missing value in [Environment settings](/docs/configure/environment) or [Test Data](/docs/build/test-data) |
| All network requests succeed but the test still fails | The failure is purely UI/assertion-based | Switch to the video or screenshots to find the visual cause |

:::tip Start with Logs for Flaky Tests
If a test case passes sometimes and fails other times without code changes, open the Network Requests log and compare a passing run against a failing run. Intermittent `503` or high response-time spikes often reveal the root cause of flakiness.
:::
