import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    storageState: 'storageState.json',
    headless: true,

  
  }, 

reporter: 'html',
});