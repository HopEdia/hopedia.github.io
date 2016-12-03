define(function () {
	//Do setup work here

	return function(paths) {
		requirejs(['text!html/index.html'], function(html) {
			setContent(html)

		});
	};
});
