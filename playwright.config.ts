import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    storageState: 'storageState.json',
    headless: false,

  launchOptions: {
    slowMo: 1000,// Slow down actions by 100ms to see them more clearly
  },
},  

reporter: 'html',
});