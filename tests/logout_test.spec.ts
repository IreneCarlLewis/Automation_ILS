import { Page } from '@playwright/test';
import { test } from '../Fixture/baseTest';
import { LoginPageKeywords } from '../Pages/Login_Page/keyword_login';
import { LogoutPageKeywords } from '../Pages/Logout_Page/keyword_logout';
import { log } from 'node:console';


async function logoutFlow(page: Page) {

    const loginPage = new LoginPageKeywords(page);
    await loginPage.loginwithValidCredentials();
    const logoutPage = new LogoutPageKeywords(page);
    await logoutPage.logout();

}

test.describe('Logout Functionality Tests', () => {


    test('Valid Logout Test', async ({ page }) => {
        await logoutFlow(page);
    });
    
  });