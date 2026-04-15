import { LoginPageKeywords } from "../../Login_Page/keyword_login";
import { expect } from "playwright/test";
import { BasePage } from "../../../Fixture/basePage";
import { RequestLicenseElements } from "./req_license_elements";
import { SideBarElements } from "../../Side_Bar/sidebar_elements";


export class LicenseKeywords extends BasePage {
    readonly LoginPageKeywords: LoginPageKeywords;
    readonly RequestLicenseElements: RequestLicenseElements;
    readonly SideBarElements: SideBarElements;

    constructor(page: import("@playwright/test").Page) {

        super(page);
        this.LoginPageKeywords = new LoginPageKeywords(page);
        this.RequestLicenseElements = new RequestLicenseElements(page);
        this.SideBarElements = new SideBarElements(page);
    }

    async goto() {
        await this.gotoBase();
    }

    async CreateDocKalbe(): Promise<void> {
        await this.goto();

        await this.SideBarElements.request_menu.waitFor({ state: 'visible', timeout: 5000 });
        await this.SideBarElements.request_menu.click();

        await this.RequestLicenseElements.create_new_ikon.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.create_new_ikon.click();

        await this.RequestLicenseElements.select_type.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.select_type.click();

        await this.RequestLicenseElements.license_name_field.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.license_name_field.click();
        await this.RequestLicenseElements.license_name_field.selectOption({ label: 'BUILDING LICENSE' });

        await this.RequestLicenseElements.check_territory.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.check_territory.click();

        await this.RequestLicenseElements.choose_territory.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.choose_territory.click();

        await this.RequestLicenseElements.choose_afghanistan.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.choose_afghanistan.click();
        
        await this.RequestLicenseElements.select_date_field.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.select_date_field.click();

        await this.RequestLicenseElements.set_date.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.set_date.click();

        await this.RequestLicenseElements.notes_field.waitFor({state: 'visible', timeout: 5000 });
        await this.RequestLicenseElements.notes_field.fill('create license doc auto')

        await this.RequestLicenseElements.submit_button.waitFor({ state: 'visible', timeout: 5000});
        await this.RequestLicenseElements.submit_button.click();


 
    }
}