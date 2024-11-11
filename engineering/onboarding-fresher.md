# Onboarding Associates

At Better, we primarily work with enterprises to build solutions that help them to achieve business efficiencies and scale their business. For a large part, the solutions we deliver are based on web technologies. As of writing this document, our choice of stack is **Python, React (with Typescript) and React-Native (for mobile apps)**. 

This document assumes that you have no or minimal experience with this stack of professional software development in general. However, it assumes that you are proactive, independent and have strong problem solving skills to be able to figure out things on your own. If you do, we hope that you should be able to move through this quickly.

## Getting started
### How we work
Please ensure that you have reviewed [company working principles](https://github.com/jalantechnologies/handbook?tab=readme-ov-file#working-at-jalan-technologies). Read it twice, in detail, as 99% associates often overlook the details and often causes mismatch of expectations.

### How we think about software development
Please ensure that you have reviewed [this article on Github](https://github.com/jalantechnologies/handbook/blob/main/engineering/index.md) how we think about software development, and best practices we recommend to follow.

### Mentorship
At the time of joining, you will be assigned a mentor who will be your single point of contact on Engineering as you go through the onboarding. If you have not been assigned a mentor, please reach out to HR to ask for your mentor. You are expected to share your daily status update on `Onboarding (Engineering)` channel which helps your mentor to follow your progress. Your mentor will also meet once a week in person to give you feedback, answer any questions if any.

## Setup
### Create Github handle for work
Since our source code is stored on Github, you need a Github handle to contribute. There are two options:

1. Use personal Github handle (**recommended**): Add your Better work email as [secondary email to your Github](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account) handle.

```
$ git config --global user.name <YOUR NAME>
$ git config --global user.email <YOUR WORK EMAIL>
```

This way, you build your personal Github profile while doing commit on behalf of the company.

2. Create a separate Better specific Github handle.

###  IDE
Every team member has their preference but we generally use VSCode. Please also install a [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to make sure the code you write in any project is well formatted.

## 4 weeks onboarding plan
Our onboarding is divided into two phase:
### 1. Building a TODO application using Python (flask), and React
Since we assume that you may or may not be familiar with web development and/or Python (flask) and React technology, the goal of this 2 weeks exercise is for you to learn this stack using online resources of your choice while building a simple TODO list application along the way, with following requirements:

As a user I should be able to:

  - signup, login and logout from the application. 
  - create TODO item with following details - Title, description, Type (Official, Personal, Hobby etc.), and Due date.
  - edit TODO item and update any details.
  - mark the status of TODO item to DONE. 
  - mark the status of TODO item from DONE to back to original status (To Do).
  - delete a TODO item.
  - see the list of TODO items with following filters - Overdue (due date < Today's date), Status (To Do and Done)

Note: We expect you to finish this in 2 weeks, assuming you are putting in at least 8 hours a day, 5 days a week. Often when in college or coming out of college, we have a tendency to do things last minute. We recommend that you do not rush through or keep things for last minute or finish just for the sake of finishing. This is an opportunity for you to build YOUR skills. If you do not give 100%, we have seen over and over that such engineers do not end up performing well.

### 2. Re (building) TODO application using company Python (flask), and React boilerplate / standards
The goal of this 2 weeks exercise is for you to rebuild TODO application, but this time using company [boilerplate](https://github.com/jalantechnologies/rflask-boilerplate). The requirement of TODO application remains the same as above, with additional notes: 

- Create a new repo using this [template](https://github.com/jalantechnologies/rflask-boilerplate)
- Create TODO app again, using the code structure and standards followed in above repo
- Write proper automation tests

Note: We expect you to finish this in 2 weeks, assuming you are putting in at least 8 hours a day, 5 days a week. Often when in college or coming out of college, we have a tendency to do things last minute. We recommend that you do not rush through or keep things for last minute or finish just for the sake of finishing. This is an opportunity for you to build YOUR skills. If you do not give 100%, we have seen over and over that such engineers do not end up performing well.

## Best Practices

### Things to watch out for during development

- Make sure to do good research before writing/copying any line of code
- Neat and clean professional looking UI
- All functionalities of the app are working smoothly with no bugs
- Basic coding standards are followed -
  - Proper variable, function, class names
  - Follow RESTful API principles
  - Create classes & objects and define DB schema in a structured format
  - Components are used in React
  - Well formatted code
  - No console.log / console.error / console.warn in code
  - No very long comments inside the code. Maximum 2-3 lines of comments are sufficient most of the time
  - No commented-out code or unused code
  - File names should always be in lowercase. Use hyphens (-) to separate words. For example: `todo-controller.ts`

###  Raise a PR
We encourage you to raise your PR daily, push your changes, once you are done for the day, a PR on Github to merge these changes against the develop branch. Please see raising [pull request etiquette](https://github.com/jalantechnologies/handbook/blob/main/engineering/pr-etiquette.md).

### Important soft skills to pay attention to
1.  Avoiding repetition of mistakes: While mistakes are a natural part of the learning process, we value individuals who can take feedback, learn from their mistakes and apply that knowledge to prevent repetition.
2.  Learning aptitude: We look for individuals who have the ability to learn new concepts and technologies in-depth, and apply their knowledge to create high-quality solutions. Strong fundamentals are a plus.
3.  Problem-solving: We value team members who can find solutions to their problems independently, particularly with regard to out-of-the-box technologies.
4.  Code quality: As an engineering company, we prioritize craftsmanship in code writing and look for individuals who have a strong understanding of object-oriented programming principles.
5.  Communication: Effective communication is essential in the workplace. We place a high value on team members who can clearly and concisely convey their thoughts and ideas.
6.  Commitment: We look for individuals who can be relied upon to deliver on their commitments and support the team and customers alike.
