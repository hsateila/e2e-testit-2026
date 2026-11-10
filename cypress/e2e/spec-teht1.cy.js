/// <reference types="cypress" />

describe('Testataan wikipediaa', () => {
  it('clicks type and shows the right headings', () => {
    cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');

    cy.wait(3000);

    /* cy.contains('Haku').click(); */

    cy.get('#p-search > a').click();

    cy.get(
      '#searchform > div > div > div.cdx-text-input.cdx-text-input--has-start-icon.cdx-text-input--status-default.cdx-search-input__text-input > input',
    ).type('Jamk');

    cy.get('#searchform > div > button').click();

    /* cy.wait(3000);

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com'); */
  });
});
