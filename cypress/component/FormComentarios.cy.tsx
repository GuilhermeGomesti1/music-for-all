import FormComentarios from "@/app/components/FormComentarios";

describe("FormComentarios aluno não autentificado", () => {
  beforeEach(() => {});

  it("Verifica renderização do componente com usuário não autenticado", () => {
    cy.mount(<FormComentarios />);
  });
});
