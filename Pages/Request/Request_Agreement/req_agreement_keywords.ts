import { LoginPageKeywords } from "../../Login_Page/keyword_login";
import { expect } from "playwright/test";
import { RequestAgreementElements } from "./req_agreement_elements";
import { BasePage } from "../../../Fixture/basePage";


export class RequestAgreementKeywords extends BasePage {
    readonly LoginPageKeywords: LoginPageKeywords;
    readonly RequestAgreementElements: RequestAgreementElements;

    constructor(page: import("@playwright/test").Page) {

        super(page);
        this.LoginPageKeywords = new LoginPageKeywords(page);
        this.RequestAgreementElements = new RequestAgreementElements(page);
    }

    async create_kalbe_agreement() {
        await this.RequestAgreementElements.create_new_agreement_button.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.create_new_agreement_button.click();
        await this.page.waitForTimeout(1000);

        await this.RequestAgreementElements.sbu_for_approval_toggle.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.sbu_for_approval_toggle.click();
        await this.page.waitForTimeout(1000);

        await this.RequestAgreementElements.agreement_type.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.agreement_type.click();
        await this.page.waitForTimeout(1000);

        await this.RequestAgreementElements.select_date_toggle.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.select_date_toggle.click();
        await this.page.waitForTimeout(1000);

        await this.RequestAgreementElements.notes_field.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.notes_field.fill("Notes");
        await this.page.waitForTimeout(1000);

        await this.RequestAgreementElements.save_button.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.save_button.click();
        await this.page.waitForTimeout(1000);

        await this.RequestAgreementElements.submit_button.waitFor({ state: 'visible', timeout: 5000 });
        await this.RequestAgreementElements.submit_button.click();
        await this.page.waitForTimeout(1000);
    }
}