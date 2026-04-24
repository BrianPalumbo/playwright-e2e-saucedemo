import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { InventoryPage } from './pages/inventory.page';
import { ProductPage } from './pages/product.page';

test.describe('Product Naviigatiion', () => {
    let login: LoginPage;
    let inventory: InventoryPage;
    let product: ProductPage;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        inventory = new InventoryPage(page);
        product = new ProductPage(page);

        await login.goto();
        await login.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory/);
    });
test('Should open first product successfully', async ({ page }) => {


    // Login
    await login.goto();
    await login.login('standard_user', 'secret_sauce'); 

    // Verify we are on the inventory page
    await expect(page).toHaveURL(/inventory/);
    const items = inventory.getItems();
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThan(1);

    // Save the title of the first product
    const expectedTitle = await page.locator('.inventory_item_name').nth(0).innerText();

    // Click on the first product
    await inventory.clickProductByIndex(0);

    // Compare the title of the product page with the expected title
    const title = product.getTitle();
    await expect(title).toBeVisible();
    await expect(title).toHaveText(expectedTitle);

});

test('Should open second product successfully', async ({ page }) => {


    // Login
    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    // Verify we are on the inventory page
    await expect(page).toHaveURL(/inventory/);
    const items = inventory.getItems();
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThan(1);

    // Save the title of the second product
    const expectedTitle = await page.locator('.inventory_item_name').nth(1).innerText();
    
    // Click on the second product
    await inventory.clickProductByIndex(1);   
    

    // Compare the title of the product page with the expected title
    const title = product.getTitle();
    await expect(title).toBeVisible();
    await expect(title).toHaveText(expectedTitle);
 

    
   
});});
