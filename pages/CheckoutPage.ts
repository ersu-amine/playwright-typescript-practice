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
  readonly paymentMethodDropdown: Locator;
  readonly confirmButton: Locator;
  readonly paymentConfirmationMessage: Locator;

  //Bank transfer details
  readonly bankNameInput: Locator;
  readonly accountNameInput: Locator;
  readonly accountNumberInput: Locator;

  //Credit card details
  readonly creditCardNumberInput: Locator;
  readonly creditCardExpiryInput: Locator;
  readonly creditCardCVVInput: Locator;
  readonly cardHolderNameInput: Locator;

  //Gift card details
  readonly giftCardNumberInput: Locator;
  readonly giftCardValidationCodeInput: Locator;

  //Buy Now Pay Later details
  readonly installmentsDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartIcon = page.locator("[data-test='nav-cart']");
    this.proceedCheckoutButton = page.getByRole("button", {
      name: "Proceed to checkout",
    });
    this.loginPage = new LoginPage(page);
    this.address = page.locator("[data-test='street']");
    this.city = page.locator("[data-test='city']");
    this.state = page.locator("[data-test='state']");
    this.country = page.locator("[data-test='country']");
    this.postalCode = page.locator("[data-test='postal_code']");
    this.paymentMethodDropdown = page.locator("[data-test='payment-method']");
    this.confirmButton = page.locator("[data-test='finish']");
    this.paymentConfirmationMessage = page.locator(
      "[data-test='payment-success-message']"
    );

    //Bank transfer details
    this.bankNameInput = page.locator("#bank_name");
    this.accountNameInput = page.locator("#account_name");
    this.accountNumberInput = page.locator("#account_number");

    //Credit card details
    this.creditCardNumberInput = page.locator("#credit_card_number");
    this.creditCardExpiryInput = page.locator("#expiration_date");
    this.creditCardCVVInput = page.locator("#cvv");
    this.cardHolderNameInput = page.locator("#card_holder_name");

    //Gift card details
    this.giftCardNumberInput = page.locator("#gift_card_number");
    this.giftCardValidationCodeInput = page.locator("#validation_code");

    //Buy Now Pay Later details
    this.installmentsDropdown = page.locator("#monthly_installments");
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
    await this.proceedCheckoutButton.click();
  }

  async selectPaymentMethod(method: string) {
    await this.paymentMethodDropdown.selectOption(method);
  }

  async enterPaymentDetails(method: string) {
    console.log(`Entering payment details for method: ${method}`);
    if (method === "Bank Transfer") {
      await this.processBankTransfer();
    } else if (method === "Credit Card") {
      await this.processCreditCard();
    } else if (method === "Gift Card") {
      await this.processGiftCard();
    } else if (method === "Buy Now Pay Later") {
      await this.processBuyNowPayLater();
    }
  }

  async processBankTransfer() {
    await this.bankNameInput.waitFor({ state: "visible" });
    await this.bankNameInput.fill("Bank of Testing");
    await this.accountNameInput.fill("John Doe");
    await this.accountNumberInput.fill("123456789");
  }

  async processCreditCard() {
    await this.creditCardNumberInput.waitFor({ state: "visible" });
    await this.creditCardNumberInput.fill("4111-1111-1111-1111");
    await this.creditCardExpiryInput.fill("12/2030");
    await this.creditCardCVVInput.fill("123");
    await this.cardHolderNameInput.fill("John Doe");
  }

  async processGiftCard() {
    await this.giftCardNumberInput.waitFor({ state: "visible" });
    await this.giftCardNumberInput.fill("GIFTCARD1234");
    await this.giftCardValidationCodeInput.fill("5678");
  }

  async processBuyNowPayLater() {
    await this.installmentsDropdown.waitFor({ state: "visible" });
    await this.installmentsDropdown.selectOption("6");
  }

  async confirmOrder() {
    await this.confirmButton.click();
  }

  async verifyPaymentSuccessMessage() {
    await expect(this.paymentConfirmationMessage).toBeVisible();
  }
}
