/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add("getDataTest", (dataTestSelector: string) => {
  return cy.get(`[data-test="${dataTestSelector}"]`);
});

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

  cy.visit("/videoaulas");
});
