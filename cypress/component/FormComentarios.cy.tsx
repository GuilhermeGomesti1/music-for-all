import FormComentarios from "@/app/components/FormComentarios";

const user = require("../../cypress/fixtures/example.json");
describe("FormComentarios.cy.tsx", () => {
  beforeEach(() => {});

  it("Verifica renderização do componente com usuário autenticado", () => {
    cy.mount(<FormComentarios />);
  });
});
