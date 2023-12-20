import FormComentarios from "@/app/components/FormComentarios";

const user = require("../../cypress/fixtures/example.json");
describe("FormComentarios.cy.tsx", () => {
  beforeEach(() => {
    cy.signIn();
  });

  it("Verifica renderização do componente com usuário autenticado", () => {
    cy.mount(<FormComentarios />);
    cy.getDataTest("form-usuario-logado").type("a");
  });
});
