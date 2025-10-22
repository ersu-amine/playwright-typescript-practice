import settings from "../config/settings.json";
import { Given, When, Then } from "@cucumber/cucumber";

Given("user navigates to the login page", async function () {
  await this.loginPage.navigateToLogin();
});

When("user enters valid username and password", async function () {
  // console.log("Filling in username and password fields");
  // console.log(`Using email: ${settings.EMAIL}`);
  // console.log(`Using password: ${settings.PASSWORD}`);

  // // Wait for elements to be ready
  // await this.page.waitForSelector("#email", { state: "visible" });
  // await this.page.waitForSelector("#password", { state: "visible" });

  // await this.page.locator("#email").fill(settings.EMAIL);
  // await this.page.locator("#password").fill(settings.PASSWORD);
  await this.loginPage.enterCredentials(settings.EMAIL, settings.PASSWORD);
});

When("user click the login button", async function () {
  // // Use the data-test attribute - most reliable
  // const submitButton = this.page.locator('[data-test="login-submit"]');

  // // Wait for button to be visible and enabled
  // await submitButton.waitFor({ state: "visible" });

  // console.log("Login button found, clicking...");
  // await submitButton.click();

  // // Wait a moment for the login to process
  // await this.page.waitForTimeout(3000);

  // console.log("Current URL after login:", this.page.url());
  await this.loginPage.clickLoginButton();
});

Then("user should see the user dashboard", async function () {
  await this.loginPage.verifyDashboard();
});
