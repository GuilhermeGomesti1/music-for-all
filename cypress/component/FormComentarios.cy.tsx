import FormComentarios from "@/app/components/FormComentarios";

const user = require("../../cypress/fixtures/example.json");
describe("FormComentarios aluno não autentificado", () => {
  beforeEach(() => {});

  it("Verifica renderização do componente com usuário não autenticado", () => {
    cy.mount(<FormComentarios />);
  });
});
