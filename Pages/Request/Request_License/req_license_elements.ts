import { Locator, Page } from "@playwright/test";

export class RequestLicenseElements {

    readonly create_new_ikon: Locator;
    readonly select_type: Locator;
    readonly license_name_field: Locator;
    readonly check_territory: Locator;
    readonly choose_territory: Locator;
    readonly choose_afghanistan: Locator;
    readonly select_date_field: Locator;
    readonly set_date: Locator;
    readonly notes_field: Locator;
    readonly submit_button: Locator;


    constructor(private readonly page: Page) {

        this.create_new_ikon = page.locator("//a[@title='Create New License']//i[1]");
        this.select_type = this.page.locator('#frmHeaderLicense').getByText('New', { exact: true })
        this.license_name_field = page.locator("//label[text()='Name of License']/following-sibling::select")
        this.check_territory = this.page.getByText('Choose Territory');
        this.choose_territory = this.page.getByRole('combobox').filter({ hasText: /^$/ });
        this.choose_afghanistan = this.page.getByText('Afghanistan')
        this.select_date_field = page.locator("//input[@placeholder='Select Date...']");
        this.set_date = page.locator("//div[@aria-label='30 April 2026']")
        this.notes_field = page.locator("(//textarea[@rows='3'])[1]");
        this.submit_button = page.locator("(//button[@type='button']/following-sibling::button)[3]");
        



        

       
    }


}