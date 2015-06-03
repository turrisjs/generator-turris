var fs = require('fs');
var files = fs.readdirSync('./gulp');
var config = require('./buildConfig.js');
var tasks = [
    'serve',
    'build',
    'debug',
    'test'
];
var gulp = require('turris-gulp-tasks')(tasks, config);

// load custom tasks
files.forEach(function (file) {
    require('./gulp/' + file)(gulp)
});

gulp.task('default', ['debug', 'serve']);
gulp.task('deploy', ['build']);
