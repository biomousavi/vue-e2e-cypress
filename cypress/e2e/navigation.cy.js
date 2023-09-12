/// <reference types="Cypress" />

describe('Navigation', () => {
  it('Should have events list that navigates to event page', () => {

    // Navigate to home page
    cy.visit('/')

    // check events list link is visible
    cy.get("a[href='/events-list']").should('be.visible')

    // click on events link
    cy.get("a[href='/events-list']").click()

    // check event page is open
    cy.get('h2').contains('Events List').should('be.visible')
  })

  
})