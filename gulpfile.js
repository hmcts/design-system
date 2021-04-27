const gulp = require('gulp');
const requireDir = require('require-dir');


requireDir('./gulp', {
  recurse: true // To include subdirectories - https://www.npmjs.com/package/require-dir
});

gulp.task('generate-assets', gulp.series(
    'clean',
    gulp.parallel(
      'copy-assets',
      'copy-component-javascript',
      'sass'
    )
  )
)

gulp.task('watch', gulp.parallel(
    'watch-sass',
    'watch-assets'
  )
)

gulp.task('default', gulp.series(
    'generate-assets',
    gulp.parallel(
      'watch',
      'server'
    )
  )
)
