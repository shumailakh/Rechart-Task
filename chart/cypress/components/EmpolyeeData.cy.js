import React from "react";
import EmpolyeeData from "../../src/components/EmpolyeeData";

describe("<EmpolyeeData />", () => {
  it("renders", () => {
    cy.mount(<EmpolyeeData />);
  });
});
