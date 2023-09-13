/// <reference types="Cypress" />

describe('Create event', () => {

  it("Should Create a new Event", () => {

    const eventName = 'Sample Event'

    cy.request('POST', "api/event",{
      name: eventName,
      venue: 'Venueee',
      date: '2025-6-11',
      time: '12:00AM',
      ticketQuantity:100,
      isCancelled:false,
      image: './assets/event-1.jpg'
    }).then(response =>{
      cy.visit(`event/${response.body._id}`)
    })

    // Assert new event had been created
    cy.get('h2').should('have.text', 'Event Details')

    cy.get('ul li')
    .should('have.length', 7)
    .find('span.value')
    .should('contain', eventName)
  })

})