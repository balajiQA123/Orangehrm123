const BasePage = require('./BasePage');
const config = require('../config/environment');

class SauceDemoLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async open() {
    await super.open(config.sauceDemoBaseUrl);
  }

  async signIn(username, password) {
    const credentials = config.getSauceDemoCredentials();
    username = username || credentials.username;
    password = password || credentials.password;
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = SauceDemoLoginPage;
