var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    clean       = require('gulp-clean');

// Static Server + watching scss/js/html files
gulp.task('serve', ['sass', 'indexFile', 'js'], function() {

    browserSync.init({
        server:{
          baseDir: './public/',
          routes: {
            '/node_modules': 'node_modules'
          }
        }
    });

    gulp.watch('src/**/**', ['clean', 'indexFile', 'sass', 'js']);
    gulp.watch(['public/index.html','public/js/*.js']).on('change', browserSync.reload);
});

gulp.task('clean', function() {
    return gulp.src('public/', {read: false})
           .pipe(clean());
});

gulp.task('indexFile',['clean'], function() {
    return gulp.src('src/index.html')
           .pipe(gulp.dest('public/'));
});

gulp.task('js',['clean'], function() {
    return gulp.src('src/js/**/*.js')
           .pipe(gulp.dest('public/js'));
});

gulp.task('sass',['clean'], function() {
    return gulp.src('src/scss/**/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('public/css'))
           .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
