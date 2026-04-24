import { Page } from '@playwright/test';
export async function searchProduct(page: Page, term: string) {
    await page.getByRole('combobox').fill(term);
    await page.keyboard.press('Enter');
}