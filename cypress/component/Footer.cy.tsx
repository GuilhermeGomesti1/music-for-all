import { Footer } from "../../src/app/components/Footer";

describe("Verificar se contém o Footer", () => {
  it("Verificar Footer", () => {
    cy.mount(<Footer />);

    cy.getDataTest("contem-footer").contains(/Av.Wilson Alvarenga/i);
  });
});
