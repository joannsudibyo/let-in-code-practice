//this only works if you download the iframe package

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/frame'); 
  });


it('enters First name input', () => {
    cy.get('.field label.label').first().should('have.text','First Name')
    cy.get('input[name="fname"]').type('John').should('have.value','John')
})

it('enters Last name input', () => {
    cy.get('.field label.label').eq(1).should('have.text', 'Last Name')
    cy.get('input[name="lname"]').type('Doe').should('have.value','Doe')
})

it('enters Email input', () => {
    cy.get('.field label.label').last().should('have.text','Email')
    cy.get('input[name="email"]').type('johndoe@email.com').should('have.value','johndoe@email.com')
})