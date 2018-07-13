const gulp = require('gulp');

gulp.task('copy-assets', () => {
  return gulp.src('app/assets/images/**')
  .pipe(gulp.dest('public/images/'));
});

gulp.task('copy-assets', () => {
  return gulp.src([
    '!app/assets/sass{,/**/*}',
    'app/assets/**'
  ])
  .pipe(gulp.dest('public/'));
})
