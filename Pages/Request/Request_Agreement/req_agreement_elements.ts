import { Locator, Page } from "@playwright/test";

export class RequestAgreementElements {

    // readonly Action_button: Locator;
    //notes : date picker pake langsung dari keyword aja 
    readonly create_new_agreement_button: Locator;
    readonly sbu_for_approval_toggle: Locator;
    readonly agreement_type: Locator;
    readonly entity_in_agreement_toggle: Locator;
    readonly agreement_option: Locator;
    readonly select_date_toggle: Locator;
    readonly notes_field: Locator;
    readonly save_button: Locator;
    readonly submit_button: Locator;
    readonly search_sbu: Locator;



    constructor(private readonly page: Page) {

        //this.Create_Button = page.locator("//button[normalize-space(text())='Create']");
        this.create_new_agreement_button = page.locator("(//button[contains(@class,'btn btn-primary')])[1]");
        this.sbu_for_approval_toggle = page.locator("(//input[@class='select-dropdown form-control'])[1]");
        this.agreement_type = page.locator("(//label[@class='form-check-label'])[1]");
        this.entity_in_agreement_toggle = page.locator("(//input[contains(@class,'select-dropdown form-control')])[2]");
        this.agreement_option = page.locator("//span[text()='Choose your option']")
        this.select_date_toggle = page.locator("(//input[contains(@class,'form-control datepicker')])[1]");
        this.notes_field = page.locator("(//label[normalize-space(text())='Notes']/following::textarea)[1]");
        this.save_button = page.locator("//button[normalize-space(text())='Save']");
        this.submit_button = page.locator("//button[normalize-space(text())='Submit']");
        this.search_sbu = page.locator("(//input[@placeholder='Search here..'])[1]");
    }


}