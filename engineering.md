## Engineering:

### Interview process
**TLDR; 2 technical rounds, time required: 3 hrs (maximum)**

Either you found us or we found you, the first step is to speak with our talent advisor team to determine mutual fit. If that goes well, the rest of the process is as follows:

1. **Online assessment (~60 mins)**: This will focus on problem solving and involve writing code. Someone from talent acquisition team will send you a link for this.
2. **Interview with engineering team (~90 mins)**: Once you clear online assessment, you will be invited to speak with our engineering team. The interview would focus on system design and related topics. 

We follow [empathetic interview](https://www.linkedin.com/pulse/how-i-do-technical-interview-jaikishan-jalan/) process to ensure you have a rewarding journey during the process.

### First day at JTC
We believe that productive day is the best day. We encourage you to get their hands dirty on first day and try to do a small checkin - either a bug fix, addressing a technical debt or write automated test case. That's the fastest way to get familiarize with the product. Here are few activities that we encourage you to finish on Day 1:

1. Read this handbook in it's entirety and make sure you are familiar with it. This is how we coduct day to day affairs.
2. Reach out to your HR for:
    * To get your @jalantechnologies.com email account
    * To get added to jalantechnologies Slack workspace and common team channels
    * To get your payroll setup
    * To review your job responsibilities again. Ask for official job description.
    * To get product you will be working on.
3. Update your profile (name, job title, profile picture) on Angel.co, LinkedIn, Slack. We also encourage you to associate yourself with the company on LinkedIn, Angel.co - potential team members and customers wants to know more about you and social media handles are often where they discover you first.
4. Based on the product group you are assigned to, reach out to your product lead so s/he can give you access to product assets:
    * Slack channel(s)
    * JIRA / Asana
    * Github / Gitlab
5. Get your hands dirty. Raise a PR for atleast one small work item and try to get it merged.

### Software Development Process

#### Planning
We follow the agile methodology. It all starts with sprint planning. Our sprint is usually a week (or two) long. Team members get together on a particular day of a week (Monday in our case), talks about new user scenarios that need to be enabled as well as any bugs, if any, that needs to be addressed. The work is estimated in story points and planned (factoring any upcoming time offs) for the sprint. 

All the work is managed in JIRA.

**Key Communication:**
- At the end of sprint planning session, a member of engineering team (often the lead) would share the work items planned in sprint and share with rest of the team on Slack.

#### Development
We use [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model and Github for source control. For every task, bug, or story, we create a feature branch. Ex: Consider a story in JIRA:  SEQP-10 – User should see an error message if they entered wrong username or password.

```
git hf feature start SEQP-10/error_message_wrong_username_password
```

We use Hubflow (a set of helper scripts) that does all plumbing work to enforce Gitflow branching model. Hubflow can be installed using following instructions ([for Mac](http://macappstore.org/hubflow/)/[for Linux](https://github.com/tophatmonocle/HubFlow/wiki/Linux)/[for Windows](https://github.com/jalantechnologies/handbook/blob/main/gitFlowWindows.md)).

Once all the changes are made and automated tests are written, changes are committed. At this stage, the engineer who made the change goes to Github and raise a pull request (PR). With each PR, they write a detailed description of the changes made, document manual test cases ran, automated tests cases added, and various devices the changes were tested. S/he then assigns relevant engineers to review the code. With each commit, our bot ensure that changes follow coding standards and run all automated tests to ensure the changes do not break existing scenarios. In case it breaks, our system does not allow the commit. Our system automatically deploys just those changes to a new endpoint (for web-based projects). Each PR goes through a detailed code review. Here are a few things a reviewer looks for:

1. Proper comments have been added to the code.
2. Variables and functions are named correctly.
3. Proper validations and null checks are in place.
4. Relevant automated test cases have been added to cover new code path.
5. Proper error logging is done to ensure we can debug the issue in production in case an issue occurs.
6. The code is architected correctly and follows SOLID design principles.
7. Think about all various scenarios these changes might affect.
8. For UI related changes, does user experience make sense? Is it responsive? Does it render well when user zoom in or zoom out?
9. Performance implications (time and memory)

##### Merging PR:
Once the reviewer approves the changes, the developer merges the PR as follows:

1.1 Checkout feature branch locally
```
git checkout feature_branch
```
1.2 Merge latest changes from destination branch into feature branch
```
git pull origin destination_branch
```
1.3 Rebase (to ensure your changes are at the tip of destination branch when merged)
```
git rebase -i origin/destination_branch
```
1.4 Push your branch changes forcefully to Github (your origin)
```
git push -f origin feature_branch
```
1.5 Squash and Merge (second option in dropdown in Github when trying to merge PR) so there is only commit made for the PR (and not the full commit history of PR is carried over)

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

#### Sprint Exit
At the end of the sprint, the engineering team demo the work to product team (often our customer). Once the changes are accepted, the tickets in JIRA are moved from DONE to CLOSED state and engineering team releases them to production as follows:

JIRA:
- Create a release in JIRA. We follow [semver](https://semver.org/) to determine `<release-version-number>`.
- Associate all `CLOSED` sprint tickets `Fix Versions(s)` with appropriate release

Git:
- Initiate release via `git hf release start <release-version-number>`.
- Bump the package version (Eg: `version` field in `package.json` to `<release-version-number>`). Commit that to relese branch created above.
- Finish the release via `git hf release finish <release-version-number>`. It will open editor twice. On second prompt (associating notes with release tag), copy the release notes from JIRA and paste on second prompt.

**Key Communication:**
- Once the changes are relesed to production, a member of engineering team (often the lead) share the JIRA release notes with rest of the team on Slack.

#### Hotfixes
We have set up monitors on our servers and if there are any errors, bug or crashes that happens, our team gets immediately notified on a Slack channel. In case, after the release, any urgent defects are found, the team would do a hotfix to mitigate the issue.

JIRA:
- Create bug(s) for the defect found in production
- Create a release in JIRA. We follow [semver](https://semver.org/) to determine `<release-version-number>`. Hotfix should generaly update only `PATCH` number
- Tag bugs in JIRA that needs to go out with hotfix.

Git:
- Initiate hotfix via `git hf hotfix start <release-version-number>`.
- Work on bug(s) by creating separate feature branch for them as follows:
  - Create feature branch for the ticket that needs to go out with hotfix. The feature branch should derive from hotfix branch instead of `develop` branch.
    ```git checkout -b feature/TICKET_NUMBER/TICKET_DESCRIPTION hotfix/<release-version-number>```
  - Raise PR against `hotfix/release-version-number` instead of `develop` branch on Github. The PR goes through same review cycle as mentioned during development phase
- Once all tickets are merged, release the hotfix as follows:
  - Checkout `hotfix/<release-version-number>` branch and pull latest.
  - Bump the package version (Eg: `version` field in `package.json`). Commit that to hotfix branch created above.
  - Finish the hotfix via `git hf hotfix finish <release-version-number>`. It will open editor twice. On second prompt (associating notes with release tag), copy the release notes from JIRA and paste on second prompt.
    ```
    git hf hotfix finish <release-version-number>
    ```

**Key Communication:**
- Once the changes are relesed to production, a member of engineering team (often the lead) share the JIRA release notes with rest of the team on Slack.
