// Include gulp
var gulp = require('gulp');

// Create 404 Task
gulp.task('custom_error', function () {
    return gulp.src('./src/404.html').
        pipe( gulp.dest('./dist') );
});