/// <reference types="Cypress" />

describe('Create event',()=>{

  it("Should Create a new Event", ()=>{

    // navigate to home page
    cy.visit('/')

    // go to create event form
    cy.get('[href="/create-event"]').should('be.visible').click()
      // cy.contains('CREATE EVENT').should('be.visible')
      
    // fill-in the form
    cy.get('#event-name').type('Happy music Event')
    cy.get('#event-venue').type('Just a Normal Place')
    cy.get('#event-date-day').select('12')
    cy.get('#event-date-month').select('5')
    cy.get('#event-date-year').select('2024')
    cy.get('#ticket-quantity').type('100')
    cy.get('textarea[name="event-notes"]').type('just a long text for text area')
    cy.get('input[name="event-image"]').check('./assets/event-3.jpg',{force:true})

    // submit the for
    cy.get('#create-btn').click()

    // Assert new event had been created
    cy.contains('EVENT DETAILS').should('be.visible')

  })


})