const { series, src, dest } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const { resolve } = require('./utils');

// 编译 less
function css() {
  return src(resolve('../packages/styles/index.less'))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(clean())
    .pipe(rename('selfui.css'))
    .pipe(dest(resolve('../lib/styles')));
}

// 拷贝字体图标文件
function fonts() {
  return src(resolve('../packages/styles/fonts/*.*')).pipe(dest(resolve('../lib/styles/fonts')));
}

exports.default = series(css, fonts);
