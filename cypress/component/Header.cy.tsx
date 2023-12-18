import { Header } from "@/app/components/Header";

describe("Verificar o Header", () => {
  it("playground", () => {
    cy.mount(<Header />);
    cy.getDataTest("logo-image").contains;
    cy.url().should("include", "/");
  });
});
