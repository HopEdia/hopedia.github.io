module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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

	// Default task(s).
	grunt.registerTask('default', ['bower:install', 'requirejs']);

};
