'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Turris subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    var camelcaseName = _.camelCase(this.name);
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/components/' + camelcaseName + '/index.js'),
      {name: this.name}
    );
    this.fs.copyTpl(
      this.templatePath('template.jsx'),
      this.destinationPath('src/components/' + camelcaseName + '/template.jsx'),
      {name: this.name}
    );
  }
});
