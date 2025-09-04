---
layout: default
---

# Pull Request Guidelines

## Core Principles

- **Code Quality Obsessed** - Every line matters for production stability
- **Clean Code** - Readable code reduces bugs and maintenance costs
- **Type Safety** - Catch errors at compile time, not in production
- **Broken Window Policy** - Fix small issues before they become big problems

## 1. Before You Code

- **Keep it small** - Large PRs are harder to review, more likely to have bugs, and slower to merge. One logical change only.
- **Create proper branch** - `author/type/description` helps teammates know who's working on what (e.g., `john/fix/login-bug`)

## 2. Writing Commits

`type: description` (max 50 chars) - Clear history helps with debugging and rollbacks
- **feat:** `feat: add email auth` - New features
- **fix:** `fix: resolve timeout` - Bug fixes  
- **chore:** `chore: update dependencies` - Maintenance tasks
- **refactor:** `refactor: improve API performance` - Code improvements
- **docs:** `docs: update API guide` - Documentation changes
- **test:** `test: add login automated tests` - Adding automated tests
- Use imperative mood: "Add" not "Added"

## 3. Creating Your PR

**Title:** Clear, specific description tells reviewers exactly what changed
- Good: "Add email login functionality" 
- Bad: "Update login stuff"

**Description:** Complete the entire [PR template](https://github.com/jalantechnologies/boilerplate-mern/blob/main/.github/pull_request_template.md) - this is your documentation for future developers
- **Why** this change is needed - Context prevents future bugs and confusion
- **API/Database changes** - Critical for deployment planning (even if "None")
- **Screenshots** - Visual proof reduces back-and-forth questions
- **Testing** - Shows you've verified the change works

**Meta Information:** Set proper PR metadata for tracking and organization
- **Assignee:** Assign to yourself - You own this change
- **Labels:** Use appropriate labels (feature, bug, documentation, etc.) - Helps with filtering and metrics

> **⚠️ Incomplete descriptions = rejected PRs** - Poor documentation leads to production issues

## 4. Before Requesting Review

> **MANDATORY self-review checklist - Catches 90% of issues before wasting reviewer time:**

- [ ] **Line-by-line code review** - Pretend you're reviewing someone else's code
- [ ] **Test your changes** - Broken code in review wastes everyone's time
- [ ] **Complete PR template** - Missing context leads to poor review quality
- [ ] **Record Loom video** - Explains business impact and saves review meeting time
- [ ] **Add automated tests** (backend PRs) - Prevents regressions and builds confidence
- [ ] **Clean up** - Debug code, console.log, and comments make code unprofessional
- [ ] **All previous feedback addressed** - Ignoring feedback damages team relationships

## 5. Timeline

Give reviewers 24 hours - Quality review takes time. Follow up if blocking other work.

---

*Remember: PRs are permanent documentation. Write them for the developer who will debug this code at 2 AM in 6 months.*
