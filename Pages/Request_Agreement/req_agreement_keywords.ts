import { LoginPageKeywords } from "../Login_Page/keyword_login";
import { expect } from "playwright/test";
import { RequestAgreementElements } from "./req_agreement_elements";
import { BasePage } from "../../Fixture/basePage";


export class RequestAgreementKeywords extends BasePage {
    readonly LoginPageKeywords: LoginPageKeywords;
    readonly RequestAgreementElements: RequestAgreementElements;

    constructor(page: import("@playwright/test").Page) {

        super(page);
        this.LoginPageKeywords = new LoginPageKeywords(page);
        this.RequestAgreementElements = new RequestAgreementElements(page);
    }

    async goto() {
        await this.gotoBase();
    }

    async CreateProductCategory(): Promise<void> {
        await this.goto();

        
    }
}