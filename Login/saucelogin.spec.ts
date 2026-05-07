import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { VALID_CREDENTIALS, INVALID_CREDENTIALS, PROBLEM_USER } from '../fixtures/test-data';

test.describe('Sauce Demo Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    }   );
test ('should login successfully with valid credentials', async ({page}) => {
    await loginPage.login(VALID_CREDENTIALS.username, VALID_CREDENTIALS.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
}
);
test('should show error message with invalid credentials', async ({page}) => {
    await loginPage.login(INVALID_CREDENTIALS.username, INVALID_CREDENTIALS.password);
    await expect(loginPage.getErrorLocator()).toBeVisible();
    expect(await loginPage.getErrorMessage()).toContain('Username and password do not match any user in this service');
}
);

test('should show error message when username is missing', async ({page}) => {
    await loginPage.login('', VALID_CREDENTIALS.password);
    await expect(loginPage.getErrorLocator()).toBeVisible();
    expect(await loginPage.getErrorMessage()).toContain('Username is required');

});
});