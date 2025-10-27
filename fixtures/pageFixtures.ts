import { test as base, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { ProductPage } from "../pages/ProductPage";

type MyFixtures = {
  basePage: BasePage;
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
  productPage: ProductPage;
  //add more types here
};

export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },  
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  //define others similarly
});
