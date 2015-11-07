var
  gulp           = require('gulp');
  postcss        = require('gulp-postcss');
  vars           = require('postcss-simple-vars');
  postcss        = require('gulp-postcss');
  concat         = require('gulp-concat');
  fs             = require("fs");
  postcssImport  = require('postcss-import');
  url            = require("postcss-url");
  sourcemaps     = require('gulp-sourcemaps');
  autoprefixer   = require('autoprefixer');
  atImport       = require("postcss-import");
  babel          = require("gulp-babel");
  processors     = [
                   require('postcss-mixins'),
                   require('postcss-simple-vars'),
                   require('postcss-nested'),
                   require('postcss-import'),
                   require('autoprefixer')({ browsers: ['last 2 versions', '> 2%'] })
  ];

gulp.task("babel", function () {
  return gulp.src("./public/javascripts/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./public/bundle/javascripts/"));
});

// Watch task
gulp.task('watch', function(){
  gulp.watch('./public/javascripts/*.js', ['babel']);
});

gulp.task('default', ["watch", "babel"]);
