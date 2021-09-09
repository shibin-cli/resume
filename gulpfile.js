const gulp = require('gulp')
const {
    series,
    src,
    watch
} = gulp
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css')
const htmlmin = require('gulp-htmlmin')
const borwserSync = require('browser-sync')
const del = require('del')

const clean = () => {
    return del(['dist'])
}

function buildStyles() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'));
}

const page = () => {
    return src('src/*.html', {
            base: 'src'
        })
        .pipe(gulp.dest('dist'))
}

function minifyHtml() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments:true
        }))
        .pipe(gulp.dest('dist'))
}


const bs = borwserSync.create()
const staticServe = () => {
    watch('src/**/*.scss', buildStyles)
    watch('src/*.html', page)
    return bs.init({
        notify: false,
        open: false,
        port: '3000',
        files: 'dist/**',
        ui: false,
        server: {
            baseDir: 'dist',
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    })
}

const build = series(
    clean,
    buildStyles,
    minifyHtml
)
const serve = series(
    clean,
    buildStyles,
    page,
    staticServe
)

module.exports = {
    build,
    serve
}