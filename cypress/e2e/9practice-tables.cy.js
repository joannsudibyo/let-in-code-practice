Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  beforeEach(() => {
    cy.visit("/advancedtable");
  });

  let table = []

  it('correctly display the table entries', () => {
   cy.get('#advancedtable').find('tbody > tr').should('have.length', 5)
   cy.get('select').select('10')
   cy.get('#advancedtable').find('tbody > tr').should('have.length', 10)
  })


  it('selects the pagination', () => {
    cy.get('select').select('25')
    cy.get('#advancedtable').find('tbody > tr').should('have.length', 25)
    // click pagination 2
    cy.get('span').find('a').eq(1).click()
    cy.textInfo2()
    //click pagination first
    cy.get('#advancedtable_first').click()
    cy.textInfo1()
    //click pagination next
    cy.get('#advancedtable_next').click()
    cy.textInfo2()
    //click pagination previous
    cy.get('#advancedtable_previous').click()
    cy.textInfo1()
   })

it('displays the correct results upon search', () => {
    cy.get('input').type('Open University')
    cy.get('#advancedtable').find('tbody > tr').should('have.length', 1)
    cy.get('#advancedtable_info').should('have.text', 'Showing 1 to 1 of 1 entries (filtered from 47 total entries)')
})


it('sorts correctly', () => {
    cy.beforeSort().then((getText)=>{
        cy.log(getText)

    cy.get('.sorting').eq(1).click()
    cy.afterSort().then((text) => {
        expect(getText).to.not.deep.equal(text)
        cy.log(text[0])
    })
    })

      
})