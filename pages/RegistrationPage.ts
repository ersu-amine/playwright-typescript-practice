import { Page, Locator, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en";
import dotenv from "dotenv"; //importing dotenv to manage environment variables
dotenv.config(); //loading environment variables

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dobInput: Locator;
  readonly streetInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly countryDropdown: Locator;
  readonly registerButton: Locator;
  readonly loginHeader: Locator;
  readonly registrationUrl: string;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#first_name");
    this.lastNameInput = page.locator("#last_name");
    this.dobInput = page.locator("#dob");
    this.streetInput = page.locator("#street");
    this.postalCodeInput = page.locator("#postal_code");
    this.cityInput = page.locator("#city");
    this.stateInput = page.locator("#state");
    this.phoneInput = page.locator("#phone");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.countryDropdown = page.locator("select#country");
    this.registerButton = page.locator("//button[@type='submit']");
    this.loginHeader = page.locator("//h3[text()='Login']");
    this.registrationUrl = `${process.env.BASE_URL}/auth/register`;
    this.header = page.locator("h3");
  }

  async navigateToRegistration() {
    console.log("Navigating to registration page:", this.registrationUrl);
    await this.page.goto(this.registrationUrl);
    console.log(this.page.url());
    console.log("Waiting for registration page header to be visible");
    await this.header.waitFor({ state: "visible", timeout: 30000 });
  }

  async fillRegistrationForm() {
    console.log("Filling registration form with random data");
    await this.firstNameInput.fill(faker.person.firstName());
    await this.lastNameInput.fill(faker.person.lastName());
    await this.dobInput.fill("1990-01-01");
    await this.streetInput.fill(faker.location.streetAddress());
    await this.postalCodeInput.fill(faker.location.zipCode());
    await this.cityInput.fill(faker.location.city());
    await this.stateInput.fill(faker.location.state());
    await this.countryDropdown.selectOption({ label: "Canada" });
    console.log("Selected country: Canada");
    const phoneNumber = faker.string.numeric(10);
    await this.phoneInput.fill(phoneNumber);
    await this.emailInput.fill(faker.internet.email());
    await this.passwordInput.fill(process.env.PASSWORD!);
    console.log("Filled all registration form fields and ready to submit");
  }

  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async verifyRedirectionToLogin() {
    await this.loginHeader.waitFor({ state: "visible", timeout: 2000 });
    expect(this.page.url()).toBe(`${process.env.BASE_URL}/auth/login`);
    expect(await this.loginHeader.textContent()).toBe("Login");
  }
}
