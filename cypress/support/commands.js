// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'
import {faker} from '@faker-js/faker';

Cypress.Commands.add("textInfo1", () => {
    var text1 = 'Showing 1 to 25 of 47 entries'
    cy.get('#advancedtable_info').should('have.text', text1)
})
Cypress.Commands.add("textInfo2", () => {
    var text2 = 'Showing 26 to 47 of 47 entries'
    cy.get('#advancedtable_info').should('have.text', text2)
})

Cypress.Commands.add("beforeSort", () => {
    let array = []
    cy.get('tbody tr td:nth-child(2)').each(($cell) => {
        var getText = $cell.text().trim()
        array.push(getText)
    })
})

Cypress.Commands.add("afterSort", () => {
    let array = []
    cy.get('tbody tr td:nth-child(2)').each(($cell) => {
        var text  = $cell.text().trim()
        array.push(text)
    })
})


Cypress.Commands.add("fakerCommand", function(faker) {
    const fakerData = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return fakerData
})