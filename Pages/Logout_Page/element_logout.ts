import {Locator, Page} from "@playwright/test";



export class LogoutPageElements {
    readonly burger_btn: Locator;
    readonly logout_btn: Locator;


    constructor(private readonly page: Page) { 

        this.burger_btn = page.locator("#react-burger-menu-btn");
        this.logout_btn = page.locator("#logout_sidebar_link");
        

    }


}