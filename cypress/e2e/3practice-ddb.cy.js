Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/dropdowns'); 
  });


  it('selects apple',() => {
    cy.get('#fruits').select('Apple')
    cy.get('#fruits').should('have.value',0)
  })

  it('prints my selection', () => {
    cy.get('#superheros').select('am')
    cy.get('p.subtitle').should('have.text','You have selected Ant-Man')
  })

it('selects programming language', () => {
    cy.get('#lang').select('Python')
})

it('selects India as a country and prints in the log', () => {
    cy.get('#country').select('India')
    cy.log('.select.id-rounded')
})