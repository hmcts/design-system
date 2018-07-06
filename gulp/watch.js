const gulp = require('gulp');

gulp.task('watch-sass', () => {
  return gulp.watch([
    'app/assets/images/**',
    'app/assets/sass/*.scss'
  ], ['sass']);
});
