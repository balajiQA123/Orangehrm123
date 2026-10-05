const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class LeavePage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'leave/viewLeaveList', 'Leave');
  }
}

module.exports = LeavePage;
