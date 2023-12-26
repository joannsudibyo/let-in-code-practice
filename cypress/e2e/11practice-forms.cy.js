Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  beforeEach(() => {
    cy.visit("/forms");
  });

  it('fills in the forms', () => {
    cy.get('#firstname').type('John')
    cy.get('#lasttname').type('Doe')
    cy.get('[placeholder="Email input"]').clear().type('johndoe@mail.com')
    cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .select > select').select('Australia (+61)')
    cy.get('[placeholder="Phone Number"]').type('1234567890')
    cy.get('#Addl1').type('P. Sherman')
    cy.get('#Addl2').type('42 Wallaby Way, Sydney!')
    cy.get('#state').type('Sydney')
    cy.get('#postalcode').type('2000')
    cy.get(':nth-child(5) > :nth-child(2) > .field > .control > .select > select').select('Australia')
    cy.get('#Date').click().type('2023-12-23')
    cy.get(':nth-child(6) > :nth-child(2) > .field > .control > :nth-child(1)').click()
    cy.get('[type="checkbox"]').click()
  })