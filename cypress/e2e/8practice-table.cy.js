Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
import { faker } from "@faker-js/faker";

beforeEach(() => {
  cy.visit("/table");
});

// it('calculates the total correctly', () =>{
//   let sum = 0
//   cy.get('tbody td').each(($td) => {
//     var getPrice = $td.text().trim()
//     var pricing = parseInt(getPrice,10)
//     if(!isNaN(pricing)){
//       sum += pricing
//     }
//   }).then(() => {
//     expect(sum).to.equal(858)
//     cy.get('tfoot > :nth-child(2)').should('have.text', sum)
//   })
// })


it('checks the students checkbox attendance', () => {
let array = []
 cy.get('#simpletable tbody tr td:nth-child(2)').each(($td) => {
  const arrays = $td.text().trim()
  array.push(arrays)

  array.map((names) => {
    if(names === 'Raj'){
    const index = array.indexOf('Raj') +1
    const check = cy.get(`tbody > :nth-child(${index}) > :nth-child(4) [type="checkbox"]`)
    check.check()
    }
  })

  
 })

 // cy.get('tbody > :nth-child(2) > :nth-child(4) input[type="checkbox"]').check().should('be','checked')
 
  
 
})


// it('sorts the table', () => {

//   let beforeSorting = []
//   let afterSorting = []

//   cy.get('.mat-sort.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth tr').each(($tr) => {
//     var getText = $tr.text().trim()
//     var removeNumber = getText.replace(/[0-9]/g, '')
//     beforeSorting.push(removeNumber)
//   })

//   cy.get('.mat-sort-header.ng-tns-c30-0 > .mat-sort-header-container').click()
  
//   cy.get('.mat-sort.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth tr').each(($tr) => {
//     var getText = $tr.text().trim()
//     var removeNumber = getText.replace(/[0-9]/g, '')
//     afterSorting.push(removeNumber)
//   }).then(() => {
//     expect(beforeSorting).to.not.deep.equal(afterSorting)
//   })

// })
