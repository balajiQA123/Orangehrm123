const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class ClaimPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'claim/viewAssignClaim', 'Claim');
  }
}

module.exports = ClaimPage;
