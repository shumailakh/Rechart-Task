describe("template spec", () => {

  it.only('starts with zero items (fixture)', () => {
    // stub route `GET /user`, return data from fixture file
    // THEN visit the page
    cy.intercept('GET', 'http://localhost:8000/user', { fixture: 'db.json' }).as('user')
    cy.visit('http://172.27.232.169:3000/dashboard')
    cy.wait('@user').then(interception => {
      expect(interception).to.be.an('object')
      expect(interception.request.url).to.match(/\/user$/)
    })
  })
  it("Visit Dashboard Url", () => {
    
    cy.get(".left").should("have.text", "School Management");
    cy.get(".grid-item__title")
      .should("be.visible")
      .and((AreaChart) => {
        expect(AreaChart.width()).to.be.greaterThan(200);
      });
  });
});
