import React from 'react'
import AreaChartComponent from '../../src/components/Charts/AreaCharts'

describe('<AreaChartComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AreaChartComponent />)
  })
})