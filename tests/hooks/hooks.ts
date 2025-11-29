import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "../support/world";

// Increase default step timeout to 10s to allow slow navigation in dev
setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  //const isCI = process.env.CI === "true";

  // Launch a browser and new page for each scenario
  //const browser = await chromium.launch({ headless: isCI ? true : false }); // Launch browser in headless mode in CI, headed mode locally
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Attach to World so step defs can access via this.browser / this.page
  this.browser = browser;
  this.page = page;
  await this.initPageObjects();
});

After(async function (this: CustomWorld) {
  // Close page and browser if present
  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});
