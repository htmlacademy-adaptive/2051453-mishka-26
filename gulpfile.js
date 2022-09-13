import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import htmlmin from "gulp-htmlmin";
import cssMinify from "gulp-css-minify";
import squoosh from "gulp-squoosh"

// Styles

const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(cssMinify())
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML
const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'))
}

// Scripts

// export const scripts = () => {
//   return gulp.src('source/js/*.js')
//   .pipe(terser())
//   .pipe(gulp.dest('build/js'))
// }

// Images

export const images = () => {
  return gulp.src('source/img/*.jpg')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'))
}

// WebP

// SVG

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}

export default gulp.series(
  html, styles, server, watcher
);
