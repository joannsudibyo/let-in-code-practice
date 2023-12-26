Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

beforeEach(() => {
  // Code to run before each test
  cy.visit('https://petbarn.com.au'); 
});

it('It displays the correct navbar', () => {
  cy.get('[data-role="od-nav-holder"]').should('contain', 'Dog');
  cy.get('[data-role="od-nav-holder"]').should('contain', 'Cat');
  cy.get('[data-role="od-nav-holder"]').should('contain', 'Other Pets');
  cy.get('[data-role="od-nav-holder"]').should('contain', 'Vet');
  cy.get('[data-role="od-nav-holder"]').should('contain', 'Services');
});

it('Hovering one of the navbar should update the menu', () => {
  cy.get('[data-role="od-nav-holder"]').trigger('mouseover',{force:true});
  cy.get('[data-role="od-nav-items"]').should('be.visible');
});
