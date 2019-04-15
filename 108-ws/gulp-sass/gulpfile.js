const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
}); 

// Po bledach watch sie zatrzymuje i trzeba ponownie go uruchomic. gulp watch
// Aby wyjsc z procesu trzeba kliknac CTRL 