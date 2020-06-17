var gulp = require('gulp');
var sass = require('gulp-sass')
var pipeline = require('readable-stream').pipeline;
var imagemin = require('gulp-imagemin');



gulp.task('scss',function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});



gulp.task('imagemin',function () {
    gulp.src('./src/scss/**/image/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'))
});



gulp.task('default', gulp.series(['scss', 'imagemin']));

gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', gulp.series(['scss', 'imagemin']));
});
