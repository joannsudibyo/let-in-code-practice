Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/alert'); 
  });


it('creates an alert when the button is clicked', () => {
    cy.get('#accept').click();
    cy.on('window:alert', (string) => {
        expect(string).to.equal('Hey! Welcome to LetCode')
    })
})

it('closes the window', () => {
  cy.get('#modern').click()
  cy.get('.card-content > .title').should('have.text','Modern Alert - Some people address me as sweet alert as well ')
  cy.get('.modal-close.is-large').click()
  cy.get('.container > .title').should('have.text',' Alert')
})