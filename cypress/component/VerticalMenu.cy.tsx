import { VerticalMenu } from "@/app/components/VerticalMenu";

describe("Verificar o Header", () => {
  it("playground", () => {
    cy.viewport(1024, 768);
    cy.mount(<VerticalMenu />);
    cy.getDataTest("vertical-menu").contains("Siga-nos");
  });
});
