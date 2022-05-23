/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

const STORE_NAME = 'Test Store';

describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  after(() => {
    cy.deleteStore(STORE_NAME);
  });

  it('should create a store with given name', () => {
    cy.addStore(STORE_NAME);
    cy.findAllByTestId(STORE_NAME).first().scrollIntoView().should('have.text', STORE_NAME);
  });

  it('should have the default navbar menu', () => {
    cy.findByRole('tablist').within(() => {
      cy.findByText('Store').should('exist');
      cy.findByText('Search').should('exist');
      cy.findByText('Cart').should('exist');
    });
  });
});
