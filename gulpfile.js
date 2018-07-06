const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');


requireDir('./gulp', {
  recurse: true // To include subdirectories - https://www.npmjs.com/package/require-dir
});


gulp.task('default', () => {
  runSequence(
    'generate-assets',
    'watch',
    'server'
  );
});


gulp.task('generate-assets', () => {
  runSequence(
    'clean',
    'copy-assets',
    'sass'
  );
});


gulp.task('watch', () => {
  runSequence(
    'watch-sass'
  );
});
