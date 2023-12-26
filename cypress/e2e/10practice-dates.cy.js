Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  beforeEach(() => {
    cy.visit("/calendar");
  });

  it('selects the right date and time', () => {
    cy.get('.datetimepicker-dummy-input.is-datetimepicker-range').click()
    cy.get('.datetimepicker.is-primary.is-datetimepicker-default.is-active button').contains('button', '14').click();
    cy.get('.datetimepicker.is-primary.is-datetimepicker-default.is-active button').contains('button', '23').click();
    cy.get('.datepicker-nav-month').first().invoke('text').then((month) => {
        cy.get('.datepicker-nav-year').first().invoke('text').then((year) => {
          var getMonth = month.trim().substring(0,3)
          var getYear = year.trim()
            cy.log(getMonth)
            cy.get(':nth-child(3) > p').should('have.text', `You have selected from 14-${getMonth}-${getYear} to 23-${getMonth}-${getYear} `)
        })
    })
})


