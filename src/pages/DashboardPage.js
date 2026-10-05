class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutMenuItem = page.getByText('Logout', { exact: true });
  }

  async signOut() {
    await this.userMenu.click();
    await this.logoutMenuItem.click();
  }
}

module.exports = DashboardPage;