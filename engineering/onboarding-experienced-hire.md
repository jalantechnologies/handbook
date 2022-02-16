# Onboarding Experienced Hire

## Day 1

The goal of the first day is to get comfortable with JTC software development process.

### Exercise:

#### Step 1: Setup Github Handle for Work

There are two options:

1. Use personal Github handle (**recommended**): Add your JTC work email as [secondary email to your Github](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account) handle. And on the repo locally do:

```

$ git config user.name <YOUR NAME>

$ git config user.email <YOUR WORK EMAIL>

```

This way, you build your personal Github profile while doing commit on behalf of the company.

2. Create a separate JTC specific Github handle.

#### Step 2: Setup IDE

Every team member has their preference but we generally use VSCode. Please also install a [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to make sure the code you write in any project is well formatted.

#### Step 3: Setup Repo

1. Create a repo named `eng-onboarding` on your personal Github account.

2. Create a `master` branch. (NOTE: Github recently named the primary branch to `main`. If that is the case, [rename main to master branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch))

3. Commit this [pull request template](https://github.com/jalantechnologies/boilerplate-node/blob/develop/.github/pull_request_template.md) to the master branch as the first commit. Read more about pull request templates [here](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

4. Create a `develop` branch which is a child of `master` branch.

5. Set `develop` branch as default branch. See how to do it [here](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch).

#### Step 4: Raise a PR

1. Create a feature branch named `fibonacci_sequence` using command `git hf feature start fibonacci_sequence`. We use [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model during development. and use Hubflow (a set of helper scripts) that does all plumbing work to enforce Gitflow branching model. Hubflow can be installed using following instructions ([for Mac](http://macappstore.org/hubflow/)/[for Linux](https://github.com/tophatmonocle/HubFlow/wiki/Linux)/[for Windows](https://github.com/jalantechnologies/handbook/blob/main/gitflow-windows.md)). **Please make sure you are comfortable with Gitflow and Hublfow before proceeding further.**

2. Create a file `index.js` that contains JS code to print Fibonacci sequence upto n terms (see: [sample code](https://www.programiz.com/javascript/examples/fibonacci-series)). Please make the code well formatted and make sure that it works. Commit the changes to the feature branch.

3. Raise a PR on Github to merge these changes against the develop branch. Please see raising [pull request etiquette](https://github.com/jalantechnologies/handbook/blob/main/engineering/pr-etiquette.md).

4. Ping the link of PR on the `eng-onboarding` Slack channel for review.

5. Once all comments in PR has been addressed and PR has been approved, please `Squash and Merge` the PR to develop branch (read [why](https://blog.pairworking.com/why-you-should-care-about-squash-and-merge-in-git-675856bf66b0))

### Other things to take care:

- Review your job responsibilities again. Ask for official job description, if not provided.

- Learn more about product team you will be working with. Talk to your HR, if needed.

- Ensure your Payroll is setup correctly in HRMS system. Talk to your HR, if needed.

- Browse various Slack channels and add yourself. Review past conversations to learn better about the organisation.

- Associate yourself with JTC on LinkedIn, Angel.co - potential team members and customers wants to know more about you and social media handles are often where they discover you first.

- Setup your name, title, profile picture on Github, Slack, and other company software you use.

## Day 2-3

The goal of this exercise is to ensure that you are familiar with the general architecture that we use to build backend applications and create a simple TODO application using that architecture.

Please start your work day by sending a daily status update to the `Onboarding (Engineering)` channel in MS Team. Here is a sample. Please continue to send daily status updates beginning every day to `Onboarding (Engineering)` MS Team channel.

```
Progress:
-------------
- Read JTC development process
- Completed day 1 eng-onboarding exercise

Plan:
-------------
- Start on understanding Node boilerplate
- Start on building TODO application repo

Problems:
-------------
- None
```

### Exercise:

Create REST API endpoints for a TODO application. If you are not familiar with RESTFul API's, please read [this article](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9).

A TODO item is defined as:

```
class TODO {
 title: string;
}
```

You are required to create 5 endpoints as follows:

#### Create a TODO item:

URI: `POST` `/todos`
Request body:

```
{
  title: '...'
}
```

Response HTTP Status: `201`
Response body:

```
{
  id: '...',
  title: '...'
}
```

#### Delete a TODO item:

URI: `DELETE` `/todos/:id`
Response Status: `204`

#### Update a TODO item:

URI: `PUT` `/todos/:id`
Request body:

```
{
  title: '...'
}
```

Response HTTP Status: `200`
Response body:

```
{
  id: '...',
  title: '...'
}
```

#### Fetch a TODO item:

URI: `GET` `/todos/:id`
Response HTTP Status: `200`
Response body:

```
{
  id: '...',
  title: '...'
}
```

#### List all TODOs items:

URI: `GET` `/todos`
Response HTTP Status: `200`
Response body:

```
[{
  id: '...',
  title: '...'
}, {
  ...
}]
```

#### Step 1: Setup Repo

1.  Create a repo named `todo-backend` on your personal Github.
2.  Create a `master` branch (by renaming `main` branch)
3.  Copy the base code base from [JTC Node Boilerplate](https://github.com/jalantechnologies/boilerplate-node-ts) into master branch.
4.  Create a `develop` branch which is a child of `master` branch.
5.  Set develop `branch` as default branch. See how to do it [here](https://docs.github.com/en/github/administering-a-repository/changing-the-default-branch).

#### Step 2: Raise a PR containing changes to create a TODO item.

Please make sure all PR’s have appropriate automated tests associated with the changes. Please ping `Onboarding (Engineering)` MS Team channel with PR link for review.

#### Step 3: Raise a PR containing changes to delete a TODO item.

Please make sure all PR’s have appropriate automated tests associated with the changes. Please ping `Onboarding (Engineering)` MS Team channel with PR link for review.

#### Step 4: Raise a PR containing changes to update a TODO item.

Please make sure all PR’s have appropriate automated tests associated with the changes. Please ping `Onboarding (Engineering)` MS Team channel with PR link for review.

#### Step 5: Raise a PR containing changes to fetch a TODO item.

Please make sure all PR’s have appropriate automated tests associated with the changes. Please ping `Onboarding (Engineering)` MS Team channel with PR link for review.

#### Step 6: Raise a PR containing changes to list all TODO items.

Please make sure all PR’s have appropriate automated tests associated with the changes. Please ping `Onboarding (Engineering)` MS Team channel with PR link for review.
