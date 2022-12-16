## Product Management:

### Overview

We think product manager role as that of a driver in a bus full of passenger. They have to take everyone with them and lead the bus to the right destination while creating a delightful experience throught the journey.

At JTC, a product manager:

1. Works with customer to understand their problems and evangelize solution
2. Works with product designer to create a delightful experience for the solution
3. Works with engineering to bring the solution to life
4. Repeat step 1-3 based on data and intuition

It is one of the **hardest jobs** because even though you don't have official authority on engineering, design or customer, you need to inspire them in such a way that they respect you and see you as a leader. This is a title not given, but earned.

The rest of the section talks in brief about each of the steps.

#### 1. Understanding Problem

**Goal: Understand problem and start product requirement document (PRD) using this [template](https://assets.plan.io/files/Planio-Product-Requirements-Document-Template.pdf)**

The first step is to figure out what problem to solve. This is the **hardest part**. If you get this wrong, everything else would result in waste. At JTC, often your customer would tell you the problem statement(s). [5 Whys](https://en.wikipedia.org/wiki/Five_whys) is a good interrogative technique to use while doing the discovery and understanding the problem statement.

Once you understand the problem, create a product requirement document (PRD) using this [template](https://assets.plan.io/files/Planio-Product-Requirements-Document-Template.pdf) and fill the relevant section to document the problem statement.

#### 2. Evangelize Solution

**Goal: Work with product designer and customer to get a buy off on solution and update PRD.**

Once the problem is understood, you should propose few solutions and build mock wireframes with product designer to help visualize the solution and discuss them with customer.

You should also decide on KPI i.e. key performance indicators for the success of the feature. Ex: If you build a login feature that allows user to sign up with using Google SSO, you may want to track the uptick in number of sign ups as a KPI.

Once the solution and KPI's are agreed upon, update the PRD document.

#### 3. Product Development & Execution

**Goal: Work with engineering to plan and execute.**

Once the problem, solution and KPI's are documented, you should share the document with the tech lead and/or engineers and ask him/her to design the solution and help break down the work into small techncial tasks with rough estimates. You should create [JIRA](https://www.atlassian.com/software/jira) tickets based on those work items. For planning purpose, we use agile methodology. Our sprints are 2 weeks long and we recommend product manager to conduct following scrum ceremonies:

-   **Sprint planning (Duration: 60 minutes, When: 2 days before sprint starts)**: In the sprint planning, you present the work items to Tech Lead that you would like the engineering team to achieve. This is an opportunity for Tech Lead to ask questions and for you to get his buyoff on the plan.

-   **Daily standups (Duration: 15 minutes, When: Daily)**: This is daily touch base call with the product team (engineering, design, QA) driven by Tech Lead. During the meeting, go through the status update and ensure you understand the progress and adopt accordingly to make sure that the overall sprint remains on track. 

- **Feature acceptance (Duration: Ongoing, When: During the sprint)**: During the sprint, you should verify all the PRs and provide "PM Acceptance" for engineering team to merge and deploy feature on production. All the review and feedback should be submitted within PR on Github. 

-   **Sprint Exit (Duration: 60 minutes, When: Last day of sprint)**: In the morning of the last day of the sprint, send engineering team a reminder to ensure that they should focus on internal feedback and preparing for the demo on the staging environment. You should also prepare the ["Sprint Review"](https://jalantechnology-my.sharepoint.com/:p:/g/personal/mohit_jalantechnologies_com/EbV4otRcDihHjThY_FIOFEQB73crpneZKOc7joPsRrO4dg?e=Yp5K2C) slides summarizing the sprint output.

-   **Sprint Retro (Duration: 30 minutes, When: 2 days after sprint exit)**: The goal of this meeting (should plan within 2-3 days of sprint exit) is to reflect what went well and areas to improve for the sprint with clear action items.

#### 4. Handling Product Defects

**Goal: Analyse and dealing with product defects**

PM and QA should work together to handle any reported product defects. It should be validated against the PRD and see where we are deviating from the agreed behaviour. On successful validation PM should update the PRD (if needed) and file the bug in Jira with a clear description and priority based on the impact. 

#### 5. Measure, Learn & Improve

**Goal: Observe feature usage, learn, and improve.**

Based on the KPI's decided during evangelizing the solution, you need to start monitoring the product usage once the feature is launched. Often, in early stages of the feature launch, you may not get sufficient data to make meaningful conclusion. This is where you need to mix data with your intuition. Based on data and your intuition, you should decide whether the feature launch was successful or not and refine the solution accordingly.

At JTC, we recommend using following tools:

-   [MixPanel](https://mixpanel.com/) to capture usage data and building KPI reports.
-   [Inspectlet](https://www.inspectlet.com/) to capture user sessions as video to review them. We expect you to review the few sessions manually every day to see how the feature is being used or where users are often stuck.

## How to:

#### 1. [How to setup Jira](https://jalantechnology-my.sharepoint.com/:w:/g/personal/mohit_jalantechnologies_com/EQzTc5JKxuxPjFvgo8nz_skByByJoRKT_qHZwHuYgHcWrA)
