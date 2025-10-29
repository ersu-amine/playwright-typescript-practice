import { Page, Locator, expect } from "@playwright/test";

export class BasePage{
    readonly page:Page;
    readonly homeLink:Locator;
    readonly loginLink:Locator;
    readonly contactLink:Locator;
    readonly categoriesLink:Locator;
    readonly categoriesDropdown:Locator;
    readonly filters:Locator;

    constructor(page:Page) {
        this.page = page;
        this.homeLink = page.locator("//a[@data-test='nav-home']");
        this.loginLink = page.locator("//a[@data-test='nav-sign-in']");
        this.contactLink = page.locator("//a[@data-test='nav-contact']");
        this.categoriesLink = page.locator("//a[@data-test='nav-categories']");
        this.categoriesDropdown = page.locator("//ul[@aria-label='nav-categories']//a");
        this.filters = page.locator("//div[@data-test='filters']"); //filter section on home page

    }

    async navigateToHome(){
        await this.page.goto(process.env.BASE_URL!);
    }
    
    async navigateToLogin(){
        await this.loginLink.click();
    }

    async navigateToContact(){
        await this.contactLink.click();
    }
    
    async navigateToCategory(categoryName:string){
        await this.categoriesLink.click();
        const categoryOption = this.page.locator(`//ul[@aria-label='nav-categories']//a[text()='${categoryName}']`);
        await categoryOption.click();
    }

    async verifyOnHomePage(){
        await expect(this.filters).toBeVisible();
    }

    async clickProduct(itemName:string){
        const itemLocator = this.page.locator(`//a//h5[@data-test='product-name' and normalize-space(text())='${itemName}']`);
        itemLocator.click();
    }
}