import { Locator, Page } from "@playwright/test";

export class SideBarElements {

    readonly automation_menu: Locator;
    readonly request_menu: Locator;
    readonly agreement_menu: Locator;


    constructor(private readonly page: Page) {

        this.automation_menu = page.locator("//a[contains(text(),'Automation')]");
        this.request_menu = page.locator("//i[@class='fas fa-book']");
        this.agreement_menu = page.locator("(//div[contains(@class,'d-flex align-items-center')]//a)[3]")

    }


}