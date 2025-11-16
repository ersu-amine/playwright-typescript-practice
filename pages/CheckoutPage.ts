import { Page, Locator, expect } from "@playwright/test";
import { LoginPage } from "./LoginPage";
export class CheckoutPage {
  readonly page: Page;
  readonly shoppingCartIcon: Locator;
  readonly proceedCheckoutButton: Locator;
  readonly loginPage: LoginPage;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly country: Locator;
  readonly postalCode: Locator;
  readonly proceedToCheckoutButton2: Locator;
  readonly proceedToCheckoutButton3: Locator;
  readonly paymentMethodDropdown: Locator;
  readonly confirmButton: Locator;
  readonly paymentConfirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartIcon = page.locator("[data-test='nav-cart']");
    this.proceedCheckoutButton = page.locator("[data-test='proceed-1']");
    this.loginPage = new LoginPage(page);
    this.address = page.locator("[data-test='street']");
    this.city = page.locator("[data-test='city']");
    this.state = page.locator("[data-test='state']");
    this.country = page.locator("[data-test='country']");
    this.postalCode = page.locator("[data-test='postal_code']");
    this.proceedToCheckoutButton2 = page.locator("[data-test='proceed-2']");
    this.proceedToCheckoutButton3 = page.locator("[data-test='proceed-3']");
    this.paymentMethodDropdown = page.locator("[data-test='payment-method']");
    this.confirmButton = page.locator("[data-test='finish']");
    this.paymentConfirmationMessage = page.locator("[data-test='payment-success-message']");

  }

  async clickShoppingCart() {
    await this.shoppingCartIcon.waitFor({ state: "visible" });
    await this.shoppingCartIcon.click();
  }

  async proceedToCheckout() {
    await this.proceedCheckoutButton.waitFor({ state: "visible" });
    await this.proceedCheckoutButton.click();
  }

  async userLogsIn() {
    await this.loginPage.enterCredentials(
      process.env.EMAIL!,
      process.env.PASSWORD!
    );
    await this.loginPage.clickLoginButton();
  }

  async fillInShippingDetails() {
    await this.address.fill("123 Victoria St");
    await this.city.fill("Ajax");
    await this.state.fill("Anystate");
    await this.country.fill("USA");
    await this.postalCode.fill("12345");
    await this.proceedToCheckoutButton3.click();
  }

  async selectPaymentMethod(method: string) {
    await this.paymentMethodDropdown.selectOption(method);
  }

  async enterPaymentDetails(method: string) {
    // Implementation for entering payment details based on the method
    //TODO: Implement this method
  }

  async confirmOrder() {
    await this.confirmButton.click();
  }

  async verifyPaymentSuccessMessage() {

    await expect(this.paymentConfirmationMessage).toBeVisible();
  }

}
