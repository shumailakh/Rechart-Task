import React from "react";
import StudentCreateList from "../../src/components/StudentCreateList";
import { MemoryRouter } from "react-router-dom";
describe("<StudentCreateList />", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <StudentCreateList />
      </MemoryRouter>
    );
  });
  // it("renders", () => {
  //   // see: https://on.cypress.io/mounting-react
  //   cy.mount(
  //     <MemoryRouter>
  //       <StudentCreateList />
  //     </MemoryRouter>

  //   );

  // });
});
