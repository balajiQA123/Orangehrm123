const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class TimePage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'time/viewEmployeeTimesheet', 'Time');
  }
}

module.exports = TimePage;
