import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page } from "playwright";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
}
setWorldConstructor(CustomWorld);
