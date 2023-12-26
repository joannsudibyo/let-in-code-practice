/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/buttons'); 
  });


it('the button goes to home and clicks back', () => {
    cy.get('#home').click();
    cy.go('back')
    cy.get('.title').should('have.text', 'Button')
})

it('verifies that the button is disabled', () => {
    cy.get('#isDisabled').should('be.disabled')
})



