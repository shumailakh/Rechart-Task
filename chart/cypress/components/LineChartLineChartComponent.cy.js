import React from 'react'
import LineChartComponent from '../../src/components/Charts/LineChart'

describe('<LineChartComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LineChartComponent />)
  })
})