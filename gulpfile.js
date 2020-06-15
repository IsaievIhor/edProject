var gulp = require('gulp');
var sass = require('gulp-sass')
var pipeline = require('readable-stream').pipeline;




gulp.task('scss',function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});




gulp.task('default', gulp.series(['scss']));

gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', gulp.series(['scss']));
});