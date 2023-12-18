import { Footer } from "../../src/app/components/Footer";

describe("Verificar se contém o Footer", () => {
  it("Footer", () => {
    cy.mount(<Footer />);
    cy.getDataTest("footer-contains").contains(/Av.Wilson Alvarenga/i);
  });
});
