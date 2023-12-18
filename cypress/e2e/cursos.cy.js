describe("Cursos testes", () => {
  beforeEach(() => {
    cy.visit("/cursos");
  });
  it("teste cursos", () => {
    cy.contains(
      /Nossos cursos de música são uma sinfonia de excelência e aprendizado/i
    );
  });
});
