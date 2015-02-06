var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var connectLiveReload = require('connect-livereload');
var tinylr;

gulp.task('express', function(){
    var express = require('express');
    var app = express();
    app.use(connectLiveReload({port: 3002}));
    app.use(express.static(__dirname));
    app.listen(3000, function(){
       console.log("server is running on port 3000");
    });
});

gulp.task('sass', function(){
    gulp.src('styles/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('styles'));
});

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}


gulp.task('watch', function(){
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('*.html', notifyLiveReload);
    gulp.watch('styles/*.css', notifyLiveReload);
});

gulp.task('live_reload', function(){
    tinylr = require('tiny-lr')();
    tinylr.listen(3002);
});





gulp.task('default', ['sass', 'express', 'live_reload', 'watch'], function(){

});