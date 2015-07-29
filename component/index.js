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
        type: 'list',
        name: 'store',
        message: 'Do you want to include postal, rxmq or no store?',
        choices: ['postal', 'rxmq', 'none'],
        default: 'none',
        store: true,
    }, {
      type: 'list',
      name: 'style',
      message: 'Do you want to use less, scss, styl or plain css?',
      choices: ['less', 'scss', 'styl', 'css'],
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
    var cleanedName = _.kebabCase(this.name);
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/components/' + cleanedName + '/index.js'),
      {name: this.name, addStore: this.props.store, header: header, style: this.props.style}
    );
    this.fs.copyTpl(
      this.templatePath('template.jsx'),
      this.destinationPath('src/components/' + cleanedName + '/template.jsx'),
      {name: this.name, header: header}
    );
    this.fs.copyTpl(
      this.templatePath('style.less'),
      this.destinationPath('src/components/' + cleanedName + '/style.' + this.props.style),
      {name: this.name, header: header}
    );

    // add tests
    this.fs.copyTpl(
      this.templatePath('tests/test.jsx'),
      this.destinationPath('test/component-' + cleanedName + '.jsx'),
      {name: this.name, header: header}
    );
    // update test entry point
    var path = this.destinationPath('test/index.jsx');
    this.fs.copy(path, path, {
      process: function (content) {
        return content +
          'require(\'./component-' + cleanedName + '.jsx\');' +
          '\n';
      }
    });

    if (this.props.store && this.props.store !== 'none') {
      this.npmInstall([this.props.store], {save: true});
      this.fs.copyTpl(
        this.templatePath('store-' + this.props.store + '.js'),
        this.destinationPath('src/components/' + cleanedName + '/store.js'),
        {name: this.name, header: header}
      );

      // if we're using Rx, patch up webpack config
      if (this.props.store === 'rxmq') {
        // update routes
        var degugPath = this.destinationPath('webpack.config.js');
        var prodPath = this.destinationPath('webpack.config.prod.js');
        var updateWpConfig = function (content) {
          // check if it's already there
          content = content.toString();
          // load as module for simpler parsing
          var Module = module.constructor;
          var m = new Module();
          m._compile(content, 'file');
          var data = m.exports;
          var aliases = data.resolve.alias;
          if (aliases && aliases.rx) {
            return content;
          }
          // append rx resolution
          var newContent = content.replace('resolve: {', 'resolve: {\n\
        alias: {\n\
            rx: \'rx/dist/rx.lite.js\',\n\
        },');
          // return new file
          return newContent;
        };
        this.fs.copy(degugPath, degugPath, {process: updateWpConfig});
        this.fs.copy(prodPath, prodPath, {process: updateWpConfig});
      }
    }
  }
});
