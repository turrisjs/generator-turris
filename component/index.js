'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var fs = require('fs');
var header = fs.readFileSync('./LICENSE.md', 'utf8');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.header = header;
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Turris component subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    var camelcaseName = _.camelCase(this.name);
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/components/' + camelcaseName + '/index.js'),
      {name: this.name,
      header:this.header}
    );
    this.fs.copyTpl(
      this.templatePath('template.jsx'),
      this.destinationPath('src/components/' + camelcaseName + '/template.jsx'),
      {name: this.name,
      header: this.header}
    );
  }
});
