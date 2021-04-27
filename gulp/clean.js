const gulp = require('gulp');
const del = require('del');

gulp.task('clean', (done) => {
  return del(['public/*',
    '.port.tmp']).then(() => done())
});