/// <reference types="Cypress" />

describe('Create event by using Store', () => {

  // to be only suit that runs
  it.only('Should dispatch create event directly from vuex store', () => {
    // navigate to home page
    cy.visit('/')

    cy.window().then(window => {
      cy.fixture('create-event.json').then(payload => {
        window.__app__.$store.dispatch("createEvent", payload)
      })
    })
  })

  it('Some other test siut', () => {
    console.log('hey');
  })


})