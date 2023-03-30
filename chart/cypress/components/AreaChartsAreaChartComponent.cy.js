import React from "react";
import AreaChartComponent from "../../src/components/Charts/AreaCharts";

describe("<AreaChartComponent />", () => {
  it("renders", () => {
    cy.mount(<AreaChartComponent />);
  });
});
