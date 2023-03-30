import React from "react";
import BarChartComponent from "../../src/components/Charts/BarChart";

describe("<BarChartComponent />", () => {
  it("renders", () => {
    cy.mount(<BarChartComponent />);
  });
});
