import React from "react";
import Dashboard from "../../src/pages/Dashboard";

describe("<Dashboard />", () => {
  it("renders", () => {
    cy.mount(<Dashboard />);
  });
});
