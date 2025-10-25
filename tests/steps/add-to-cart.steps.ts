import settings from "../config/settings.json";
import { Given, When, Then } from "@cucumber/cucumber";

         Given('the user is on the homepage', async function () {
            await this.basePage.navigateToHome(); //TODO verify home, no navigation
         });

          When('the user selects a product {string}', async function (string) {

         });

         When('the user clicks the {string} button', async function (string) {

         });

         Then('the shopping cart should contain {int} item', async function (int) {

         });

         Then('the cart total should update accordingly', async function () {

         });