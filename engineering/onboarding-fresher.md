# Onboarding Freshers

At Jalan Technologies, we primarily work with enterprises to build solutions that help them to achieve business efficiencies and scale their business. For a large part, the solutions we deliver are based on web technologies. As of writing this document, our choice of stack is **Typescript, Node, React and React-Native (for mobile apps)**.

This document assumes that you have no or minimal experience with this stack of professional software development in general. However, it assumes that you are proactive, independent and have strong problem solving skills to be able to figure out things on your own. If you do, we hope that you should be able to move through this quickly.
    

# First thing first
    

### Create Github handle for work
    

There are two options:

1. Use personal Github handle (**recommended**): Add your Jalan Technologies work email as [secondary email to your Github](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account) handle.

```
$ git config --global user.name <YOUR NAME>

$ git config --global user.email <YOUR WORK EMAIL>
```

This way, you build your personal Github profile while doing commit on behalf of the company.
    

2. Create a separate Jalan Technologies specific Github handle.
    

###  Setup IDE
    

Every team member has their preference but we generally use VSCode. Please also install a [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to make sure the code you write in any project is well formatted.

# Learning Path
    
## 1. Fundamental Full stack development using Javascript

    

In order to start learning fundamentals of React, Node and MongoDB, we suggest you build a TODO app project using MERN stack.
    

> Requirements
    
Create a TODO app using MERN stack. As a user I should be able to -
  - signup, login and logout from the application. 
  - create TODO item with following details - Title, description, Type (Official, Personal, Hobby etc.), and Due date.
  - edit TODO item and update any details.
  - mark the status of TODO item to DONE. 
  - mark the status of TODO item from DONE to back to original status (To Do).
  - delete a TODO item.
  - see the list of TODO items with following filters - Overdue (due date < Today's date), Status (To Do and Done)
    
> Expected time to finish  

Two weeks


## 2. Getting along with JTC standards


> Requirements

- Create a new repo using this template - https://github.com/jalantechnologies/boilerplate-mern
- Create TODO app again, using the code structure and standards followed in above Repo
- Write proper automation tests

> Expected time to finish  

Two weeks



# General Expectations 
    
- Every day, please send your daily status update to `Onboarding (Engineering)` channel. Here is a sample format of daily status update:

```
Progress:
-------------
- Read Jalan Technologies development process
- Completed day 1 eng-onboarding exercise

Plan:
-------------
- Start on understanding Node boilerplate
- Start on building TODO application repo

Problems:
-------------
- None
```
- Make sure to do good research before writing/copying any line of code.
- Daily or frequent code push on the GitHub repo
- Neat and clean professional looking UI
- All functionalities of the app are working smoothly with no bugs
- Basic coding standards are followed -
  - Proper variable, function, class names
  - Follow RESTful API principles
  - Create classes & objects and define DB schema in a structured format
  - Components are used in React
  - Tailwind CSS, not to be used
  - Well formatted code
  - No console.log / console.error / console.warn in code
  - No very long comments inside the code. Maximum 2-3 lines of comments are sufficient most of the time
  - No commented-out code or unused code

NOTE:

- Reminder: Please do not rush through or keep things for last minute or finish just for the sake of finishing. This is an opportunity for you to build YOUR skills. If you do not give 100%, we have seen over and over that such engineers do not end up performing well when they work on a client/internal product with us.

- The above timeline assumes you are putting in at least 8 hours a day, 5 days a week.

# Logistics

### Mentor

At the time of joining, you will be assigned a mentor who will be your single point of contact on Engineering as you go through the onboarding. If you have not been assigned a mentor, please reach out to HR to ask for your mentor.

### Key Skills for Team Member Success:

At Jalan Technologies, our mentorship program includes regular check-ins between mentors and mentees to review code and assess progress. These evaluations allow us to identify and focus on developing the following key skills and abilities among our team members.

1.  Avoiding repetition of mistakes: While mistakes are a natural part of the learning process, we value individuals who can take feedback, learn from their mistakes and apply that knowledge to prevent repetition.
    

2.  Learning aptitude: We look for individuals who have the ability to learn new concepts and technologies in-depth, and apply their knowledge to create high-quality solutions. Strong fundamentals are a plus.
    

3.  Problem-solving: We value team members who can find solutions to their problems independently, particularly with regard to out-of-the-box technologies.
    

4.  Code quality: As an engineering company, we prioritize craftsmanship in code writing and look for individuals who have a strong understanding of object-oriented programming principles.
    

5.  Communication: Effective communication is essential in the workplace. We place a high value on team members who can clearly and concisely convey their thoughts and ideas.
    

6.  Commitment: We look for individuals who can be relied upon to deliver on their commitments and support the team and customers alike.

---

###  Raise a PR

  
We encourage you to raise your PR daily once you are done for the day, a PR on Github to merge these changes against the develop branch. Please see raising [pull request etiquette](https://github.com/jalantechnologies/handbook/blob/main/engineering/pr-etiquette.md).
