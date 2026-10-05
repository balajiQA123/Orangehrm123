const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class AdminPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'admin/viewAdminModule', 'Admin');
  }
}

module.exports = AdminPage;
