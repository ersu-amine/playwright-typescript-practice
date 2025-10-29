import { Page, Locator, expect } from "@playwright/test";
import settings from "../tests/config/settings.json";
import dotenv from "dotenv";  //importing dotenv to manage environment variables
dotenv.config(); //loading environment variables

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly dashboardHeader: Locator;
  readonly loginUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.dashboardHeader = page.locator("h1");
    this.loginUrl = `${process.env.BASE_URL}/auth/login`;
  }
  async navigateToLogin() {
    await this.page.goto(this.loginUrl);
  }

  async enterCredentials(email: string, password: string) {
    await this.emailInput.waitFor({ state: "visible" });
    await this.passwordInput.waitFor({ state: "visible" });

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.click();
    await this.page.waitForTimeout(3000); // wait for login to process
    console.log("Current URL after login:", this.page.url());
  }

  async verifyDashboard() {
    // Wait for dashboard element to be visible
    await this.dashboardHeader.waitFor({ state: "visible" });

    // Get the text content of the dashboard header
    const headingText = await this.page.locator("h1").textContent();

    // Assert the heading text matches expectation
    expect(await this.dashboardHeader.textContent()).toBe("My account");
  }
}
