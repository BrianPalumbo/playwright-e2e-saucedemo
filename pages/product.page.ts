import { Page } from '@playwright/test';

export class ProductPage {
    constructor(private page: Page) {}

    getTitle() {
        return this.page.locator('.inventory_details_name');
    }   
}
    