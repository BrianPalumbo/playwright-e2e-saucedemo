import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    storageState: 'storageState.json',
    headless: false,
  },
});