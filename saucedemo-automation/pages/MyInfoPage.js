const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class MyInfoPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'pim/viewMyDetails', 'PIM');
  }
}

module.exports = MyInfoPage;
