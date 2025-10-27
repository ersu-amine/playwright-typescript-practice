import { Page, Locator, expect } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly addToCartButton: Locator;
    readonly itemQuantity: Locator;
    readonly cartIconQuantity: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator("h1[data-test='product-name']");
        this.addToCartButton = page.locator("button[data-test='add-to-cart']");
        this.itemQuantity = page.locator("//input[@data-test='quantity']");
        this.cartIconQuantity = page.locator("//a[@data-test='nav-cart']//span");
    }
    async verifyProductPage(productName: string) {
        await expect(this.productTitle).toHaveText(productName);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async setItemQuantity(quantity: number) {
        await this.itemQuantity.fill(quantity.toString());
    }
    
    async getCartIconQuantity(): Promise<number> {
        const quantityText = await this.cartIconQuantity.textContent();
        return parseInt(quantityText || "0", 10);
    }

    async verifyCartIconQuantity(expectedQuantity: number) {
        const actualQuantity = await this.getCartIconQuantity();
        expect(actualQuantity).toBe(expectedQuantity);
    }

}