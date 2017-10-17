'use strict';

var path = require('path');
var request = require('request')
var mkdirp = require('mkdirp')
var fs = require('fs')
var del = require('del')
var async = require('async')
var rp = require('request-promise')

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');

var	uglify = require('gulp-uglify');
var	stripDebug = require('gulp-strip-debug')
var	minifyHTML = require('gulp-minify-html')
var	minifyCSS = require('gulp-minify-css')
var posts = require('./data/posts.json');
var argv = require('yargs').argv;
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

gulp.task('clean:dist', function(cb) {
	del('./dist/*', cb);
});

gulp.task('minify:html', function() {
	return gulp.src('./dist/*.html')
		.pipe(minifyHTML())
		.pipe(gulp.dest('./dist/'));
});


gulp.task('minify:core-js', function() {
	return gulp.src([
		'./public/js/blog.js',
		'./public/js/connect.js',
		'./public/js/dropdown.js',
		'./public/js/home.js',
		'./public/js/main.js',
		'./public/js/search.js',
		'./public/js/swipe.js',
		'./public/js/swiper.min.js',
		'./public/js/jquery-2.1.4.min.js',
		]).pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy:js-libs', function() {
	return gulp.src(['./public/js/*.js'])
		.pipe(gulp.dest('./dist/js/'));
})

gulp.task('copy:json-files', function() {
	return gulp.src(['./src/json/*.json'])
		.pipe(gulp.dest('./dist/json/'));
})

gulp.task('minify:css', function() {
	return gulp.src('./public/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css/'));
});


gulp.task('copy:uploads', function() {
	return gulp.src('./public/uploads/*')
		.pipe(gulp.dest('./dist/uploads/'));
});

gulp.task('copy:images', function() {
	return gulp.src('./public/images/*')
		.pipe(gulp.dest('./dist/images/'));
});

gulp.task('copy:host-js', function() {
	return gulp.src('./src/host.js')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  gulp.src('public/scss/**/*.scss')
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
    script: 'app.js'
    , ext: 'js html'
  });
  env({
	  vars: {
		NODE_ENV: 'development'
	  }
	});
  gulp.watch('public/scss/**/*.scss', ['sass']);
})

var createFile = function(place, content) {
	console.log('place', place)
	fs.writeFile('dist' + place, content, function(err) {
		if (err) console.log(err);
	})
}

var syncDir = function(route, cb) {
	console.log('called1')
}

var relPath = path.join(__dirname, 'dist')
gulp.task('routes', function () {
  nodemon({
    script: 'app.js'
    , ext: 'js html'
  });
  env({
	  vars: {
		NODE_ENV: 'development'
	  }
	});
	var routes = require('./staticRoutes');
	setTimeout(function() {
		var index = 2;
		for (var i = 2; i < posts.length; i+=2) {
			routes.push('/blog.html?page=' + index);
			index++;
		}
		for (var i in posts) {
			routes.push('/blog/posts/' + posts[i].permalink + '.html')
		}
		console.log('routes', routes)
		let rpRoutes = routes.map(function(r, index) {
			return rp('http://localhost:3020' + r);
		})
		Promise.all(rpRoutes).then(function(pages) {
			console.log('pages', pages)
			let tempPath = path.join(__dirname, 'dist');
			for (let i = 0; i < pages.length; i++) {
				let route = routes[i]
				console.log('route', route);
				if (route == '/') route = '/index.html';
				var routeDir = tempPath + route.substring(0, route.lastIndexOf('/'))
				if (fs.existsSync(routeDir)) {
					createFile(route, pages[i]);
				} else {
					mkdirp(routeDir, function(mkdirErr) {
						if (mkdirErr) console.log('mkdirpErr', mkdirErr);
						else createFile(route, pages[i]);
					})
				}
			}
		}).catch(function(err) {
			console.log('err', err)
			console.log('err with')
		})
	}, 6000)
})

gulp.task('gather', function() {
	gulp.start('clean:dist');
	setTimeout(function() {
		gulp.start('routes');
		gulp.start('minify:css');
		gulp.start('copy:uploads');
		gulp.start('copy:images');
		gulp.start('minify:html');
		gulp.start('minify:core-js');
	}, 500)
})

var pushS3Env = function(s3env) {
  s3env.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  s3env.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  s3env.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

gulp.task('pushs3', function() {
  if (argv.env && argv.env == 'production') {
    console.log('pushing to production s3');
    pushs3d(s3Prod);
  } else if (argv.env && argv.env == 'staging') {
    console.log('pushing to staging s3');
    pushs3d(s3Stage);
  } else if (argv.env && argv.env == 'dev') {
    console.error('dev is not currently an option, use --env production or --env staging');
  } else {
    console.error('must use --env production or --env staging');
  }

})