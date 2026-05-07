import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}


    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        
    }   

    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }

getErrorLocator() {
        return this.page.locator('.error-message-container');
    }

    async getErrorMessage(): Promise<string> {
        const errorLocator = this.page.locator('.error-message-container');
        return await errorLocator.textContent() || '';
    }

    async isErrorVisible(): Promise<boolean> {
        return await this.page.locator('.error-message-container').isVisible();
    }
}
