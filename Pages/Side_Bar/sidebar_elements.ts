import { Locator, Page } from "@playwright/test";

export class SideBarElements {

    readonly automation_menu: Locator;
    readonly request_menu: Locator;


    constructor(private readonly page: Page) {

        this.automation_menu = page.locator("//a[contains(text(),'Automation')]");
        this.request_menu = page.locator("//i[@class='fas fa-book']")
       
    }


}