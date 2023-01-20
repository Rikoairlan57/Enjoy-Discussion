// - scenario testing e2e login

// - correctly displays the login page
// - displays an alert when the email input is empty
// - displays an alert when the password input is empty
// - displays an alert when email and password are wrong
// - should display the homepage if the email input and password input have been entered correctly

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("correctly displays the login page", () => {
    cy.get('input[placeholder="Email"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("displays an alert when the email input is empty", () => {
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it("displays an alert when the password input is empty", () => {
    cy.get('input[placeholder="Email"]').type("test@email.com");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it("displays an alert when email and password are wrong", () => {
    cy.get('input[placeholder="Email"]').type("test@email.com");

    cy.get('input[placeholder="Password"]').type("wrong_password");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("email or password is wrong");
    });
  });

  it("should display the homepage if the email input and password input have been entered correctly", () => {
    cy.get('input[placeholder="Email"]').type("test@email.com");

    cy.get('input[placeholder="Password"]').type("test123456");

    cy.get("button")
      .contains(/^Login$/)
      .click();
  });
});
