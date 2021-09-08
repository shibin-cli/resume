const gulp = require('gulp')
const {
    series,
    src
} = gulp
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');




function buildStyles() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'));
}

function minifyHtml() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
}


function clean(cb) {
    console.log('clean')
    cb()
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
}
const build = series(
    clean,
    buildStyles,
    minifyHtml
)

module.exports = {
    build
}