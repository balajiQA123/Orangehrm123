const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class BuzzPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'buzz/viewBuzz', 'Buzz');
  }
}

module.exports = BuzzPage;
