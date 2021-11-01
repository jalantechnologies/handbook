# Software Development Process

## Planning

Our sprints are usually two week long. Team members get together on a particular day, talks about new user scenarios that need to be enabled as well as any bugs, if any, that needs to be addressed. The work is estimated in story points and planned (factoring any upcoming time offs) for the sprint. All the work is managed in JIRA.

## Development

We use [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model during development. and use Hubflow (a set of helper scripts) that does all plumbing work to enforce Gitflow branching model. Hubflow can be installed using following instructions ([for Mac](http://macappstore.org/hubflow/)/[for Linux](https://github.com/tophatmonocle/HubFlow/wiki/Linux)/[for Windows](https://github.com/jalantechnologies/handbook/blob/main/gitflow-windows.md)). **Please make sure you are comfortable with Gitflow and Hublfow before proceeding further.**

For every task, bug, or story, we create a feature branch. Ex: Consider a story in JIRA: SEQP-10 – User should see an error message if they entered wrong username or password.

```
git hf feature start SEQP-10/error_message_wrong_username_password
```

Once all the changes are made and automated tests are written, changes are committed. At this stage, the engineer who made the change goes to Github and raise a pull request (PR). Please see raising [pull request etiquette](https://github.com/jalantechnologies/handbook/blob/main/engineering/pr-etiquette.md). S/he then assigns relevant engineers to review the code. With each commit, CI system ensure that changes follow coding standards and run all automated tests to ensure the changes do not break existing scenarios. In case it breaks, the system does not allow the commit. The system automatically deploys just those changes to a new endpoint (for web-based projects). Each PR goes through a detailed code review. Here are a few things a reviewer looks for:

1. Proper comments have been added to the code.
2. Variables and functions are named correctly.
3. Proper validations and null checks are in place.
4. Relevant automated test cases have been added to cover new code path.
5. Proper error logging is done to ensure we can debug the issue in production in case an issue occurs.
6. The code is architected correctly and follows SOLID design principles.
7. Think about all various scenarios these changes might affect.
8. For UI related changes, does user experience make sense? Is it responsive? Does it render well when user zoom in or zoom out?
9. Performance implications (time and memory)

### Merging PR:

Once the reviewer approves the changes, `Squash and Merge` (second option in dropdown in Github when trying to merge PR) so there is only commit made for the PR (and not the full commit history of PR is carried over)

Once the PR is merged and developer moves on to next work item. Note that we do not have a separate QA team and our engineers own everything from building the feature to testing and monitoring. As soon the changes are merged, our system auto deploys them to a staging server.

**Key Communication:**

- Before start of work day, every member of engineering team shares their daily status update in PPP format.

  ```
  Progress:
  ---------
  ...
  ...

  Plan:
  ------
  ...
  ...

  Problems:
  ---------
  ...
  ```

## Sprint Exit

At the end of the sprint, the engineering team demo the work to product team (often our customer). Once the changes are accepted, the tickets in JIRA are moved from DONE to CLOSED state and engineering team releases them to production as follows:

JIRA:

- Create a release in JIRA. We follow [semver](https://semver.org/) to determine `<release-version-number>`.
- Associate all `CLOSED` sprint tickets `Fix Versions(s)` with appropriate release

Git:

- Initiate release via `git hf release start <release-version-number>`.
- Bump the package version (Eg: `version` field in `package.json` to `<release-version-number>`). Commit that to relese branch created above.
- Finish the release via `git hf release finish <release-version-number>`. It will open editor twice. On second prompt (associating notes with release tag), copy the release notes from JIRA and paste on second prompt.

**Key Communication:**

- Once the changes are released to production, a member of engineering team (often the lead) share the JIRA release notes with rest of the team on Slack.
