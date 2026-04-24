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
    readonly add_partner: Locator;
    readonly partner_field: Locator;
    readonly add_partner_button: Locator;
    readonly NOA_field: Locator;
    readonly duration: Locator;
    readonly duration_toggle: Locator;
    readonly other_notes: Locator;
    readonly add_territory: Locator;
    readonly territory_type: Locator;
    readonly territory_name: Locator;
    readonly add_button: Locator;
    readonly edit_certificate: Locator;
    readonly edit_ID_card: Locator;
    readonly edit_article: Locator;
    readonly choose_file_attatchment: Locator;
    readonly save_attachment: Locator;
    readonly attachment_toggle: Locator;



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
        this.add_partner = page.locator("(//button[contains(@class,'btn btn-primary-dark')])[2]");
        this.partner_field = page.locator("(//label[normalize-space(text())='Partner']/following::input)[1]");
        this.add_partner_button = page.locator("(//button[contains(@class,'btn btn-save-partner')])[1]");
        this.NOA_field = page.locator("input[name='OtherAgreement.NameAgreementNew']");
        this.duration = page.locator("#OtherAgreement_Duration2New");
        this.duration_toggle = page.locator('#OtherAgreement_Duration1New');
        this.other_notes = page.locator('#OtherAgreement_OthersNew');
        this.add_territory = page.locator("(//button[contains(@class,'btnAddTerritory btn')])[3]");
        this.territory_type = page.locator("//label[normalize-space(text())='Country']");
        this.territory_name = page.locator("(//input[@aria-required='true'])[2]");
        this.add_button = page.locator("(//button[contains(@class,'btn btn-save-territory')])[1]");
        this.edit_certificate = page.locator("(//button[contains(@class,'btn btn-warning')])[1]");
        this.edit_ID_card = page.locator("(//table[@cellspacing='0']//button)[3]");
        this.edit_article = page.locator("(//button[contains(@class,'btn btn-warning')])[3]");
        this.choose_file_attatchment = page.locator("(//div[@class='input-group-append pb-2']//button)[2]");
        this.save_attachment = page.locator("//button[normalize-space(text())='Save']");
        this.attachment_toggle = page.locator("//label[normalize-space(text())='Attachment']");
    }


}