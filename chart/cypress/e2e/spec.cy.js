describe("Register spec", () => {
  it("successfully loads", () => {
    cy.visit("http://172.27.232.169:3000");
    cy.get('[placeholder="Enter username"]').type("shumaila");
    cy.get('[placeholder="Enter Mobile Number"]').type("8530456636");
    cy.get('[placeholder="Enter password"]').type("test");
    cy.get('[placeholder="Enter Email ID"]').type("test@gmail.com");
    cy.get("button").contains("button", "Submit").click();

    cy.get(".p2").click({ multiple: true });
    cy.visit("http://172.27.232.169:3000/login");
  });
});
