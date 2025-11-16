import { Given, When, Then } from "@cucumber/cucumber";

When("user clicks shopping cart icon", async function () {
  await this.checkoutPage.clickShoppingCart();
});

When("user click proceed to checkout button", async function () {
  await this.checkoutPage.proceedToCheckout();
});

When("user logs in", async function () {
  await this.checkoutPage.userLogsIn();
});

When(
  "user fills in the shipping address details and click proceeds to checkout button",
  async function () {
    await this.checkoutPage.fillInShippingDetails();
  }
);

When("user select payment method <{string}>", async function (string) {
  await this.checkoutPage.selectPaymentMethod(string);
});

When(
  "user enters valid payment details for <{string}>",
  async function (string) {
    //TODO
  }
);

When("user clicks confirm button", async function () {
  await this.checkoutPage.confirmOrder();
});

Then("user should see an order confirmation message", async function () {
  await this.checkoutPage.verifyPaymentSuccessMessage();
});
