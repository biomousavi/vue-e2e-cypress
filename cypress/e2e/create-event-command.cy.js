/// <reference types="Cypress" />

describe('Create event', () => {

  it("Should Create a new Event", () => {

    const eventName = 'Sample Event'

    cy.createEvent(eventName)

    // Assert new event had been created
    cy.get('h2').should('have.text', 'Event Details')

    cy.get('ul li')
      .should('have.length', 7)
      .find('span.value')
      .should('contain', eventName)
  })

})