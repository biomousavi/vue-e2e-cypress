/// <reference types="Cypress" />

import TextInput from './TextInput.vue'

describe('<TextInput />', () => {
  it('renders', () => {

    const label = 'First name'

    cy.mount(TextInput,{
      propsData:{
        label: label,
        isRequired:true
      }
    })

    cy.get('label').should('contain', label)

  })
})