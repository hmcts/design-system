const gulp = require('gulp');
const requireDir = require('require-dir');


requireDir('./gulp', {
  recurse: true // To include subdirectories - https://www.npmjs.com/package/require-dir
});

gulp.task('generate-assets', gulp.series(
    'clean',
    'copy-assets',
    'copy-component-javascript',
    'sass'
  )
)

gulp.task('watch', gulp.series(
    'watch-sass',
    'watch-assets'
  )
)

gulp.task('default', gulp.series(
    'generate-assets',
    'watch',
    'server'
  )
)
