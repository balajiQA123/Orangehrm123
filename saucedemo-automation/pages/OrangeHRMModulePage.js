const BasePage = require('./BasePage');
const config = require('../config/environment');

class OrangeHRMModulePage extends BasePage {
  constructor(page, route, title) {
    super(page);
    this.route = route;
    this.title = title;
    this.heading = page.locator('.oxd-topbar-header-breadcrumb-module');
  }

  async open() {
    await super.open(`${config.orangeHrmBaseUrl}/web/index.php/${this.route}`);
  }

  async isDisplayed() {
    if (!(await this.heading.isVisible())) {
      return false;
    }
    return (await this.heading.textContent())?.trim() === this.title;
  }
}

module.exports = OrangeHRMModulePage;
