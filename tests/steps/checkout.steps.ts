import { Given, When, Then } from "@cucumber/cucumber";

When("user clicks shopping cart icon", async function () {});

When("user click proceed to checkout button", async function () {});

When("user logs in", async function () {});

When(
  "user fills in the shipping address details and click proceeds to checkout button",
  async function () {}
);

When("user select payment method <{string}>", async function (string) {});

When(
  "user enters valid payment details for <{string}>",
  async function (string) {}
);

When("user clicks confirm button", async function () {});

Then("user should see an order confirmation message", async function () {});
