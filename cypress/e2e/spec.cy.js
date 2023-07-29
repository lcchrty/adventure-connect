describe("app loads at localhost address", () => {
  it("passes", () => {
    cy.visit("http://localhost:8080");
  });
});
