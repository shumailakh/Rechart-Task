import React from 'react'
import Login from '../../src/pages/Login'
import { MemoryRouter } from 'react-router-dom'
describe('<Login />', () => {

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MemoryRouter>
      <Login />
    </MemoryRouter>)
  })

  it('clicking + fires a change event with the submit value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<MemoryRouter>
      <Login onChangeSpy={onChangeSpy}/>
    </MemoryRouter>)
    cy.get('.p2').click({ multiple: true })
    
  })
})