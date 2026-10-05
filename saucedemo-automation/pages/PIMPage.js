const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class PIMPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'pim/viewEmployeeList', 'PIM');
  }
}

module.exports = PIMPage;
