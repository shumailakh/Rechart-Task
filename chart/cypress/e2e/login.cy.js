describe("template spec", () => {
  it("Enter Details", () => {
    cy.visit("http://172.27.232.169:3000/login");

    cy.get("#title").should("have.text", "Enter Login Details");
    cy.get("input[name=username]").type("text");

    cy.get("input[name=password]").type("password");
    
  });
  it("Visit Dashboard Url", () => {
    cy.visit("http://172.27.232.169:3000/dashboard");
  });
});
