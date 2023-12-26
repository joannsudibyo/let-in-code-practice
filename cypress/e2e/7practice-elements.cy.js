Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/elements'); 
  });


it('finds a user in github through the search bar', () => {
  cy.findByPlaceholderText('Enter your git user name eg., ortonikc').type('testing-library')
  cy.get('#search').click()
  cy.wait(2000)
  cy.get('.media-content > .title').should('have.text','Testing Library')
  cy.get('.media-content > span').should('have.text','The home for all testing-library projects')
})


