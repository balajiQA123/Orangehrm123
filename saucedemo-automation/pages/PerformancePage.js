const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class PerformancePage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'performance/searchEvaluatePerformanceReview', 'Performance');
  }
}

module.exports = PerformancePage;
