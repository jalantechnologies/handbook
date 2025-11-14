## Product Management:

### Goal of This Document

The purpose of this document is to ensure that before starting any new project, you have complete clarity on the processes, expectations, and communication flow required to execute effectively.

By the start of every project, you should be able to confidently answer the following:

1. Do I have a clear understanding of how to initiate a new project- including all prerequisites, documentation, and approvals needed before kickoff?
2. Do I fully understand how the feature development, review, and release cycles are structured and managed?
3. Do I know which communication channels are to be used for specific types of discussions, updates, and escalations?
4. Am I aligned on the product vision, target users, and key business metrics that define success for this project?
5. Have I identified and connected with all relevant stakeholders, and do I understand their roles, responsibilities, and expectations from the product team?

### Overview

We believe a Product Manager’s role is much like a driver steering a bus full of passengers, leading everyone toward the right destination while ensuring a smooth and engaging journey along the way.

At Better, a Product Manager:

1. Works with customer to understand their problems and evangelize solution
2. Collaborates with designers to craft delightful user experiences.
3. Partners with engineers to bring those solutions to life.
4. Continuously iterates on all of the above, guided by data, feedback, and intuition.

It is one of the **hardest jobs** because even though you don't have official authority on engineering, design or customer, you need to inspire them in such a way that they respect you and see you as a leader. This is a title not given but earned.

The rest of the section talks in brief about each of the steps.

#### 1. Understanding Problem

**Goal: Understand the problem and start the product requirement document (PRD) using this [template](/product-management/PRD%20Template)**

The first step is to figure out what problem to solve. This is the **hardest part**. If you get this wrong, everything else will result in waste. At Better, often your customer would tell you the problem statement(s). [5 Whys](https://en.wikipedia.org/wiki/Five_whys) is a good interrogative technique to use while doing the discovery and understanding the problem statement.

Once you understand the problem, create a product requirement document (PRD) using this [template](/product-management/PRD%20Template) and fill in the relevant section to document the problem statement.

#### 2. Evangelize Solution

**Goal: Work with the product designer and customer to get a buy-off on the solution and update PRD.**

Once the problem is understood, you should propose a few solutions and build mock wireframes with the product designer to help visualize the solution and discuss them with the customer.

You should also decide on KPI i.e. key performance indicators for the success of the feature. Ex: If you build a login feature that allows users to sign up using Google SSO, you may want to track the uptick in a number of sign-ups as a KPI.

Once the solution and KPIs are agreed upon, update the PRD document.

#### 3. Product Development & Execution

**Goal: Work with engineering to plan and execute.**

Once the problem, solution, and KPIs are documented, you should share the document with the tech lead and/or engineers and ask him/her to design the solution and help break down the work into small technical tasks with rough estimates. You should create [JIRA](https://www.atlassian.com/software/jira) tickets based on those work items. For planning purposes, we use agile methodology. 
We follow an Agile process with **2-week sprints**, and PMs are expected to lead or participate in the following ceremonies:

-   **Sprint planning (Duration: 60 minutes, When: 2 days before the sprint starts)**: In the sprint planning, you present the work items to the Tech Lead that you would like the engineering team to achieve. This is an opportunity for the Tech Lead to ask questions and for you to get his buyoff on the plan.

-   **Daily standups (Duration: 15 minutes, When: Daily)**: This is a daily touch base call with the product team (engineering, design, QA) driven by Tech Lead. During the meeting, go through the status update and ensure you understand the progress and adapt accordingly to make sure that the overall sprint remains on track. 

- **Feature acceptance (Duration: Ongoing, When: During the sprint)**: During the sprint, you should verify all the PRs and provide "PM Acceptance" for the engineering team to merge and deploy the feature on production. All the reviews and feedback should be submitted within PR on GitHub. 

-   **Sprint Exit (Duration: 60 minutes, When: Last day of sprint)**: In the morning of the last day of the sprint, send the engineering team a reminder to ensure that they focus on internal feedback and preparing for the demo on the staging environment. You should also prepare the ["Sprint Review"](https://jalantechnology.sharepoint.com/:p:/s/JTC/Ea0gpWXBwy1LixBUfPo2qNYBrAaK3Ju07bgEkjCbQhZVag?e=1R2YK8) slides summarizing the sprint output.

-   **Sprint Retro (Duration: 30 minutes, When: 2 days after sprint exit)**: The goal of this meeting (should plan within 2-3 days of sprint exit) is to reflect on what went well and areas to improve for the sprint with clear action items.

#### 4. Measure, Learn & Improve

**Goal: Observe feature usage, learn, and improve.**

Based on the KPIs decided during evangelizing the solution, you need to start monitoring the product usage once the feature is launched. Often, in the early stages of the feature launch, you may not get sufficient data to make a meaningful conclusion. This is where you need to mix data with your intuition. Based on data and your intuition, you should decide whether the feature launch was successful or not and refine the solution accordingly.

At Better, we recommend using the following tools:

-   [MixPanel](https://mixpanel.com/) to capture usage data and build KPI reports.
-   [Inspectlet](https://www.inspectlet.com/) to capture user sessions as video to review them. We expect you to review the few sessions manually every day to see how the feature is being used or where users are often stuck.

### Handling Product Defects

Whenever a client or any product stakeholder reports a software defect, the PM should be first to evaluate it (as it may also be a desired behavior).

PM should validate the behaviour against PRD and if it is indeed a bug, s/he should:

-   File a JIRA ticket and assign priority (P0 - stop everything and fix this first, P1 - Need to fix this soon and ok if it happens sometime in the current sprint, P2 - Backlog). Update PRD if needed.

-   Work with the lead to get the product fixed

-   Once the changes are deployed to production, verify it once and notify the person who reported the bug.

#### 5. Collaboration Tools

**Goal: Ensure smooth, transparent, and structured collaboration throughout the project.**

Each project team at Better has a dedicated MS Teams workspace organized into channels with clear purposes and best practices. Please click [here](https://teams.microsoft.com/l/channel/19%3AnrFEZnY-fD1cT-cW2jIBwN2CsqsMSJjEa0laGwqWIz01%40thread.tacv2/tab%3A%3A72fc109c-5b38-499a-b9ff-53e6558901a4?context=%7B%22channelId%22%3A%2219%3AnrFEZnY-fD1cT-cW2jIBwN2CsqsMSJjEa0laGwqWIz01%40thread.tacv2%22%7D&tenantId=79836b2a-53cc-4854-81b4-ba2d7c9f2726) to read more. 

*Tools Overview*

1. Jira: JIRA: For task and ticket tracking
2. Confluence: For all product and project documentation
3. MS Teams/ Slack: For internal communication with the team and stakeholders

## Important Links:

#### 1. [PM Onboarding](/product-management/onboarding)
#### 2. [PRD Template](/product-management/PRD%20Template)
