# Guild Education - Quality Engineer Project - Kimberly L. Sawh

The purpose of these cypress tests is to check on a couple end-to-end functionality of “Filter Pills” feature on the target.com search results page.

### How to run these tests:

Prerequisite: Node.js and Cypress are installed on your system. 
Note: The node version used during the creation of this project is v16.13.0

1. Using Visual Studio Code Open the "Guild-Project"
2. Open a new terminal within VS Code
3. Run: nvm use v16.13.0
4. Run: npx cypress open
5. Select E2E Testing
6. Select Chrome then select "Start E2E Testing in Chrome" button
7. Choose the "filterpills-test.cy.ts" file

To run the test headless do the following:
1. Open a new terminal
2. Navigate to the "Guild-Project" folder
3. Run: npx cypress run --spec cypress/e2e/filterpills-test.cy.ts --headless
