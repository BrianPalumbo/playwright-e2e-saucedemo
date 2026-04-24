import { Page } from '@playwright/test';
export async function selectFirstProduct(page: Page) {
    const firstProduct = page.locator('.ui-search-result__wrapper a').first();
    await firstProduct.click();
}