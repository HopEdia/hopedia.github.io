module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'./src/css/font-awesome/font-awesome.css': './src/sass/font-awesome/font-awesome.scss',
					'./src/css/palet.css': './src/sass/palet.sass',
					'./src/css/style.css': './src/sass/style.sass',
					'./src/css/beer.css': './src/sass/beer.sass',
					'./src/css/account/validation.css': './src/sass/account/validation.sass'

				}
			}
		},
		requirejs: {
			compile: {
				options: {
					appDir: "./src",
					baseUrl: "./",
					dir: ".",
					modules: [
						{
							name: "js/main"
						}
					],
					allowSourceOverwrites: "true",
					keepBuildDir: "true",
					fileExclusionRegExp: /^build\.js$|^sass$|^src|^node_modules|^Gruntfile\.js/
				}
			}
		},
		bower: {
			install: {
			}
		}
	});

	// Load the plugin that provides the "requirejs" task.
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-sass');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'bower:install', 'requirejs']);

};
