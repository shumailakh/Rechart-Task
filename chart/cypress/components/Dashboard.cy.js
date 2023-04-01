import React from "react";
import Dashboard from "../../src/pages/Dashboard";
import { MemoryRouter } from "react-router-dom";
describe("<Dashboard />", () => {
  it("renders", () => {
    cy.mount( <MemoryRouter>
      <Dashboard />
    </MemoryRouter>);
    
  });
  
});
