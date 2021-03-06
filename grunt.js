module.exports = function (grunt) {

	grunt.initConfig({

		meta: {
			banner: '// ' + grunt.file.read('LICENSE').split("\n")[0]
		},

		concat: {
			dist: {
				src: ['<banner>', 'lib/observable.js'],
				dest: 'lib/observable.js'
			}
		},

		coffee: {
			compile: {
				files: {
					'lib/observable.js': 'lib/observable.coffee',
					'spec/spec.js': 'spec/spec.coffee'
				}
			}
		},

		mocha: {
			all: {
				src: 'spec/index.html',
				run: true
			}
		},

		watch: {
			files: ['lib/observable.coffee', 'spec/*'],
			tasks: 'coffee'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-mocha');

	grunt.registerTask('test', 'mocha');
	grunt.registerTask('release', 'concat coffee mocha');
	grunt.registerTask('default', 'release');

};