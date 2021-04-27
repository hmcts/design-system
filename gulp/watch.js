const gulp = require('gulp');

gulp.task('watch-sass', (done) => {
	gulp.watch( [ 'app/assets/sass/**', 'app/components/**' ], { cwd: './' }, gulp.task('sass') ) 
	done();
 })

gulp.task('watch-assets', (done) => {
  gulp.watch([
    'app/assets/images/**',
    'app/assets/videos/**',
    'app/components/**',
    'app/assets/javascripts/**'],
    { cwd: './' }, gulp.series('copy-assets', 'copy-component-javascript') )
	done();
})







