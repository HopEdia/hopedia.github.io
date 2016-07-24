({
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
	fileExclusionRegExp: /^build\.js$|^sass$/
})
