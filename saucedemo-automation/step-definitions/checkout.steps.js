const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const config = require('../config/environment');
const checkoutData = require('../test-data/checkout');

Given('I am signed in to SauceDemo', async function () {
  await this.pages.sauceDemoLogin.open();
  await this.pages.sauceDemoLogin.signIn();
  await expect(this.page).toHaveURL(`${config.sauceDemoBaseUrl}/inventory.html`);
});

When('I add the configured product to my cart', async function () {
  await this.pages.checkout.addProductToCart();
});

When('I open the shopping cart', async function () {
  await this.pages.checkout.openCart();
});

Then('the configured product is in the cart', async function () {
  await expect(this.pages.checkout.productName).toBeVisible();
});

When('I start checkout', async function () {
  await this.pages.checkout.startCheckout();
});

Then('the checkout information form is displayed', async function () {
  await expect(this.pages.checkout.firstNameInput).toBeVisible();
});

When('I submit the configured customer details', async function () {
  await this.pages.checkout.enterCustomerDetails(checkoutData.customer);
});

Then('the order overview contains the configured product', async function () {
  await expect(this.pages.checkout.productName).toBeVisible();
});

When('I place the order', async function () {
  await this.pages.checkout.finishOrder();
});

Then('the order confirmation is displayed', async function () {
  await expect(this.pages.checkout.completeHeading).toBeVisible();
});
