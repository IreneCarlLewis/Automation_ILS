import { BasePage } from "../../Fixture/basePage";
import data from "../../General/data";
import { LogoutPageElements } from "./element_logout";


export class LogoutPageKeywords extends BasePage {
    readonly LogoutPageElements: LogoutPageElements;

    constructor(page: import("@playwright/test").Page) {
    
    super(page);
    this.LogoutPageElements = new LogoutPageElements(page);

  }

    async goto() {
    await this.gotoBase();
  }

    async logout(): Promise<void> {
         await this.LogoutPageElements.burger_btn.waitFor({ state: 'visible', timeout: 10000 });
         await this.LogoutPageElements.burger_btn.click();
       

        await this.LogoutPageElements.logout_btn.waitFor({ state: 'visible', timeout: 10000 });
        await this.LogoutPageElements.logout_btn.click();
    
    

  }


}