describe("template spec", () => {
  it("Visit Create New Profile Url", () => {
    cy.visit("http://172.27.232.169:3000/StudentCreate");
    cy.get('[placeholder="Enter username"]').type("shumaila");
    cy.get('[placeholder="Enter Mobile Number"]').type("8530456636");

    cy.get('[placeholder="Enter Email ID"]').type("test@gmail.com");
  });
  it("Visit Create New Profile List Url", () => {
    cy.visit("http://172.27.232.169:3000/StudentCreateList");
  });
});
