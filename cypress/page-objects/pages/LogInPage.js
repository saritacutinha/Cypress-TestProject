import BasePage from "../BasePage";

export default class LogInPage extends BasePage {
  static displayLogInPageTitle() {
    cy.contains("h2", "Log in to Stan");
  }

  static signUpNowLink() {
    cy.contains("Sign up now").should("have.attr", "href", "/?intent=register");
  }

  static forgotPasswordLink() {
    cy.contains("Forgot your password?").should(
      "have.attr",
      "href",
      "/?intent=requestResetPassword"
    );
  }

  static loginWithoutEmail() {
    cy.get(".modal__form").within(() => {
      cy.get('input[name="email"]').type("{enter}");
      cy.get("div.-error")
        .first()
        .should("contain", "Email Address cannot be blank.");
    });
  }

  static loginWithoutPassword() {
    cy.get(".modal__form").within(() => {
      cy.get('input[name="email"]').type("{selectall}abc@gmail.com");
      cy.get('input[name="password"]').type("{enter}");
      cy.get("div.-error")
        .first()
        .should("contain", "Password cannot be blank.");
    });
  }

  static login(username, password) {
    cy.login(username, password);
  }
}
