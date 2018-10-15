const gulp = require('gulp');

gulp.task('default', function () {
    gulp.src('./new-tab-sw.js')
        .pipe(gulp.dest('./docs/js/'));
});