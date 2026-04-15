import { BasePage } from "../../Fixture/basePage";
import data from "../../General/data";
import { expect } from "playwright/test";
import { SideBarElements } from "./sidebar_elements";


export class SideBarKeywords extends BasePage {
    readonly SideBarElements: SideBarElements;

    constructor(page: import("@playwright/test").Page) {

        super(page);
        this.SideBarElements = new SideBarElements(page);
    }

    async goto() {
        await this.gotoBase();
    }

    async openRequest(): Promise<void> {
        await this.SideBarElements.request_menu.waitFor({ state: 'visible', timeout: 5000 });
        await this.SideBarElements.request_menu.click();
        await this.page.waitForTimeout(1000);
    }

    async openAgreement(): Promise<void> {
        await this.SideBarElements.request_menu.waitFor({ state: 'visible', timeout: 5000 });
        await this.SideBarElements.request_menu.click();
        await this.page.waitForTimeout(1000);

        await this.SideBarElements.agreement_menu.waitFor({ state: 'visible', timeout: 5000 });
        await this.SideBarElements.agreement_menu.click();
        await this.page.waitForTimeout(1000);
    }

    async openAllMasterModules(): Promise<void> {

        await this.SideBarElements.automation_menu.waitFor({ state: 'visible', timeout: 5000 });
        await this.SideBarElements.automation_menu.click();

        await this.SideBarElements.request_menu.waitFor({ state: 'visible', timeout: 5000 });
        await this.SideBarElements.request_menu.click();


    }

};
