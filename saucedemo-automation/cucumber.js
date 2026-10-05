module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['support/**/*.js', 'step-definitions/**/*.js'],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'allure-cucumberjs/reporter',
    ],
    formatOptions: {
      resultsDir: 'reports/allure-results',
    },
    publishQuiet: true,
  },
};
