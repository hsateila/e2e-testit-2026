/// <reference types="cypress" />

describe('Miun ensimmäinen testi', () => {
  it('clicks type and shows the right headings', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('a', /^type$/)
      .should('be.visible')
      .click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .should('be.visible')
      .and('be.enabled')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
