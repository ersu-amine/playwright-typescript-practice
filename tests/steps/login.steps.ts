import { Given, When, Then } from "@cucumber/cucumber";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

Given("user navigates to the login page", async function () {
  await this.loginPage.navigateToLogin();
});

When("user enters valid username and password", async function () {
  await this.loginPage.enterCredentials(
    process.env.EMAIL,
    process.env.PASSWORD
  );
});

When("user click the login button", async function () {
  await this.loginPage.clickLoginButton();
});

Then("user should see the user dashboard", async function () {
  await this.loginPage.verifyDashboard();
});

When("user enters invalid username or password", async function () {
  await this.loginPage.enterCredentials("email@email.com", "wrongpassword");
});

Then("user should see an error message {string}", async function (string) {
  await this.loginPage.verifyErrorMessage(string);

});
