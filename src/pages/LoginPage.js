class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async open() {
    const baseUrl = process.env.BASE_URL
      || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    await this.page.goto(baseUrl);
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async signIn(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;