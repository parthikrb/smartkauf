it('App', () => {
  cy.visit('/');
  cy.contains('Store').should('be.visible');
  cy.contains('Search').should('be.visible');
  cy.contains('Cart').should('be.visible');
});
