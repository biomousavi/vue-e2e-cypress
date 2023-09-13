/// <reference types="Cypress" />

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


Cypress.Commands.add('createEvent', (eventName)=>{
  cy.request('POST', "api/event", {
    name: eventName,
    venue: 'Venueee',
    date: '2025-6-11',
    time: '12:00AM',
    ticketQuantity: 100,
    isCancelled: false,
    image: './assets/event-1.jpg'
  }).then(response => {
    cy.visit(`event/${response.body._id}`)
  })
})