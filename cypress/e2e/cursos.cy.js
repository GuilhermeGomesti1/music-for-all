describe("Cursos testes", () => {
  beforeEach(() => {
    cy.visit("/cursos");
  });
  it("teste cursos", () => {
    cy.contains(
      /Nossos cursos de música são uma sinfonia de excelência e aprendizado/i
    );
    cy.getDataTest("subscribe-name").find("#nome").type("Guilherme");
    cy.getDataTest("subscribe-name").find("#email").type("guilherme@teste.com");
    cy.getDataTest("subscribe-name").find("#whatsapp").type("31986132070");
    cy.getDataTest("enviar-formulario").click();
  });
});
