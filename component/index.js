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

    this.log('You called the Turris component subgenerator with the argument ' + this.name + '.');

    var prompts = [{
      type: 'input',
      name: 'license',
      message: 'Add header license? - no / yes (use LICENSE.md) / your file path',
      default: 'no',
      store: true, // save for future
    }, {
      type: 'confirm',
      name: 'store',
      message: 'Include basic postal.js store?',
      default: false,
      store: true,
    }, {
      type: 'input',
      name: 'style',
      message: 'Do you want to use less, scss, styl or plain css?',
      default: 'less',
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
      this.destinationPath('src/components/' + camelcaseName + '/index.js'),
      {name: this.name, addStore: this.props.store, header: header, style: this.props.style}
    );
    this.fs.copyTpl(
      this.templatePath('template.jsx'),
      this.destinationPath('src/components/' + camelcaseName + '/template.jsx'),
      {name: this.name, header: header}
    );
    this.fs.copyTpl(
      this.templatePath('style.less'),
      this.destinationPath('src/components/' + camelcaseName + '/style.' + this.props.style),
      {name: this.name, header: header}
    );

    // add tests
    this.fs.copyTpl(
      this.templatePath('tests/test.jsx'),
      this.destinationPath('test/component-' + camelcaseName + '.jsx'),
      {name: this.name, header: header}
    );
    // update test entry point
    var path = this.destinationPath('test/index.jsx');
    this.fs.copy(path, path, {
      process: function (content) {
        return content +
          'require(\'./component-' + camelcaseName + '.jsx\');' +
          '\n';
      }
    });

    if (this.props.store) {
      this.npmInstall(['postal'], {save: true});
      this.fs.copyTpl(
        this.templatePath('store.js'),
        this.destinationPath('src/components/' + camelcaseName + '/store.js'),
        {name: this.name, header: header}
      );
    }
  }
});
