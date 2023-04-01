import React from "react";
import StudentDetail from "../../src/components/StudentDetail";

describe("<StudentDetail />", () => {
  it("renders", () => {
    cy.mount(<StudentDetail />);
  });
  it("should enter details in all fields", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<StudentDetail onChangeSpy={onChangeSpy} />);
    cy.get('[placeholder="Enter username"]').type("shumaila");
    cy.get('[placeholder="Enter Number"]').type("8530456636");

    cy.get('[placeholder="Enter Email"]').type("test@gmail.com");
  });
});
