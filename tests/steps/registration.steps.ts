import settings from "../config/settings.json"; // adjust path if needed
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en"; // Import faker with a specific locale

Given("the user is on the registration page", async function () {
  await this.page.goto(settings.REGISTRATION_URL);
});

When(
  "the user fills the registration form with valid details",
  async function () {
    let firstName = this.page.locator("#first_name");
    let lastName = this.page.locator("#last_name");
    let dob = this.page.locator("#dob");
    let street = this.page.locator("#street");
    let postalCode = this.page.locator("#postal_code");
    let city = this.page.locator("#city");
    let state = this.page.locator("#state");
    let phone = this.page.locator("#phone");
    let email = this.page.locator("#email");
    let password = this.page.locator("#password");
    let countryDropdown = this.page.locator("select#country");

    //fill in form details
    await firstName.fill(faker.person.firstName());
    await lastName.fill(faker.person.lastName());
    await dob.fill("1990-01-01");
    await street.fill(faker.location.streetAddress());
    await postalCode.fill(faker.location.zipCode());
    await city.fill(faker.location.city());
    await state.fill(faker.location.state());
    await countryDropdown.selectOption({ label: "Canada" });
    const phoneNumber = faker.string.numeric(10); // generates a string exactly 10 digits long
    await phone.fill(phoneNumber);
    await email.fill(faker.internet.email());
    await password.fill(settings.PASSWORD);
  }
);

When("clicks the register button", async function () {
  await this.page.locator("//button[@type='submit']").click();
});

Then("the user should be redirected to the login page", async function () {
  expect(this.page.url()).toBe(settings.LOGIN_URL);
  expect(await this.page.locator("h3").textContent()).toBe("Login");
});
