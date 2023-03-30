import React from "react";
import Register from "../../src/pages/Register";
import { MemoryRouter } from "react-router-dom";
describe("<Register />", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
  });
  it("clicking + fires a change event with the submit value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(
      <MemoryRouter>
        <Register onChangeSpy={onChangeSpy} />
      </MemoryRouter>
    );
    cy.get("button").click({ multiple: true });
  });
  it("should enter details in all fields", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(
      <MemoryRouter>
        <Register onChangeSpy={onChangeSpy} />
      </MemoryRouter>
    );
    cy.get('[placeholder="Enter username"]').type("shumaila");
    cy.get('[placeholder="Enter Mobile Number"]').type("8530456636");
    cy.get('[placeholder="Enter password"]').type("test");
    cy.get('[placeholder="Enter Email ID"]').type("test@gmail.com");
  });
  it("should submit the form", () => {
    cy.mount(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    cy.get('button[type="submit"]').click();
  });
});
