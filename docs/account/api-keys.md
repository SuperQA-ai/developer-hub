---
id: api-keys
title: API Keys
sidebar_position: 4
sidebar_class_name: menu__list-item--icon-api-keys
---

# API Keys

API Keys allow external tools and services to authenticate with the SuperQA API on your behalf. You can use them to trigger test runs from your CI/CD pipeline, integrate with GitHub Actions, or access SuperQA data programmatically — without sharing your login credentials.

Each key is scoped to your account and can be named to reflect its purpose (e.g., *CI Pipeline*, *Staging Integration*, *MyApp*), so you always know what is using it.

---

## 1. Viewing Your API Keys

Navigate to **Account > API Keys** to see all your existing keys.

The list shows three columns for each key:

| Column | Description |
|---|---|
| **Name** | The label you gave the key when it was created. The actual key value is masked (e.g., `az-eeac80e***************`). |
| **Created** | The date the key was generated. |
| **Last Used** | The last time this key was used to make an API call. Shows *Never* if unused. |

---

## 2. Creating a New API Key

1. Click the **Create a new API key** button in the top-right corner.
2. In the dialog that appears, enter a **Name** for the key. Choose something descriptive like *MyApp*, *CI Pipeline*, or *Staging*. The name cannot be changed after creation.
3. Click **Create**.

### ⚠️ Copy Your Key Immediately
Once created, SuperQA displays your full API key **only once**. You will not be able to see the key value again after closing this dialog.

> **Store this key safely. It will not be shown again.**

Click the **copy icon** next to the key value to copy it to your clipboard (a *"Copied"* toast will confirm this). Then click **Done** to close the dialog.

Store your key in a secure location, such as your CI/CD environment secrets, a password manager, or a `.env` file that is excluded from version control.

---

## 3. Revoking an API Key

If a key is compromised, no longer needed, or was accidentally exposed, you should revoke it immediately.

1. Click the **⋮ (More Options)** menu on the right side of any key in the list.
2. Click **Revoke**.
3. Confirm the action.

Once revoked, the key is permanently invalidated. Any service still using that key will immediately lose access and will receive authentication errors until it is updated with a new key.

> **Best Practice**: Treat API keys like passwords. Rotate them regularly, use a separate key per integration (not one shared key), and revoke any key that may have been exposed in logs, chat, or version control.
