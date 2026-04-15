import { LoginPageKeywords } from "../../Login_Page/keyword_login";
import { expect } from "playwright/test";
import { RequestAgreementElements } from "./req_agreement_elements";
import { SideBarKeywords } from "../../Side_Bar/sidebar_keywords";
import { BasePage } from "../../../Fixture/basePage";



export class RequestAgreementKeywords extends BasePage {
    readonly LoginPageKeywords: LoginPageKeywords;
    readonly RequestAgreementElements: RequestAgreementElements;
    readonly SideBarKeywords: SideBarKeywords;

    constructor(page: import("@playwright/test").Page) {

        super(page);
        this.LoginPageKeywords = new LoginPageKeywords(page);
        this.RequestAgreementElements = new RequestAgreementElements(page);
        this.SideBarKeywords = new SideBarKeywords(page);
    }

    async create_sbu_agreement(sbuName: string) {

        // await this.LoginPageKeywords.loginwithValidCredentials();
        // await this.page.waitForTimeout(1000);

        await this.SideBarKeywords.openAgreement();

        await this.RequestAgreementElements.create_new_agreement_button.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.create_new_agreement_button.click();

        await this.RequestAgreementElements.sbu_for_approval_toggle.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.sbu_for_approval_toggle.click();
        await this.RequestAgreementElements.search_sbu.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.search_sbu.fill(sbuName);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.RequestAgreementElements.agreement_type.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.agreement_type.click();
        await this.page.keyboard.press('Enter');

        await this.RequestAgreementElements.agreement_option.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.agreement_option.click();
        await this.page.keyboard.press('Enter');

        await this.RequestAgreementElements.select_date_toggle.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.select_date_toggle.click();
        for (let i = 0; i < 5; i++) {
            await this.page.keyboard.press('ArrowRight');
            await this.page.waitForTimeout(1000);
        }
        await this.page.keyboard.press('Enter');

        await this.RequestAgreementElements.notes_field.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.notes_field.fill("Test QA - Automated");

        await this.RequestAgreementElements.entity_in_agreement_toggle.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.entity_in_agreement_toggle.click();
        await this.page.keyboard.press('Enter');

        await this.RequestAgreementElements.save_button.waitFor({ state: 'visible', timeout: 10000 });
        await this.RequestAgreementElements.save_button.click();


        // await this.RequestAgreementElements.submit_button.waitFor({ state: 'visible', timeout: 5000 });
        // await this.RequestAgreementElements.submit_button.click();
        // await this.page.waitForTimeout(1000);
    }
}