import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('Should add item and remove it from cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    // Login
    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    // Add first item to cart
    await inventory.addItemToCartByIndex(0);


    // Add second item to cart
    await inventory.addItemToCartByIndex(1);

    // Verify cart badge shows 2 items
    await expect(inventory.getCartBadge()).toHaveText('2');
    

    // Remove first item from cart
    await inventory.removeItemFromCartByIndex(0)


    // Remove second item from cart
    await inventory.removeItemFromCartByIndex(1)


    // Verify cart badge is no longer visible
    await expect(inventory.getCartBadge()).toHaveCount(0);
});