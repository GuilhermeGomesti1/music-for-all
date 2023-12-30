describe("Testando acesso e funções de comentários para aréa de blog com um uśuario autentificado", () => {
  beforeEach(() => {
    cy.checkAuthAndNavigate();
    cy.intercept(
      "POST",
      "https://www.youtube.com/youtubei/v1/log_event?alt=json&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"
    ).as("getStories");
    cy.intercept(
      "POST",
      "https://play.google.com/log?format=json&hasfast=true&authuser=0"
    ).as("getStories");

    cy.intercept(
      "GET",
      "http://localhost:3000/_next/static/webpack/c248d5983f521f30.webpack.hot-update.json"
    ).as("getStories");
    cy.intercept(
      "GET",
      "https://googleads.g.doubleclick.net/pagead/id?slf_rd=1"
    ).as("getStories");

    cy.visit("/palcovirtual");
    cy.wait("@getStories");

    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("Verificando o envio de um comentário", () => {
    cy.contains(/até o fim/i);

    cy.get(
      ':nth-child(2) > .styles_containerComentarios__YBCCL > [data-test="form-usuario-logado"] > .styles_textareaInput__J1TcJ'
    ).type("testando comentários");
    cy.get(
      ':nth-child(2) > .styles_containerComentarios__YBCCL > [data-test="form-usuario-logado"] > .styles_submitButton__C5jh0'
    ).click();
    cy.getDataTest("res-button-comment").click();
    cy.getDataTest("textAreaResposta").type("respondendo comentário");
    cy.getDataTest("button-enviar-resposta").click();
    cy.getDataTest("res-confirm").contains(/Resposta de/i);
  });

  // Adicione mais testes para outras funcionalidades, como curtir, excluir, etc.
});
