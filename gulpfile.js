const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');
const spritesmith = require('gulp.spritesmith');

// 1. html的压缩
// npm i gulp-htmlmin -D
gulp.task('htmlmin', function () {
    return gulp
        .src('./src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist/html'));
});


// 2. css压缩
// npm i gulp-cssmin -D
gulp.task('cssmin', function () {
    return gulp
        .src('./src/style/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));
})

// 3. 压缩js
// npm i gulp-uglify -D
gulp.task('jsmin', function () {
    return gulp
        .src(['./src/js/*.js', '!src/js/*.min.js'])
        .pipe(jsmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
});

// 4. 压缩图片
// npm i gulp-imagemin -D
gulp.task('imagemin', function () {
    return gulp
        .src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

// 5. 合并文件
// npm i gulp-concat -D
gulp.task('concat', function () {
    return gulp
        .src(['./src/js/index.js', './src/js/jquery.js'])
        .pipe(concat('all.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/js'));
});

// 6. less编译
// npm i gulp-less -D
gulp.task('less', function () {
    return gulp
        .src('./src/style/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/style'));
});

// 7. 文件监听
gulp.task('watchless', function () {
    gulp.watch('./src/style/*.less', gulp.series('less'));
});

// 自动构建
gulp.task('dev', function () {
    gulp.watch(['./src/html/*.html', './src/js/*.js', './src/style/*.less'], gulp.series('htmlmin', 'concat', 'less', 'cssmin'));
});

// 精灵图
// npm i gulp.spritesmith -D
gulp.task('sprite', function () {
    var spriteData = gulp.src('src/img/*').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('src/img'));
});