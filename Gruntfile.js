/*global module:false*/

module.exports = function(grunt) {
	'use strict';

	// Project configuration
	grunt.initConfig({

		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

		// Task configuration
		clean: {
			tmp: {
				src: ['dist/css/.tmp', 'dist/js/.tmp']
			},
			dist: {
				src: ['dist']
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			js: {
				src: [
                    'js/vendor/jquery-2.0.0.min.js',
                    'js/main.js'
				],
				dest: 'dist/js/.tmp/script.js'
			},
			css: {
				src: [ 
                    'css/normalize.css',
                    'css/main.css'
                ],
				dest: 'dist/css/.tmp/style.css'
			}
		},
        htmlmin: {
            dist: {
                options: {
                    //collapseWhitespace: true,
                    //collapseBooleanAttributes: true,
                    //removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    //useShortDoctype: true,
                    removeEmptyAttributes: true,
                    //removeOptionalTags: true
                },
                files: {
					'dist/index.html': 'index.html',
					'dist/404.html': '404.html',
					'dist/experiment/index.html': 'experiment/index.html'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/style.min.css': '<%= concat.css.dest %>'
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'dist/img'
                }]
            }
        },
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.js.dest %>',
				dest: 'dist/js/script.min.js'
			}
		},
		rev: {
			files: {
				src: ['dist/js/**/*.js', 'dist/css/**/*.css']
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
                    dest: 'dist',
					src: [
						'js/vendor/modernizr-*.js',
                        'apple-touch-icon-*.png',
						'*.{ico,txt}',
						'.htaccess',
						'fonts/**/*',
						'CNAME'
					]
				}]
			}
		}
	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task
	grunt.registerTask('default', [
		'clean:dist',
		'concat',
		'htmlmin',
		'cssmin',
		'imagemin',
		'uglify',
		'clean:tmp',
		'copy'
	]);

};