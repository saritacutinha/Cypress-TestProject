# Test Automation Challenge 🔄

## Description

Test Coding Challenge result for the following usecases using Cypress.io

1. Log In.
2. Sign Up
3. Watch Trailer

## Details

### 👣 Steps for running the test project.

1. Clone repository.
2. Run 'npm install'
3. Provide valid username and password in the login_username, login_password fields of config.js file.
4. npm run cy:open

## Reuirements

- Create a folder and file structure to run your tests --> Folder structure :
  --> Cypress > Integration > e2e > TestName.spec.js

- Add a script in your package.json file for kicking off your tests on the URLS specified.
  --> Done

- Create 8-10 tests for l(including one for playback) --> LogIn to Stan triggers 8-10 image validations.
  --> Logging in API required cookies and has expiry.
  --> Sent an Email for discussion.
- Create 2-5 tests for https://www.stan.com.au/watch/ --> Created 2 test cases
- Create 1-2 tests for https://www.stan.com.au/ signup page. --> Done.

- Also, add the following info to your README:

How did you decide on the structure and framework of your solution?
Considering the inputs given below and keeping in mind to keep any noise away from the Test files,

1. Created test fixtures for data.
2. Created config file for commonly used data like the URLs.
3. Divided the Web App into components and pages and created class for the same with functions so the functions could be reusable if needed.
4. Created Cypress commands for common functions.
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
