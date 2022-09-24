// import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import less from 'gulp-less';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import browser from 'browser-sync';
// import csso from 'postcss-csso';
// import rename from 'gulp-rename';
// import htmlmin from 'gulp-htmlmin';
// import terser from 'gulp-terser';
// import svgmin from 'gulp-svgmin';

// // Styles
// export const styles = () => {
//   return gulp.src('source/less/style.less', { sourcemaps: true })
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer(),
//       csso()
//     ]))
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
//     .pipe(browser.stream());
// }

// //HTML
// const htmlMinimizer = () => {
//   return gulp.src('source/*.html')
//     .pipe(htmlmin ({ collapseWhitespace: true }))
//     .pipe(gulp.dest('build'));
// }

// //Scripts
// const jsMinimizer = () => {
//   return gulp.src('source/js/*.js')
//     .pipe(terser())
//     .pipe(gulp.dest('build/js'));
// }

// //Images

// const imagesCopy = () => {
//   return gulp.src('source/img/*.{png,jpg}')
//     .pipe(gulp.dest('build/img'))
// }

// //SVG
// const svgOptimizer = () => {
//   return gulp.src(['source/img/*.svg', '!source/img/sprite.svg'])
//     .pipe(svgmin())
//     .pipe(gulp.dest('build/img'));
// }

// const svgSprite = () => {
//   return gulp.src('source/img/sprite.svg')
//     .pipe(gulp.dest('build/img'));
// }

// //Copy
// const copy = (done) => {
//   gulp.src([
//     'source/fonts/*.{woff2,woff}',
//     'source/*.ico',
//     'source/*.svg',
//     'source/*webmanifest',
//     'source/*.{png,jpg}',
//   ], {
//   base: 'source'
//   })
//     .pipe(gulp.dest('build'))
//     done();
// }

// // Server
// const server = (done) => {
//   browser.init({
//     server: {
//       baseDir: 'build'
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// }

// // Watcher
// const watcher = () => {
//   gulp.watch('source/sass//*.scss', gulp.series(styles));
//   gulp.watch('source/js/**/*.js', gulp.series(jsMinimizer));
//   gulp.watch('source/*.html', gulp.series(htmlMinimizer));
//   gulp.watch('source/*.html').on('change', browser.reload);
// }

// // Build
// export const build = gulp.series(
//   copy,
//   imagesCopy,
//   gulp.parallel(
//   styles,
//   htmlMinimizer,
//   jsMinimizer,
//   svgOptimizer,
//   svgSprite,
//   ),
// );

// // Default
// export default gulp.series(
//   copy,
//   imagesCopy,
//   gulp.parallel(
//     styles,
//     htmlMinimizer,
//     jsMinimizer,
//     svgOptimizer,
//     svgSprite,
//   ),
//   gulp.series(
//     server,
//     watcher
// ));

// import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import less from 'gulp-less';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import browser from 'browser-sync';
// import csso from 'postcss-csso';

// // Styles
// export const styles = () => {
//   return gulp.src('source/less/style.less', { sourcemaps: true })
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer(),
//       csso()
//     ]))
//     .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
//     .pipe(browser.stream());
// }

// // Server
// const server = (done) => {
//   browser.init({
//     server: {
//       baseDir: 'source'
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// }

// // Watcher
// const watcher = () => {
//   gulp.watch('source/less/*.less', gulp.series(styles));
//   gulp.watch('source/*.html').on('change', browser.reload);
// }

// // Default
// export default gulp.series(
//     styles, server, watcher
// );

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
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
  styles, server, watcher
);
