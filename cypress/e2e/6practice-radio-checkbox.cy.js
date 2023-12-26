Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/radio'); 
  });


it('checks the radio checkbox', () => {
    cy.get('.field label.label').first().should('have.text','Select any one')
    cy.get('#yes').check()
    cy.get('#yes').should('be.checked')
    cy.get('#no').should('not.be.checked')
})

it('confirms that one of the radio checkboxes is disabled', () => {
    cy.get('.field label.label').eq(4).should('have.text', 'Confirm last field is disabled')
    cy.get('#maybe').should('be.disabled')
})

it('checks the checkbox', () => {
    cy.get('.field label.label').eq(6).should('have.text','Accept the T&C')
    cy.get('input[type="checkbox"]').last().check()
    cy.get('.field .checkbox input[type="checkbox"]').should('be.checked')
})
