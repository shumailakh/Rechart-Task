describe("template spec", () => {
  it("Visit Dashboard Url", () => {
    cy.visit("http://172.27.232.169:3000/dashboard");
    cy.get(".left").should("have.text", "School Management");
    cy.get(".grid-item__title")
      .should("be.visible")
      .and((AreaChart) => {
        expect(AreaChart.width()).to.be.greaterThan(200);
      });
  });
});
