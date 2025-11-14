# JIRA - Task and Ticket Tracking

## Overview

JIRA is a project management and issue tracking tool used for task and ticket tracking throughout the product development lifecycle. As a Product Manager at Better, JIRA is your primary tool for managing work items, tracking progress, and maintaining transparency with the engineering team.

## Purpose

JIRA helps you:
- Break down PRD requirements into manageable technical tasks
- Track the status of work items throughout the sprint
- Maintain clear communication between PM, Engineering, Design, and QA teams
- Document bugs, defects, and feature requests
- Prioritize work based on business impact and urgency

## Key Use Cases

### 1. Creating and Managing User Stories

**When:** After PRD is finalized and solution is approved with engineering

**How to:**
- Create a new JIRA ticket for each major feature or user story
- Write clear acceptance criteria based on your PRD
- Link related tickets and dependencies
- Assign to the appropriate team member or leave unassigned for sprint planning

### 2. Breaking Down Work into Technical Tasks

**When:** During sprint planning meetings with Tech Lead

**How to:**
- Work with the team to identify technical subtasks required for each user story
- Add rough time estimates for each task

### 3. Bug and Defect Tracking

**When:** Bugs are reported by QA, customers, or team members

**How to:**
- File a JIRA ticket immediately
- Validate the behavior against the PRD to confirm it's a bug
- Assign priority level:
  - **P0:** Critical - Stop everything and fix this first
  - **P1:** High - Fix soon, acceptable in current sprint
  - **P2:** Low - Backlog item, can be addressed later
- Update PRD if the bug reveals missing requirements
- Assign to engineering team for resolution

### 4. Sprint Tracking and Status Updates

**When:** Throughout the sprint

**How to:**
- Monitor ticket status daily (To Do → In Progress → In Review → PM Review → Done)
- Update priority or scope if sprint dynamics change
- Use JIRA board to communicate sprint progress in daily standups
- Close tickets only when all acceptance criteria are met and tested

### 5. Feature Requests and Enhancements

**When:** Ongoing, from customers or internal stakeholders

**How to:**
- Log feature requests as JIRA tickets
- Prioritize and plan them into future sprints
- Link to related features or epics for better organization
- Keep backlog organized and visible to stakeholders

## Best Practices

### Ticket Naming and Description

Use the following format for ticket names:

#### Feature Ticket Format

**Title:** `Feature: Description`

**Description should include:**

1. **Define the feature** - What is the feature and why are we building it?
2. **User flow** - Tell the user steps/journey through the feature
3. **Acceptance Criteria** - What are the acceptance criteria for the feature?

**Example:**

```
Title: Feature: User Authentication via Google SSO

1. Define the feature:
   Allow users to sign up and login using Google credentials to provide a seamless authentication experience.

2. User flow:
   Step 1: User clicks "Sign Up with Google" button on login page
   Step 2: User is redirected to Google OAuth consent screen
   Step 3: User grants permission to access basic profile information
   Step 4: User is redirected back to the app and logged in
   Step 5: User dashboard is displayed with profile information pre-filled

3. Acceptance Criteria:
   - Google OAuth flow is successfully implemented
   - User can sign up using Google credentials
   - User can login using Google credentials
   - User profile is automatically populated from Google account
   - Error handling for failed OAuth is implemented
   - Feature works on desktop and mobile browsers
```

#### Bug Ticket Format

**Title:** `Bug: Description of bug`

**Description should include:**

1. **Description of bug** - What is broken?
2. **Steps to reproduce** - How can we reproduce the issue?
3. **Expected behaviour** - What should happen?

**Example:**

```
Title: Bug: Login page crashes on mobile

1. Description of bug:
   The login page crashes when users submit the login form on iOS devices.

2. Steps to reproduce:
   Step 1: Open the app on an iOS device
   Step 2: Navigate to the login page
   Step 3: Enter email and password
   Step 4: Tap the "Login" button
   Step 5: Page crashes with error message

3. Expected behaviour:
   User should be logged in and redirected to the dashboard without any errors.
```

**Guidelines:**
- Use clear, concise titles that describe the user story
- Include all required sections in the ticket description
- Reference the PRD in the ticket description
- Add any relevant context or customer feedback
- Attach screenshots or video recordings for bugs when possible

### Prioritization

- Regularly review and prioritize tickets with the team
- Use consistent priority labeling (P0, P1, P2, etc.)
- Adjust priorities based on sprint goals and customer impact
- Communicate priority changes to the team promptly

### Sprint Hygiene

- Ensure all sprint tasks are captured in JIRA before sprint planning
- Close completed tickets promptly after testing and verification
- Archive or move incomplete tasks to backlog at sprint exit
- Keep JIRA updated as the single source of truth for sprint status

### Collaboration

- Use JIRA comments to discuss approach and updates
- Mention team members using @mentions for visibility
- Link JIRA tickets in MS Teams when seeking feedback or updates
- Review JIRA board together during standup meetings

## JIRA Workflow at Better

```
To Do → In Progress → In Review → PM Review → Done
  ↓
(Optional: Blocked/On Hold)
```

**To Do:** Ticket is ready to be worked on  
**In Progress:** Team member is actively working on the ticket  
**In Review:** Work is complete and pending PM/QA review  
**PM Review:** PM has approved and ticket is ready for deployment   
**Done:** Ticket is tested, verified, and deployed to production  

---

For questions or help with JIRA workflow, reach out to your Tech Lead or Product Manager Lead.
