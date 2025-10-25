import { Given, When, Then } from "@cucumber/cucumber";

Given("the user is on the registration page", async function () {
  await this.registrationPage.navigateToRegistration();
});

When(
  "the user fills the registration form with valid details",
  async function () {
    await this.registrationPage.fillRegistrationForm();
  }
);

When("clicks the register button", async function () {
  await this.registrationPage.clickRegisterButton();
});

Then("the user should be redirected to the login page", async function () {
  await this.registrationPage.verifyRedirectionToLogin();
});
