'use strict';

const path = require('path');
const request = require('request');
const mkdirp = require('mkdirp');
const fs = require('fs');
const del = require('del');
const rp = require('request-promise');

const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');

const uglify = require('gulp-uglify');
const stripDebug = require('gulp-strip-debug');
const minifyHTML = require('gulp-htmlmin');
const minifyCSS = require('gulp-clean-css');
const posts = require('./data/posts.json');
const argv = require('yargs').argv;

const exec = require('child_process').exec;

const s3Dev = `aws s3 sync ${__dirname}/dist s3://dev.publicntp.org/ --delete --expires "$(date -d '+3 months' --utc +'%Y-%m-%dT%H:%M:%SZ')"`;
const s3Stage = `aws s3 sync ${__dirname}/dist s3://website-staging.publicntp.org/ --delete --expires "$(date -d '+3 months' --utc +'%Y-%m-%dT%H:%M:%SZ')"`;
const s3Prod = `aws s3 sync ${__dirname}/dist s3://website-production.publicntp.org/ --delete --expires "$(date -d '+3 months' --utc +'%Y-%m-%dT%H:%M:%SZ')"`;

const clearStaging = `aws cloudfront create-invalidation --distribution-id E27DRANRNP31GP --paths '/*'`;
const clearProduction = `aws cloudfront create-invalidation --distribution-id E32DZUWHQTY5ZD --paths '/*'`;
const backupProduction = `aws s3 sync s3://website-production.publicntp.org backups/${new Date().getFullYear()}-${new Date().getMonth() +
    1}-${new Date().getDate()}`;

const fixDevCharset = `aws s3 cp \ s3://dev.publicntp.org/ \ s3://dev.publicntp.org/ \ --exclude '*' \ --include '*.html' \ --no-guess-mime-type \ --content-type="text/html; charset=utf-8" \ --metadata-directive="REPLACE" \ --recursive`;
const fixStagingCharset = `aws s3 cp \ s3://website-staging.publicntp.org/ \ s3://website-staging.publicntp.org/ \ --exclude '*' \ --include '*.html' \ --no-guess-mime-type \ --content-type="text/html; charset=utf-8" \ --metadata-directive="REPLACE" \ --recursive`;
const fixProdCharset = `aws s3 cp \ s3://website-production.publicntp.org/ \ s3://website-production.publicntp.org/ \ --exclude '*' \ --include '*.html' \ --no-guess-mime-type \ --content-type="text/html; charset=utf-8" \ --metadata-directive="REPLACE" \ --recursive`;

const fixDevFonts = `aws s3 cp \
       s3://dev.publicntp.org/ \
       s3://dev.publicntp.org/ \
       --exclude '*' \
       --include '*.woff2' \
       --no-guess-mime-type \
       --content-type="font/woff2" \
       --metadata-directive="REPLACE" \
       --recursive`;

const fixStagingFonts = `aws s3 cp \
       s3://website-staging.publicntp.org/ \
       s3://website-staging.publicntp.org/ \
       --exclude '*' \
       --include '*.woff2' \
       --no-guess-mime-type \
       --content-type="font/woff2" \
       --metadata-directive="REPLACE" \
       --recursive`;

const fixProdFonts = `aws s3 cp \
       s3://website-production.publicntp.org/ \
       s3://website-production.publicntp.org/ \
       --exclude '*' \
       --include '*.woff2' \
       --no-guess-mime-type \
       --content-type="font/woff2" \
       --metadata-directive="REPLACE" \
       --recursive`;

// Old PNTP Server Commands
// const s3Stage =
//     'aws s3 sync ' +
//     __dirname +
//     '/dist' +
//     ' s3://staging.publicntp.org/ --delete';
// const s3Dev = `aws s3 sync ${__dirname}/dist s3://dev.publicntp.org/ --delete --expires "$(date -d '+3 months' --utc +'%Y-%m-%dT%H:%M:%SZ')"`;
// const s3Prod = `aws s3 sync ${__dirname}/dist s3://publicntp.org/ --delete --expires "$(date -d '+3 months' --utc +'%Y-%m-%dT%H:%M:%SZ')"`;
// const clearStaging = `aws cloudfront create-invalidation --distribution-id E2DMT4MYD734FG --paths '/*'`;
// const clearProduction = `aws cloudfront create-invalidation --distribution-id E3A3QPXYOQ5VVV --paths '/*'`;
// const backupProduction = `aws s3 sync s3://publicntp.org backups/${new Date().getFullYear()}-${new Date().getMonth() +
//     1}-${new Date().getDate()}`;

gulp.task('clean:dist', function (cb) {
    del('./dist/*', cb);
});

