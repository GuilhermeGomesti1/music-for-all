// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/react18";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      getDataTest(dataTestSelector: string): Chainable<JQuery<HTMLElement>>;
      signIn: () => void;
      checkAuthAndNavigate(): void;
    }
  }
}
Cypress.Commands.add("signIn", () => {
  cy.visit("/dashboard");
  cy.getDataTest("title-dashboard").should(
    "contain.text",
    "Área de Login- Escola de Música Music For All"
  );

  cy.getDataTest("form-login").find("input").as("subscribe-input");

  cy.getDataTest("email-input").type("guilherme@teste.com");
  cy.getDataTest("senha-input").type("123123");
  cy.getDataTest("login-button").click();

  cy.contains(/Clique aqui para acessar o seu conteúdo exclusivo/i).should(
    "be.visible"
  );
  Cypress.env("isAuthenticated", true);
});

Cypress.Commands.add("checkAuthAndNavigate", () => {
  const isAuthenticated = Cypress.env("isAuthenticated");

  if (!isAuthenticated) {
    cy.signIn();
  }
});
Cypress.Commands.add("mount", mount);

Cypress.Commands.add("getDataTest", (dataTestSelector: string) => {
  return cy.get(`[data-test="${dataTestSelector}"]`);
});

// Example use:
// cy.mount(<MyComponent />)
