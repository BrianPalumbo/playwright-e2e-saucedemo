import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PROBLEM_USER } from '../fixtures/test-data';
import { InventoryPage } from '../pages/inventory.page';

let inventory: InventoryPage;
test.describe('Problem User Tests', () => {

    test.beforeEach(async ({ page }) => {
        inventory = new InventoryPage(page);

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(PROBLEM_USER.username, PROBLEM_USER.password);

    // Verify we are on the inventory page
    await expect(page).toHaveURL(/inventory/);
    });

test('should display products but with issues', async ({ page }) => {
    const items = page.locator('.inventory_item');
    await expect(items.first()).toBeVisible();


    // Check for broken images
    const sources = await inventory.getImageSources();
    
    for (const src of sources) {
      
       
    }
});
});