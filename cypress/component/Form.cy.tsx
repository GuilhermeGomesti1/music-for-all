import { Form } from "../../src/app/components/Form";
describe("Verificar se o form está sendo preenchido e enviado", () => {
  it("form test", () => {
    cy.mount(<Form />);
    cy.getDataTest("form-contato-whatsapp").contains(
      /gostaria de mais informações/i
    );
    cy.getDataTest("form-contato-whatsapp").should("have.value", "");
    cy.getDataTest("form-contato-whatsapp")
      .find("#nome")
      .should("have.value", "");
    cy.getDataTest("form-contato-whatsapp").find("#nome").type("Guilherme");
    cy.getDataTest("form-contato-whatsapp")
      .find("#nome")
      .should("not.have.value", "");

    cy.getDataTest("form-contato-whatsapp")
      .find("#email")
      .should("have.value", "");
    cy.getDataTest("form-contato-whatsapp")
      .find("#email")
      .type("guilherme@teste.com");
    cy.getDataTest("form-contato-whatsapp")
      .find("#email")
      .should("not.have.value", "");
    cy.getDataTest("form-contato-whatsapp")
      .find("#whatsapp")
      .should("have.value", "");
    cy.getDataTest("form-contato-whatsapp")
      .find("#whatsapp")
      .type("31986132070");
    cy.getDataTest("form-contato-whatsapp")
      .find("#whatsapp")
      .should("not.have.value", "");
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.getDataTest("enviar-formulario").click();

    cy.getDataTest("form-contato-whatsapp").should("have.value", "");
  });
});
