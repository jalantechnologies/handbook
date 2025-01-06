# Etiquette while raise a PR for authors

TLDR: Don't be lazy.

- **Small**: Ensure that your PR does not have lot of changes. Do you think a reviewer can do a good job reviewing if they have to review - say 50 files at a time?
- **One Logical Unit**: Ensure that your PR has changes related to one task or bug. One PR should not have multiple fixes in it. Also make sure that by merging that PR, a value can be delivered end to end to related use case.
- **Branch**: Your branch name should be small, concise. A good branch name consists author of the change (so team members know who is working on it), the type of change that is being proposed (feature, bug, etc) and small description for the change (usually the shortest description of the ticket you working on or the ticket number itself). Examples - `ankit/fix/username-label-issue`, `ankit/feat/platform-3244-fix-test`.
- **Good title**: Please use a title that explains what the change is about in few words. If you are working on a feature to allow user to login by email, a good title would be `Allow user to login by email`
- **Good description**: Each PR is like adding a new page to a constitution. Please add description in PR template to describe what and why behind the change. You should be very liberal and document things such as following. [This](https://github.com/jalantechnologies/boilerplate-mern/blob/main/.github/pull_request_template.md) is a good PR template that we generally use which breaks down your description into:
  - Why is this change needed? If this is fixing a bug, what's the root cause of this bug
  - API changes
  - Database changes
  - UI screenshots, if applicable
  - Document manual and automated tests
- **Set meta info**: Set reviewers, assignee (usually to self) as well as label (task, bug, documentation etc)
- **Lint / Analyze / Test**: Ensure that your PR meets coding standard of your code base (linting), has no bad code (static analyzer) and does not break any automated tests (test). Often these are covered by your CI pipeline, in case that is setup.
- **Self Review**: This is a big one. Please review your PR by self first before asking for a review. This often catches 90% of nits and makes it easier for reviewer to focus on things that matters. These points are also applicable while reviewing fellow developers' PRs.
  - **Check Description Message**: Verify that the description aligns with the defined process and is comprehensive.
  - **Check Commit Messages**: Ensure commit messages are clear, meaningful, and follow the established format.
  - **Preview Demo Evidence**:
    - Include demo videos or screenshots from the preview environment to validate visual or functional changes.
  - **No Defaults**:
    - Avoid using default values unless absolutely necessary. Provide context or documentation for defaults used.
  - **Avoid Magic Numbers**:
    - Replace magic numbers with named constants or configurations.
  - **No Cross-Service Imports**:
    - Avoid importing code from other services to ensure modularity.
  - **Code Readability**:
    - Ensure code is clean, readable, and adheres to coding standards.
    - Avoid unnecessarily complex code. Strive for simplicity and clarity.
  - **Align Flask Code to MERN Standards**:
    - Maintain consistency between Flask and MERN boilerplate standards.
  - **Avoid Clever Code**:
    - Focus on code that is straightforward and easy for others to understand.
- **PR Review by Reviewer**: Allow reviewer a time of 24 hours to review your PR and follow up should be after a particular time period (If your further work is dependent upon this PR, then you can mention the same to reviewer).
