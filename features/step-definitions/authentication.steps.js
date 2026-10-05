const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../src/pages/LoginPage');
const DashboardPage = require('../../src/pages/DashboardPage');

Given('the OrangeHRM login page is open', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('the admin signs in with valid credentials', async function () {
  await this.loginPage.signIn(
    process.env.ORANGEHRM_USERNAME || 'Admin',
    process.env.ORANGEHRM_PASSWORD || 'admin123',
  );
  this.dashboardPage = new DashboardPage(this.page);
});

Then('the OrangeHRM dashboard is displayed', async function () {
  await expect(this.dashboardPage.dashboardHeading).toBeVisible();
});

When('the admin signs out', async function () {
  await this.dashboardPage.signOut();
});

Then('the OrangeHRM login page is displayed', async function () {
  await expect(this.loginPage.usernameInput).toBeVisible();
});