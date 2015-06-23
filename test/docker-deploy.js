'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Turris:docker-deploy', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../docker-deploy'))
      .withArguments('name')
      .withOptions({ skipInstall: true, force: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'Dockerfile-deploy'
    ]);
  });
});
