import React from 'react'
import Charts from '../../src/components/Charts/Charts'

describe('<Charts />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Charts />)
  })
})