import React from "react";
import ComposedChartComponent from "../../src/components/Charts/ComposedChart";

describe("<ComposedChartComponent />", () => {
  it("renders", () => {
    cy.mount(<ComposedChartComponent />);
  });
});
