const BasePage = require('./BasePage');
const config = require('../config/environment');
const checkoutData = require('../test-data/checkout');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.productName = page.getByText(checkoutData.product, { exact: true });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
    this.completeHeading = page.getByText('Thank you for your order!', { exact: true });
  }

  async openInventory() {
    await super.open(`${config.sauceDemoBaseUrl}/inventory.html`);
  }

  async addProductToCart(product = checkoutData.product) {
    const productCard = this.page.locator('.inventory_item')
      .filter({ has: this.page.getByText(product, { exact: true }) });
    await productCard.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async enterCustomerDetails(customer = checkoutData.customer) {
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.postalCodeInput.fill(customer.postalCode);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}

module.exports = CheckoutPage;
