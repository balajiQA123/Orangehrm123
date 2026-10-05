const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor({ attach, log }) {
    this.attach = attach;
    this.log = log;
    this.browser = undefined;
    this.context = undefined;
    this.page = undefined;
    this.pages = undefined;
    this.scenarioId = undefined;
  }
}

setWorldConstructor(CustomWorld);
