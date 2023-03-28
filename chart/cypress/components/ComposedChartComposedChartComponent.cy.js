import React from 'react'
import ComposedChartComponent from '../../src/components/Charts/ComposedChart'

describe('<ComposedChartComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ComposedChartComponent />)
  })
})