import React from 'react'
import App from '../../src/App';
import { mount } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount
    (
      <MemoryRouter><App /></MemoryRouter>
    )
  })
})

