describe("Testes em outra página", () => {
  beforeEach(() => {
    cy.checkAuthAndNavigate();
  });
  it("", () => {
    cy.visit("/videoaulas");
  });
});
