// index.js

// Generator index file
var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing(){
    this.composeWith(require.resolve('../api'));
  }

};

