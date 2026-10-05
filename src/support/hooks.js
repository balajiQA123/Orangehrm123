const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(30_000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
  });
  this.context = await this.browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  try {
    if (scenario.result?.status !== 'PASSED' && this.page && !this.page.isClosed()) {
      await this.attach(await this.page.screenshot(), 'image/png');
    }
  } finally {
    await this.context?.close();
    await this.browser?.close();
  }
});