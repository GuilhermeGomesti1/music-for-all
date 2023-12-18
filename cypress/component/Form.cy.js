import { Form } from "../../src/app/components/Form";
describe("Form.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<Form />);
    cy.getDataTest("subscribe-name").contains(/gostaria de mais informações/i);
    cy.getDataTest("subscribe-name").find("#nome").type("Guilherme");
    cy.getDataTest("subscribe-name").find("#email").type("guilherme@teste.com");
    cy.getDataTest("subscribe-name").find("#whatsapp").type("31986132070");
    cy.getDataTest("enviar-formulario").click();
  });
});
