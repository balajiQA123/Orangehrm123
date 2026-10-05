const BasePage = require('./BasePage');
const config = require('../config/environment');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  async open() {
    await super.open(`${config.orangeHrmBaseUrl}/web/index.php/auth/login`);
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async signIn(username, password) {
    const credentials = config.getOrangeHrmCredentials();
    username = username || credentials.username;
    password = password || credentials.password;
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