gulp.task('minify:html', function () {
    return gulp
        .src('./dist/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify:core-js', function () {
    var jsList = [
        './public/js/blog.js',
        './public/js/connect.js',
        './public/js/dropdown.js',
        './public/js/donate.js',
        './public/js/home.js',
        './public/js/main.js',
        './public/js/search.js',
        './public/js/swipe.js',
        './public/js/swiper.min.js',
        './public/js/jquery-2.1.4.min.js'
    ];
    return gulp
        .src(jsList)
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy:js-libs', function () {
    return gulp.src(['./public/js/*.js']).pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy:json-files', function () {
    return gulp.src(['./src/json/*.json']).pipe(gulp.dest('./dist/json/'));
});

gulp.task('copy:root-files', function () {
    return gulp
        .src(['./public/robots.txt', './public/sitemap.xml'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify:css', function () {
    return gulp
        .src('./public/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy:uploads', function () {
    return gulp.src('./public/uploads/*').pipe(gulp.dest('./dist/uploads/'));
});

gulp.task('copy:images', function () {
    return gulp.src('./public/images/*').pipe(gulp.dest('./dist/images/'));
});

gulp.task('copy:fonts', function () {
    return gulp.src('./public/fonts/*').pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('copy:documents', function () {
    return gulp.src('./public/documents/*').pipe(gulp.dest('./dist/documents/'));
});

gulp.task('copy:host-js', function () {
    return gulp.src('./src/host.js').pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
    gulp
        .src('public/scss/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/scss/**/*.scss', ['sass']);
});

gulp.task('dev', function () {
    nodemon({
        script: 'app.js',
        ext: 'js html'
    });
    env({
        vars: {
            NODE_ENV: 'development'
        }
    });
    gulp.watch('public/scss/**/*.scss', ['sass']);
});

var createFile = function (place, content) {
    console.log('place', place);
    fs.writeFile('dist' + place, content, function (err) {
        if (err) console.log(err);
    });
};

gulp.task("generateRSS", function(){
    exec("python3 ./rss/generateRSS.py ./data/posts.json dist/blog/posts/rss.xml",function (err, stdout, stderr) {
        console.log('out', stdout);
        if (err) console.log('err', err);
    });
});

gulp.task('routes', function () {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        delay: "2500"
    });
    env({
        vars: {
            NODE_ENV: argv.env
            // NODE_ENV: 'development'
        }
    });
    var routes = require('./staticRoutes');
    setTimeout(function () {
        // Paging logic here
        // var index = 2;
        // for (var i = 2; i < posts.length; i += 2) {
        //     routes.push('/blog.html?page=' + index);
        //     index++;
        // }

        // for (var i in posts) {
        //     routes.push('/blog/posts/' + posts[i].permalink + '.html');
        // }
        posts.map(post => {
            routes.push('/blog/posts/' + post.permalink + '.html');
        });

        console.log('routes', routes);
        let rpRoutes = routes.map(function (r) {
            return rp('http://localhost:3000' + r);
        });

        Promise.all(rpRoutes)
            .then(function (pages) {
                console.log('pages', pages);
                let tempPath = path.join(__dirname, 'dist');
                routes.map((route, i) => {
                    console.log('route', route);
                    if (route == '/') route = '/index.html';
                    // if (route == '/index-dev' && argv.env == 'dev') route = '/index.html';
                    // if (route == '/index-staging' && argv.env == 'staging') route = '/index.html';


                    var routeDir = tempPath + route.substring(0, route.lastIndexOf('/'));
                    if (fs.existsSync(routeDir)) {
                        createFile(route, pages[i]);
                    } else {
                        mkdirp(routeDir, function (mkdirErr) {
                            if (mkdirErr) console.log('mkdirpErr', mkdirErr);
                            else createFile(route, pages[i]);
                        });
                    }
                });
            })
            .catch(function (err) {
                console.log('err', err);
                console.log('err with');
            });
    }, 6000);
});

gulp.task('gather', function () {
    gulp.start('clean:dist');
    setTimeout(function () {
        gulp.start('routes');
        gulp.start('minify:css');
        gulp.start('sass');
        gulp.start('copy:uploads');
        gulp.start('copy:images');
        gulp.start('copy:fonts');
        gulp.start('copy:documents');
        gulp.start('minify:html');
        gulp.start('minify:core-js');
        gulp.start('copy:root-files');
    }, 1000);
});

var pushS3Env = function (s3env) {
    exec(s3env, function (err, stdout, stderr) {
        console.log('out', stdout);
        if (err) console.log('err', err);
    });
};

gulp.task('pushs3', function () {
    if (argv.env && argv.env == 'production') {
        console.log('pushing to production s3');
        pushS3Env(backupProduction);
        pushS3Env(s3Prod);
        pushS3Env(clearProduction);
        setTimeout(function () {
            pushS3Env(fixProdFonts);
            pushS3Env(fixProdCharset);
        }, 2000);
    } else if (argv.env && argv.env == 'staging') {
        console.log('pushing to staging s3');
        pushS3Env(s3Stage);
        pushS3Env(clearStaging);
        setTimeout(function () {
            pushS3Env(fixStagingFonts);
            pushS3Env(fixStagingCharset);
        }, 2000);
    } else if (argv.env && argv.env == 'dev') {
        console.log('pushing to dev s3');
        pushS3Env(s3Dev);
        setTimeout(function () {
            pushS3Env(fixDevFonts);
            pushS3Env(fixDevCharset);
        }, 2000);
    } else {
        console.error('must use --env production or --env staging');
    }
});

gulp.task('ship', function () {
    // Gather
    gulp.start('clean:dist');

    setTimeout(function () {
        gulp.start('routes');
        gulp.start('minify:css');
        gulp.start('sass');
        gulp.start('copy:uploads');
        gulp.start('copy:images');
        gulp.start('copy:fonts');
        gulp.start('copy:documents');
        gulp.start('minify:html');
        gulp.start('minify:core-js');
        gulp.start('copy:root-files');
    }, 1000);

    // pushs3
    setTimeout(function () {
        if (argv.env && argv.env == 'production') {
            console.log('pushing to production s3');
            pushS3Env(backupProduction);
            pushS3Env(s3Prod);
            pushS3Env(clearProduction);
        } else if (argv.env && argv.env == 'staging') {
            console.log('pushing to staging s3');
            pushS3Env(s3Stage);
            pushS3Env(clearStaging);
        } else if (argv.env && argv.env == 'dev') {
            console.log('pushing to dev s3');
            pushS3Env(s3Dev);
        } else {
            console.error('must use --env production or --env staging');
        }
    }, 60000);
});
