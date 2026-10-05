const OrangeHRMModulePage = require('./OrangeHRMModulePage');

class DirectoryPage extends OrangeHRMModulePage {
  constructor(page) {
    super(page, 'directory/viewDirectory', 'Directory');
  }
}

module.exports = DirectoryPage;
