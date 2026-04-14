import {Locator, Page} from "@playwright/test";



export class LoginPageElements {
    readonly username_field: Locator;
    readonly password_field: Locator;
    readonly login_button: Locator;

    constructor(private readonly page: Page) { 

        this.username_field = page.locator("//input[@placeholder='firstName.lastName@Compdomain']");
        this.password_field = page.locator("//input[@placeholder='Your Password']");
        this.login_button = page.locator("//button[normalize-space(text())='LOG IN']");

    }


}