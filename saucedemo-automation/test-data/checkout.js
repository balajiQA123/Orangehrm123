require('../config/environment');

const defaults = require('./checkout.json');

module.exports = Object.freeze({
  product: process.env.SAUCEDEMO_PRODUCT || defaults.product,
  customer: Object.freeze({
    firstName: process.env.CHECKOUT_FIRST_NAME || defaults.customer.firstName,
    lastName: process.env.CHECKOUT_LAST_NAME || defaults.customer.lastName,
    postalCode: process.env.CHECKOUT_POSTAL_CODE || defaults.customer.postalCode,
  }),
});
