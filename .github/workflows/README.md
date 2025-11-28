# GitHub Workflows

This directory contains the CI/CD automation for the SuperQA Developer Hub.

## 📄 Current Workflow: `main.yml`

A single, comprehensive workflow that handles all CI/CD operations.

### What It Does

#### For Pull Requests:
1. **Check PR Labels** - Blocks merge if PR has forbidden labels ("Do Not Merge", "Blocked / On hold", "Draft")
2. **Validate File Names** - Ensures markdown/image files follow kebab-case naming and are under 100 characters
3. **Quality Checks** - Runs ESLint, TypeScript checks, builds site, and tests deployment
4. **PR Preview Comment** - Posts a success comment on PR with build status

#### For Push to Main:
1. **Quality Checks** - Full validation and build
2. **Deploy to GitHub Pages** - Automatic deployment of the built site

### Workflow Structure

```yaml
Jobs:
├── check-labels          (PR only)
├── validate-files        (PR only)
├── quality-checks        (Always)
│   ├── ESLint
│   ├── TypeScript check
│   ├── Build site
│   ├── Test site
│   └── Upload artifact
├── pr-preview           (PR only, after all checks pass)
└── deploy               (Push to main only, after quality-checks)
```

### Triggers

- **Push to `main`** - Runs quality checks and deploys
- **Pull Request** - Runs all checks and posts preview comment
- **Manual** - Can be triggered via workflow_dispatch

### Permissions

- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for deployment
- `pull-requests: write` - Comment on PRs

### Concurrency

Uses concurrency groups to prevent multiple runs on the same ref, with automatic cancellation of outdated runs.

---

## 🚀 Benefits of Single Workflow

### Before (7 separate files):
- ❌ Redundant setup steps across workflows
- ❌ Harder to maintain consistency
- ❌ More complex to understand overall flow
- ❌ Longer execution time due to multiple workflow starts

### After (1 consolidated file):
- ✅ Single source of truth
- ✅ Shared setup reduces duplication
- ✅ Clear job dependencies
- ✅ Better resource utilization
- ✅ Easier to maintain and understand
- ✅ Faster execution with job parallelization

---

## 🔧 Customization

### Add a New Check

Add a new job to `main.yml`:

```yaml
my-custom-check:
  name: My Custom Check
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Run my check
      run: echo "Custom check here"
```

### Modify Forbidden Labels

Edit the `check-labels` job:

```yaml
FORBIDDEN_LABELS=("Do Not Merge" "Blocked / On hold" "Draft" "Your-Label")
```

### Change File Validation Rules

Edit the `validate-files` job regex patterns:

```yaml
# Current: kebab-case
grep -vE '^([a-z0-9]+(-[a-z0-9]+)*)(/([a-z0-9]+(-[a-z0-9]+)*))*\.(md|jpg|png|jpeg|svg)$'

# Example: Allow underscores
grep -vE '^([a-z0-9_]+(-[a-z0-9_]+)*)(/([a-z0-9_]+(-[a-z0-9_]+)*))*\.(md|jpg|png|jpeg|svg)$'
```

---

## 📊 Workflow Status

View workflow runs:
- **Actions Tab**: https://github.com/superqa/developer-hub/actions
- **Specific Run**: Click on any commit to see its checks

### Status Badges

Add to README.md:

```markdown
[![CI/CD](https://github.com/superqa/developer-hub/actions/workflows/main.yml/badge.svg)](https://github.com/superqa/developer-hub/actions/workflows/main.yml)
```

---

## 🐛 Troubleshooting

### Workflow Not Running

1. Check if GitHub Actions is enabled (Settings → Actions)
2. Verify branch protection rules don't block workflows
3. Check workflow file syntax with [GitHub Actions validator](https://rhysd.github.io/actionlint/)

### Deployment Fails

1. Verify GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
2. Check repository permissions for GITHUB_TOKEN
3. Review deployment logs in Actions tab

### Job Takes Too Long

1. Check if yarn cache is working (`cache: 'yarn'`)
2. Consider splitting large jobs
3. Review `node_modules` size - may need cleanup

---

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [GitHub Pages Deployment](https://docs.github.com/en/pages)

---

**Last Updated**: November 2025

