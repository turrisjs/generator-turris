var gulp = require('turris-gulp-tasks')([
    'serve',
    'build',
    'debug',
    'test',
], require('./buildConfig.js'));
// load custom tasks
require('./gulp/custom-task.js')(gulp);

gulp.task('default', ['debug', 'serve']);
gulp.task('deploy', ['build']);
