---
id: test-data
title: Test Data Management
sidebar_label: Test Data
sidebar_position: 4
sidebar_class_name: menu__list-item--icon-test-data
---

# Test Data Management

Managing environment-specific data is a critical part of robust testing. SuperQA's Test Data module allows you to centralize your variables and resolve them dynamically based on the environment you are running against (e.g., Development, Staging, Production).

### The Power of the `#` Key in Test Steps
The major outcome of configuring test data is how effortlessly it integrates into your actual test cases. When you are editing **Test Case > Steps**, simply type the `#` key in any input field. 

The system will instantly display a dropdown listing all your available test data, organized by **Group**. Selecting a variable maps it to that step. Because the key remains constant, SuperQA seamlessly injects the correct value for the active environment at runtime—meaning you never have to rewrite your test cases to test different environments!

---

## 1. Organizing with Groups

Test data in SuperQA is organized into **Groups**. A group acts as a namespace for related variables.

1. Navigate to **BUILD > Test Data**.
2. Click **+ New** in the Groups sidebar.
3. Provide a **Group name**. 
4. **(Optional)** Select a target Test Suite to instantly bundle these variables with a specific suite.
5. Click **Create group**.

Once created, the variables inside this group will be referenced using the syntax `{{group_name.variable_key}}`.

---

## 2. Managing Variables Environment by Environment

Variables are stored at the group level. For every variable you create, you must provide a distinct value for each of your configured environments (e.g., staging vs. production). 

### Adding Variables Manually
1. Select your target Group and click **+ Add variable**.
2. Enter the **Variable name** (this becomes the key).
3. Fill in the specific value for each environment column presented.
4. **Secret Toggle:** If this variable represents sensitive data (like passwords or API tokens), toggle the **Secret** lock icon to ON. This will mask the value in the UI and test logs.
5. Click **Save variables**.

You can also use inline editing directly from the table view to quickly update an environment's value for an existing variable.

---

## 3. Importing Variables via Excel

If you have a large set of test data, you can bulk import variables using our Excel template. 

1. Click the **Import** button in the top right.
2. Click **Download template** to get a properly formatted `.xlsx` file. 
3. **Template Structure:** The template contains columns for the variable name, a column for each of your configured environments, and a `secret` column (enter `on` or `off`).
4. Fill out your data and drag the file into the upload dropzone.
5. **Validation & Confirmation:** SuperQA will parse the file and present a preview validation screen. It will tell you which variables are ready to "add" and which ones it will "skip" (due to formatting errors or duplicates).
6. Review the changes and **Confirm** the import.

---

## 💡 Roadmap: AI Test Data Generation

*Coming Soon!* We are actively working on **AI-based test data generation**. In the near future, the AI Agent will be able to automatically construct realistic, comprehensive data sets tailored to your application's context, drastically reducing the time spent manually sourcing mock data.
