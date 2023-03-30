import React from "react";
import Login from "../../src/pages/Login";
import { MemoryRouter } from "react-router-dom";
describe("<Login />", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it("should type username and password", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(
      <MemoryRouter>
        <Login onChangeSpy={onChangeSpy} />
      </MemoryRouter>
    );
    cy.get('[type="text"]').type("shumaila");

    cy.get('[type="password"]').type("test");
  });
  it("should submit the form", () => {
    cy.mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    cy.get('button[type="submit"]').should('be.disabled')

  });
});
