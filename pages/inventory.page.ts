import { Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    async clickFirstProduct() {
    await this.page.locator('.inventory_item_name').first().click();
    }

async clickProductByIndex(index: number) {
    await this.page.locator('.inventory_item_name').nth(index).click();
    }

    getItems() {
        return this.page.locator('.inventory_item');
    }
}    