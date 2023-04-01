import React from "react";
import StudentEditProfile from "../../src/components/StudentEditProfile";
import { MemoryRouter } from "react-router-dom";
describe("<StudentEditProfile />", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <StudentEditProfile />
      </MemoryRouter>
    );
  });
  it("should enter details in all fields", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(
      <MemoryRouter>
        <StudentEditProfile onChangeSpy={onChangeSpy} />
      </MemoryRouter>
    );
    cy.get('[placeholder="Enter Id"]').should("be.disabled");
    cy.get('[placeholder="Enter username"]').type("shumaila");
    cy.get('[placeholder="Enter Mobile Number"]').type("8530456636");

    cy.get('[placeholder="Enter Email ID"]').type("test@gmail.com");
  });
  it("should submit the form", () => {
    cy.mount(
      <MemoryRouter>
        <StudentEditProfile />
      </MemoryRouter>
    );

    cy.get('button[type="submit"]').click();
  });
});
