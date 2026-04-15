import { test } from '../Fixture/baseTest';
import { LoginPageKeywords } from '../Pages/Login_Page/keyword_login';
import { RequestAgreementKeywords } from '../Pages/Request/Request_Agreement/req_agreement_keywords';


test.describe('Login Functionality Tests', () => {


    test('create agreement Kalbe', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Kalbe Farma");

    });
    test('create agreement Kalbe International', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Kalbe International");

    });
    test('create agreement Dankos', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Dankos Farma");

    });
    test('create agreement Enseval', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Enseval Putera Megatama");

    });
    test('create agreement Finus', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Finus");

    });
    test('create agreement Finus', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Finus");

    });
    test('create agreement Bintang Toedjoe', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();

        const reqAgreement = new RequestAgreementKeywords(page);
        await reqAgreement.create_sbu_agreement("Bintang Toedjoe");

    });

});