'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called the Turris docker-deploy subgenerator.');
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile-deploy')
    );
  }
});
