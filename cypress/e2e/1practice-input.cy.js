Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(() => {
    cy.visit('/edit'); 
    cy.get('label[for="name"]').as('nameLabel');
  });

  it('answers the First Question', () => {
   // cy.get('@nameLabel').first().should('have.text','Enter your full Name')
    cy.get('#fullName').type('Jon Doe')
    cy.get('#fullName').should('have.value', 'Jon Doe');
  });

  it('answers the Second Question', () => {
    cy.get('@nameLabel').eq(1).should('have.text','Append a text and press keyboard tab')
    cy.get('@nameLabel').eq(1).trigger('keydown', { key: 'Tab' });
    cy.get('#getMe').focus().should('have.value','ortonikc')
  });

  it('answers the Third Question', () => {
    cy.get('@nameLabel').eq(2).should('have.text','What is inside the text box')
    cy.get('#getMe').should('have.value','ortonikc')
  });

  it('answers the Fourth Question',() => {
    cy.get('@nameLabel').eq(3).should('have.text', 'Clear the text')
    cy.get('#clearMe').clear()
    cy.get('#clearMe').should('be.empty')
  })

  it('answers the Fifth Question',() => {
    cy.get('@nameLabel').eq(4).should('have.text', 'Confirm edit field is disabled')
    cy.get('#noEdit').should('be.disabled')
  })

  it('answers the Sixth Question', () => {
    cy.get('@nameLabel').eq(5).should('have.text','Confirm text is readonly')
    cy.get('#dontwrite').should('have.attr','readonly')
  })