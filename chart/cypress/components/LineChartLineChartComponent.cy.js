import React from "react";
import LineChartComponent from "../../src/components/Charts/LineChart";

describe("<LineChartComponent />", () => {
  it("renders", () => {
    cy.mount(<LineChartComponent />);
  });
});
