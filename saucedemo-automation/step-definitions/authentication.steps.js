const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const config = require('../config/environment');

Given('the OrangeHRM login page is open', async function () {
  await this.pages.login.open();
});

When('I sign in to OrangeHRM with valid credentials', async function () {
  await this.pages.login.signIn();
});

Then('the OrangeHRM dashboard is displayed', async function () {
  await expect(this.pages.modules.Dashboard.heading).toBeVisible();
});

When('I sign in to OrangeHRM with an invalid password', async function () {
  const { username } = config.getOrangeHrmCredentials();
  await this.pages.login.signIn(
    username,
    config.orangeHrmInvalidPassword,
  );
});

Then('an OrangeHRM login error is displayed', async function () {
  await expect(this.pages.login.errorMessage).toBeVisible();
});

When('I sign out of OrangeHRM', async function () {
  await this.pages.modules.Dashboard.signOut();
});

Then('the OrangeHRM login form is displayed', async function () {
  await expect(this.pages.login.usernameInput).toBeVisible();
});

Given('I am signed in to OrangeHRM', async function () {
  await this.pages.login.open();
  await this.pages.login.signIn();
  await expect(this.pages.modules.Dashboard.heading).toBeVisible();
});

When('I open the {string} page', async function (pageName) {
  const modulePage = this.pages.modules[pageName];
  if (!modulePage) {
    throw new Error(`No OrangeHRM page object is registered for "${pageName}".`);
  }
  await modulePage.open();
});

Then('the {string} page is displayed', async function (pageName) {
  const modulePage = this.pages.modules[pageName];
  if (!modulePage) {
    throw new Error(`No OrangeHRM page object is registered for "${pageName}".`);
  }
  await expect.poll(() => modulePage.isDisplayed()).toBe(true);
});

Then('administrator verification is required to open the Maintenance page', async function () {
  await expect.poll(
    () => this.pages.modules.Maintenance.isAccessVerificationDisplayed(),
  ).toBe(true);
});
