# Test Automation Challenge 🔄

## Description

-Created tests for Sign Up functionality, Log in(Till Captcha is encountered) and WatchTeaser page.
Provide valid log in id and password in the config.json file.

## Details

### 👣 Steps

- Install a test framework from below into the directory follow the specific framework README.md file to correctly install.

  - [Cypress](https://www.cypress.io/) --> Installed Cypress
  - [Playwright](https://playwright.dev/)

- Create a folder and file structure to run your tests --> Folder structure : Cypress > Tests > e2e > TestName.spec.js

- Add a script in your package.json file for kicking off your tests on the URLS specified. --> Done

- Create 8-10 tests for l(including one for playback) --> LogIn to Stan triggers 8-10 image validations.
  --> Logging in API required cookies and has expiry.
  --> Sent an Email for discussion.
- Create 2-5 tests for https://www.stan.com.au/watch/ --> Require front end code. Created basic test cases.
- Create 1-2 tests for https://www.stan.com.au/ signup page. --> Done.

- Also, add the following info to your README:

How did you decide on the structure and framework of your solution?
Considering the inputs given below and keeping in mind to keep any noise away from the Test files,

1. Created test fixtures for data.
2. Created config file for commonly used data like the URLs.
3. Divided the Web App into components and pages and created class for the same with functions so the functions could be reusable if needed.
4. Created Cyoress commands for common functions.
5. Maintained abstraction -in the tests.

Are there any improvements you could make to your submission?
Yes.
What would you do differently if you were allocated more time?

1. Create negative scenarios for the flow and using request() function to validate the response.
2. Create test cases for different view ports.
3. Put more thought in designing the framework.
4. Refactoring code

### 🏗 Structure

Create a file to hold your reusable selectors, simple example below:

```javascript
const SELECTORS = {
  LOGIN_EMAIL_INPUT: '[name="email"]',
  LOGIN_PASSWORD_INPUT: '[name="password"]',
};
```

Create a file to store your functions : created in "cypress\page-objects\pages"

```javascript
const checkLoginPage = () => {
  cy.get(selectors.LOGIN_EMAIL_INPUT);
  cy.get(selectors.LOGIN_PASSWORD_INPUT);
};
```

Comment your code! When writing a test cases please add comments to your code and why you would assert on specific areas of its deemed important.

### 🏆 Additional Challenges

- Adding additional browser support
- Typescript configuration
- Mock data
- API tests
- Reporting
