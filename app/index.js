'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the breathtaking ' + chalk.red('Turris') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname,
    }, {
      type: 'input',
      name: 'description',
      message: 'Your project description',
      default: 'No description yet',
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

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('buildConfig.js'),
        this.destinationPath('buildConfig.js')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'),
        this.props
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('webpack.config.prod.js'),
        this.destinationPath('webpack.config.prod.js')
      );

      // folders
      this.fs.copy(
        this.templatePath('gulp'),
        this.destinationPath('gulp')
      );
      this.fs.copyTpl(
        this.templatePath('src'),
        this.destinationPath('src'),
        this.props
      );
      this.fs.copy(
        this.templatePath('style/main.less'),
        this.destinationPath('style/main.' + this.props.style)
      );
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );
      this.fs.copy(
          this.templatePath('LICENSE.md'),
          this.destinationPath('LICENSE.md')
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
