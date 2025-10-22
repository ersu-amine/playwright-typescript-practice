import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";

type MyFixtures = {
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
  //add more types here
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  //define others similarly
});
