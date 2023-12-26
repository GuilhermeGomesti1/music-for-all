describe("Blog Page", () => {
  beforeEach(() => {
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

  it("Verificar o formulário de comentários", () => {
    cy.contains(/até o fim/i);
    //  cy.get(
    //  ':nth-child(2) > .styles_containerComentarios__YBCCL > [data-test="form-usuario-logado"] > .styles_submitButton__C5jh0'
    //  ).contains("not-be-visible");
    cy.get(
      ':nth-child(2) > .styles_containerComentarios__YBCCL > [data-test="form-usuario-logado"] > .styles_textareaInput__J1TcJ'
    ).type("testando comentários");
    cy.get(
      ':nth-child(2) > .styles_containerComentarios__YBCCL > [data-test="form-usuario-logado"] > .styles_submitButton__C5jh0'
    ).click();
    //cy.get(
    //  ':nth-child(2) > .styles_containerComentarios__YBCCL > [data-test="form-usuario-logado"] > .styles_submitButton__C5jh0'
    //).contains("be-visible");
  });

  // Adicione mais testes para outras funcionalidades, como curtir, excluir, etc.
});
