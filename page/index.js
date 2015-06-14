'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var getHeader = require('../common/util/header').getHeader;

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var done = this.async();

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Turris page subgenerator with the argument ' + this.name + '.');

    var prompts = [{
      type: 'input',
      name: 'license',
      message: 'Add header license? - no / yes (use LICENSE.md) / your file path',
      default: 'no',
      store: true, // save for future
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var header = getHeader(this.props.license);
    var camelcaseName = _.camelCase(this.name);
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/pages/' + camelcaseName + '/index.js'),
      {name: this.name, header: header}
    );
    this.fs.copyTpl(
      this.templatePath('template.jsx'),
      this.destinationPath('src/pages/' + camelcaseName + '/template.jsx'),
      {name: this.name, header: header}
    );
    // update routes
    var path = this.destinationPath('src/routes.js');
    var capitalizedName = _.capitalize(camelcaseName);
    this.fs.copy(path, path, {
      process: function (content) {
        // add new import
        var re = /import(.+?);/;
        var newString = 'import ' + capitalizedName;
        newString += ' from \'./pages/' + camelcaseName + '/index.js\';\nimport$1;';
        var newContent = content.toString().replace(re, newString);
        // add new route to array
        newString = 'let routes = [\n    ' + capitalizedName + ',';
        re = /let routes = \[/;
        newContent = newContent.replace(re, newString);
        // return new file
        return newContent;
      }
    });
  }
});
