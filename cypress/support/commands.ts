/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      numResults(): Chainable<any>;
      numResults(text: string): Chainable<number>;
    }
  }

// Custom command to get the numerical value from a text content
Cypress.Commands.add('numResults', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject) // takes the element as an input then turns it into a new subject to be chainable
    .invoke('text')
    .then((text) => {
      const numericalPart = text.replace(/[^0-9]/g, ''); // remove all non-numeric characters form the text
      return parseFloat(numericalPart); // change the numerical part of the string to a float-pointing number
    });
})