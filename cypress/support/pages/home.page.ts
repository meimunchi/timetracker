// <reference types="cypress" />

export class HomePage {
  baseUrl = 'http://localhost:4200/';

  go(): void {
    cy.visit(this.baseUrl);
  }

  emailAddress(): Cypress.Chainable {
    return cy.get('[data-test-id=email-input]')
  }

  password(): Cypress.Chainable{
    return cy.get('[data-test-id=password-input]')
  }

  login(): Cypress.Chainable {
    return cy.get('[data-test-id=login-button]')
  }
}
