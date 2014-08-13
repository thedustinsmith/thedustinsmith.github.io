module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			dev: {
				options: {
					port: 8000,
					base: './'
				}
			}
		},

		clean: {
			all: ['dist', './*.html', './js', './css']
		},

		assemble: {
			options: {
				layout: 'page.hbs',
				layoutdir: 'src/layouts/',
				flatten: true
			},
			dist: {
				files: {
					'./': ["src/pages/**/*.hbs" ]
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/assets/js/**/*.js'],
				dest: './js/all.min.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'js/all.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		copy: {
			dist: {
				files: [
					{ expand: true, flatten: true, src: 'src/assets/static/js/**', dest: './js/', filter: 'isFile' },
					{ expand: true, flatten: true, src: 'src/assets/static/*.*', dest: './' }

				]
			}
		},

		less: {
			development: {
				options: {
					paths: ['assets/css'],
					cleancss: true
				},
				files: {
					'./css/all.min.css': ['src/assets/css/all.less']
				}
			}
		},

		watch: {
			assets: {
				files: ['src/assets/**/*'],
				tasks: ['concat', 'uglify', 'less']
			},
			src: {
				files: ['src/layouts/**/*', 'src/pages/**/*'],
				tasks: ['assemble']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-newer');

	/* grunt tasks */
	grunt.registerTask('default', ['clean', 'copy', 'concat', 'uglify', 'less', 'assemble', 'connect', 'watch']);
};