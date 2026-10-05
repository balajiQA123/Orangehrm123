const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class RecruitmentPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'recruitment/viewCandidates', 'Recruitment');
  }
}

module.exports = RecruitmentPage;
