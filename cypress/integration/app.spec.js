it('App', () => {
  cy.visit('/');
  cy.contains('Open up App.tsx to start checking on your app!').should('be.visible');
});
