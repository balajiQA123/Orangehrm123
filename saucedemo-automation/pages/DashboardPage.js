const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class DashboardPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'dashboard/index', 'Dashboard');
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutMenuItem = page.getByText('Logout', { exact: true });
  }

  async signOut() {
    await this.userMenu.click();
    await this.logoutMenuItem.click();
  }
}

module.exports = DashboardPage;
