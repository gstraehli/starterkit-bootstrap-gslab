/* gulpfile.js */

   const gulp = require('gulp');
   const sass = require('gulp-sass');
   const inject = require('gulp-inject');
   const cssbeautify = require('gulp-cssbeautify');
   const autoprefixer = require('gulp-autoprefixer');

// source and distribution folder
const
    source = 'src/',
    dest = 'dist/';

// Bootstrap scss source
const bootstrapSass = {
    in: './node_modules/bootstrap-sass/'
};

// jQuery locate source
const jqueryLoc = {
    in: './node_modules/jquery/'
};

// fonts
const fonts = {
    in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
    out: dest + 'fonts/'
};

// css source file: .scss files
const scss = {
    in: source + 'scss/main.scss',
    out: dest + 'css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};
// js files
const js = {
    in: [source + 'js/*.js', jqueryLoc.in + 'dist/jquery.js', bootstrapSass.in + 'assets/javascripts/bootstrap.js'],
    out: dest + 'js/',
    watch: source + 'js/**/*',
};


// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});
// compile js
gulp.task('js', function(){
    return gulp.src(js.in)
        .pipe(gulp.dest(js.out));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(cssbeautify({
            autosemicolon: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(scss.out));
});

// injector
gulp.task('index', function () {
    const target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    const sources = gulp.src(['./dist/**/*.js', './dist/**/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest(''));
});

// default task
gulp.task('default', ['sass'], function () {
    gulp.watch(scss.watch, ['sass']);
});
