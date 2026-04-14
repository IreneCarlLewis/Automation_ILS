import {Locator, Page} from "@playwright/test";



export class LoginPageElements {
    readonly username_field: Locator;
    readonly password_field: Locator;
    readonly login_button: Locator;

    constructor(private readonly page: Page) { 

        this.username_field = page.locator("#user-name");
        this.password_field = page.locator("#password");
        this.login_button = page.locator("#login-button");

    }


}