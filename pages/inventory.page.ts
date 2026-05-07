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

    getProductImages() {
        return this.page.locator('.inventory_item_img img');
    }   

    async getImageSources() {
        const images = this.getProductImages();
        const count = await images.count();
        const sources:  string[] = [];

        for (let i = 0; i < count; i++) {
            const src = await images.nth(i).getAttribute('src');
            if (src) sources.push(src);
        }   
        return sources;

    }

    async addItemToCartByIndex(index: number) {
        this.page.locator('.inventory_item')
            .nth(index)
            .locator('button')
            .click();
    }

    getCartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    async removeItemFromCartByIndex(index: number) {
        this.page.locator('.inventory_item')
            .nth(index)
            .locator('button')
            .click();
    }

}    