describe("Testes Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Contém o texto correto na home", () => {
    cy.getDataTest("subtitles-home").should(
      "contain.text",
      "Oferecemos uma ampla gama de"
    );
  });
});
