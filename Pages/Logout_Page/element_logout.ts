import {Locator, Page} from "@playwright/test";



export class LogoutPageElements {
    readonly logout_btn: Locator;


    constructor(private readonly page: Page) {  
        this.logout_btn = page.locator("//a[normalize-space(text())='Log Out']");
        

    }


}