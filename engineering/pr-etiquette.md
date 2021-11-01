# Etiquette while raise a PR for authors

TLDR: Don't be lazy.

- **Small**: Ensure that your PR does not have lot of changes. Do you think a reviewer can do a good job reviewing if they have to review - say 50 files at a time?
- **One Logical Unit**: Ensure that your PR has changes related to one task or bug. One PR should not have multiple fixes in it. Also make sure that by merging that PR, a value can be delivered end to end to related use case.
- **Good title**: Please use a title that explains what the change is about in few words. If you are working on a feature to allow user to login by email, a good title would be `allow user to login by email`
- **Good description**: Each PR is like adding a new page to a constitution. Please add description in PR template to describe what and why behind the change. You should be very liberal and document things such as following. This is a good PR template for [frontend](https://github.com/jalantechnologies/boilerplate-next-typescript/blob/develop/.github/pull_request_template.md) and [backend related changes](https://github.com/jalantechnologies/boilerplate-node-ts/blob/develop/.github/pull_request_template.md).
  - Why is this change needed? If this is fixing a bug, what's the root cause of this bug
  - API changes
  - Database changes
  - UI screenshots, if applicable
  - Document manual and automated tests
- **Set meta info**: Set reviewers, assignee (usually to self) as well as label (task, bug, documentation etc)
- **Lint / Analyze / Test**: Ensure that your PR meets coding standard of your code base (linting), has no bad code (static analyzer) and does not break any automated tests (test). Often these are covered by your CI pipeline, in case that is setup.
- **Self Review**: This is a big one. Please review your PR by self first before asking for a review. This often catches 90% of nits and makes it easier for reviewer to focus on things that matters.
