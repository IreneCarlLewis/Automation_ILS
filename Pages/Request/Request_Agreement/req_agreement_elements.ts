import { Locator, Page } from "@playwright/test";

export class RequestAgreementElements {

    // readonly Action_button: Locator;
    //notes : date picker pake langsung dari keyword aja 
    readonly create_new_agreement_button: Locator;
    readonly sbu_for_approval_toggle: Locator;
    // readonly sbu_for_approval_kalbe: Locator;
    // readonly sbu_for_approval_finus: Locator;
    // readonly sbu_for_approval_dankos: Locator;
    // readonly sbu_for_approval_enseval: Locator;
    // readonly sbu_for_approval_kalbeInt: Locator;
    readonly agreement_type: Locator;
    readonly select_date_toggle: Locator;
    readonly notes_field: Locator;
    readonly save_button: Locator;
    readonly submit_button: Locator;



    constructor(private readonly page: Page) {

        //this.Create_Button = page.locator("//button[normalize-space(text())='Create']");
        this.create_new_agreement_button = page.locator("(//button[contains(@class,'btn btn-primary')])[1]");
        this.sbu_for_approval_toggle = page.locator("(//input[@class='select-dropdown form-control'])[1]");
        // this.sbu_for_approval_kalbe = page.locator("//label[normalize-space(text())='Kalbe']");
        // this.sbu_for_approval_finus = page.locator("//label[normalize-space(text())='Finus']");
        // this.sbu_for_approval_dankos = page.locator("//label[normalize-space(text())='Dankos']");
        // this.sbu_for_approval_enseval = page.locator("//label[normalize-space(text())='Enseval']");
        // this.sbu_for_approval_kalbeInt = page.locator("//label[normalize-space(text())='Kalbe International']");
        this.agreement_type = page.locator("//label[normalize-space(text())='Amendment/Addendum/Renewal']");
        this.select_date_toggle = page.locator("(//input[contains(@class,'form-control datepicker')])[1]");
        this.notes_field = page.locator("(//label[normalize-space(text())='Notes']/following::textarea)[1]");
        this.save_button = page.locator("//button[normalize-space(text())='Save']");
        this.submit_button = page.locator("//button[normalize-space(text())='Submit']");
    }


}