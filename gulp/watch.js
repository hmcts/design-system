const gulp = require('gulp');

gulp.task('watch-sass', () => {
  return gulp.watch([
    'app/assets/sass/**/*.scss',
    'app/components/**/*.scss'
  ], ['sass']);
});

gulp.task('watch-assets', () => {
  return gulp.watch([
    'app/assets/images/**',
    'app/components/**',
    'app/assets/javascripts/**'], {cwd: './'}, ['copy-assets', 'copy-component-javascript']);
});