import { test } from '../Fixture/baseTest';
import { LoginPageKeywords } from '../Pages/Login_Page/keyword_login';
import { LicenseKeywords } from '../Pages/Request/Request_License/req_license_keywords';     
   


test.describe('Create Document', () => {


    test('Create Document SBU: Kalbe', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();
        const licensePage = new LicenseKeywords(page);
        await licensePage.CreateDocKalbe();
    });

    




});