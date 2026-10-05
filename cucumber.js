module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['src/support/**/*.js', 'features/step-definitions/**/*.js'],
    format: ['progress', 'allure-cucumberjs/reporter'],
    formatOptions: {
      resultsDir: 'allure-results',
    },
    publishQuiet: true,
  },
};