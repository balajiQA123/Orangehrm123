const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor({ attach }) {
    this.attach = attach;
    this.browser = undefined;
    this.context = undefined;
    this.page = undefined;
  }
}

setWorldConstructor(CustomWorld);