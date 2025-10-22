import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page } from "playwright";
import { LoginPage } from "../../pages/LoginPage";
import {RegistrationPage} from "../../pages/RegistrationPage";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  loginPage!: LoginPage;
  registrationPage!:RegistrationPage;

  async initPageObjects() {
    this.loginPage = new LoginPage(this.page);
    this.registrationPage = new RegistrationPage(this.page);
    // Initialize other page objects similarly
  }
}

setWorldConstructor(CustomWorld);

//optional helper function to initialize page objects
export async function initPageObjects(world: CustomWorld): Promise<void> {
  if (!world) throw new Error("initPageObjects: world instance is required");
  if (typeof world.initPageObjects !== "function") {
    throw new Error(
      "initPageObjects: provided world does not implement initPageObjects()"
    );
  }
  await world.initPageObjects();
}
