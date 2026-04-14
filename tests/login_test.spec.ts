import { test } from '../Fixture/baseTest';
import { LoginPageKeywords } from '../Pages/Login_Page/keyword_login';


test.describe('Login Functionality Tests', () => {


    test('Valid Login Test', async ({ page }) => {
        const loginPage = new LoginPageKeywords(page);
        await loginPage.goto();
        await loginPage.loginwithValidCredentials();
        // Tambahkan assertion untuk memverifikasi login berhasil
    });
    
  });