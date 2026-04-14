import { BasePage } from "../../Fixture/basePage";
import data from "../../General/data";
import { LoginPageElements } from "./element_login";


export class LoginPageKeywords extends BasePage {
    readonly LoginPageElements: LoginPageElements;

    constructor(page: import("@playwright/test").Page) {
    
    super(page);
    this.LoginPageElements = new LoginPageElements(page);

  }

    async goto() {
    await this.gotoBase();
  }

    async loginwithValidCredentials(): Promise<void> {
        await this.goto();

        await this.LoginPageElements.username_field.waitFor({ state: 'visible', timeout: 5000 });
        await this.LoginPageElements.username_field.fill(data.LoginDataTest.validUser.username);

        await this.LoginPageElements.password_field.waitFor({ state: 'visible', timeout: 5000 });
        await this.LoginPageElements.password_field.fill(data.LoginDataTest.validUser.password);
        
        await this.LoginPageElements.login_button.waitFor({ state: 'visible', timeout: 5000 });
        await this.LoginPageElements.login_button.click();
    

  }


}