import { Given, When, Then } from "@cucumber/cucumber";

Given("the user is on the homepage", async function () {
  await this.basePage.navigateToHome();
  await this.basePage.verifyOnHomePage();
});

When("the user selects a product {string}", async function (itemName: string) {
  this.basePage.clickProduct(itemName);
});

When("the user clicks add to cart button", async function () {
  await this.productPage.addToCart();
});

Then(
  "the shopping cart icon should contain {int} item",
  async function (quantity: number) {
    await this.productPage.verifyCartIconQuantity(quantity);
  }
);
