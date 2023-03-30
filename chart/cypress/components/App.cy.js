import React from "react";
import App from "../../src/App";
import { MemoryRouter } from "react-router-dom";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
