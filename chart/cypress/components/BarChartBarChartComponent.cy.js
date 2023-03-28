import React from 'react'
import BarChartComponent from '../../src/components/Charts/BarChart'

describe('<BarChartComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BarChartComponent />)
  })
})