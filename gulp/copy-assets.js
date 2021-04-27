const gulp = require('gulp');

gulp.task('copy-assets', function () {
  return gulp.src(['!app/assets/sass{,/**/*}',
    'app/assets/**'])
    .pipe(gulp.dest( 'public/' ))
})