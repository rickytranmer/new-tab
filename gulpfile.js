const gulp = require('gulp');

gulp.task('default', function () {
    gulp.src('./service-worker.js')
        .pipe(gulp.dest('./build/js/'));
});