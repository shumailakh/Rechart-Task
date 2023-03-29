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
      <Login onChangeSpy={onChangeSpy} />
    </MemoryRouter>)
    cy.get('.p2').click({ multiple: true })

  })
  it('should type username and password', () => {

    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<MemoryRouter>
      <Login onChangeSpy={onChangeSpy} />
    </MemoryRouter>)
    cy.get('[type="text"]').type("shumaila")

    cy.get('[type="password"]').type("test")

  })
  it('should submit the form', () => {

    cy.mount(<MemoryRouter>
      <Login/>
    </MemoryRouter>)

   cy.get('button[type="submit"]').click();

  }) 
})
