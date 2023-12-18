/// <reference types="cypress" />
declare module "*.mp3" {
  const value: string;
  export default value;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    getDataTest(dataTestSelector: string): Chainable<JQuery<HTMLElement>>;
  }
}
