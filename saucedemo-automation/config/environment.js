require('dotenv').config();

const orangeHrmBaseUrl = process.env.ORANGEHRM_BASE_URL
  || 'https://opensource-demo.orangehrmlive.com';

function getCredentials(usernameKey, passwordKey) {
  const username = process.env[usernameKey];
  const password = process.env[passwordKey];
  const missing = [];

  if (!username) {
    missing.push(usernameKey);
  }
  if (!password) {
    missing.push(passwordKey);
  }
  if (missing.length) {
    throw new Error(`Set the required environment variable(s): ${missing.join(', ')}.`);
  }

  return { username, password };
}

module.exports = {
  orangeHrmBaseUrl: orangeHrmBaseUrl.replace(/\/+$/, ''),
  getOrangeHrmCredentials: () => getCredentials('ORANGEHRM_USERNAME', 'ORANGEHRM_PASSWORD'),
  orangeHrmInvalidPassword: process.env.ORANGEHRM_INVALID_PASSWORD || 'invalid-password',
  sauceDemoBaseUrl: (process.env.SAUCEDEMO_BASE_URL || 'https://www.saucedemo.com')
    .replace(/\/+$/, ''),
  getSauceDemoCredentials: () => getCredentials('SAUCEDEMO_USERNAME', 'SAUCEDEMO_PASSWORD'),
  headless: process.env.HEADLESS !== 'false',
};
