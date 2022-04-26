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

// create a command to add store in the app
Cypress.Commands.add('addStore', (name: string) => {
  cy.findByTestId('addStore').click();
  cy.findByTestId('storeName').type(name);

  captureStoreState(name);

  cy.findByTestId('addStoreButton').click();
});

Cypress.Commands.add('deleteStore', (name: string) => {
  const storeState = getStoreState();
  if (storeState.length === 0) return;

  cy.findByTestId(name).click();
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
