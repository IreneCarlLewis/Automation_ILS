import { test } from '../Fixture/baseTest';
import { LoginPageKeywords } from '../Pages/Login_Page/keyword_login';
import { RequestAgreementKeywords } from '../Pages/Request/Request_Agreement/req_agreement_keywords';


test.describe('Login Functionality Tests', () => {


    test('Valid Login Test', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_kalbe_agreement();

    });






});