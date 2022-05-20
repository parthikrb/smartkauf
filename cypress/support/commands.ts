/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';
import { captureStoreState, getStoreState } from './utils';

Cypress.on('uncaught:exception', (error, runnable, promise) => {
  // when the exception originated from an unhandled promise
  // rejection, the promise is provided as a third argument
  // you can turn off failing the test in this case
  if (promise) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});

// create a command to add store in the app
Cypress.Commands.add('addStore', (name: string) => {
  cy.findByTestId('addStore').click();
  cy.findByTestId('storeName').type(name);
  cy.findByTestId('addStoreButton').click();

  captureStoreState(name);
});

Cypress.Commands.add('deleteStore', (name: string) => {
  const storeState = getStoreState();
  if (storeState.length === 0) return;

  cy.findAllByTestId(name).first().click();
  cy.findByTestId('deleteStore').click();
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      addStore(name: string): Chainable<Element>;
      deleteStore(name: string): Chainable<Element>;
    }
  }
}
