/// <reference types="Cypress" />

describe('Intercept Events', () => {

  before(() => {
    cy.intercept('GET', '/api/event', {
      fixture: 'events-list.json'
    }).as('interceptedEvents')
    


    // OR Loading fixture firt, that we can also modify fixture

    // cy.fixture('events-list.json').then((eventsList) => {
    //   cy.intercept('GET', '/api/event', {
    //     body: eventsList
    //   }).as('interceptedEvents')
    // })
  })

  it("Should Intercept /api/event API", () => {
    cy.visit('/');
    cy.wait('@interceptedEvents')
  })
})