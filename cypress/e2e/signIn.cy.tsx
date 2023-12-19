describe("Testes signIn", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
  });
  it("Verificando signin", () => {
    cy.getDataTest("title-dashboard").should(
      "contain.text",
      "Área de Login- Escola de Música Music For All"
    );

    cy.getDataTest("form-login").find("input").as("subscribe-input");

    cy.getDataTest("email-input").type("guilherme@teste.com");
    cy.getDataTest("senha-input").type("123123");
    cy.getDataTest("login-button").click();
    cy.wait(3000);
    cy.contains(/Clique aqui para acessar o seu conteúdo exclusivo/i).should(
      "be.visible"
    );
    cy.getDataTest("span-logado").click();
  });
});
