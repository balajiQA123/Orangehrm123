const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class MaintenancePage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'maintenance/purgeEmployee', 'Maintenance');
    this.accessHeading = page.getByText('Administrator Access', { exact: true });
    this.accessPasswordInput = page.locator('input[type="password"]');
    this.accessConfirmButton = page.getByRole('button', { name: 'Confirm' });
  }

  async isDisplayed() {
    if (await this.accessHeading.isVisible()) {
      return true;
    }
    return super.isDisplayed();
  }

  async isAccessVerificationDisplayed() {
    return Promise.all([
      this.accessHeading.isVisible(),
      this.accessPasswordInput.isVisible(),
      this.accessConfirmButton.isVisible(),
    ]).then((states) => states.every(Boolean));
  }
}

module.exports = MaintenancePage;
