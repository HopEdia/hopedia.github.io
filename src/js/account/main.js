define(function () {
	//Do setup work here

	return function(paths) {
		switch(paths.shift()) {
			case 'validation':
				requirejs(['js/account/validation'], function(validation) {
					validation(paths)
				});
			break;
		}
	};
});
