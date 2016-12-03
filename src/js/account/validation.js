define(function () {
	//Do setup work here

	return function(paths) {
		requirejs(['text!html/account/validation.html'], function(html) {
			setContent(html)
			document.getElementById('submit').addEventListener("click", function(event) {
				event.preventDefault();
				if(paths!=null) {
					post(
						{"email": document.getElementById('email').value,
						"password": document.getElementById('password').value,
						"validationToken": paths.join('/')}, //we need get everything, including /
						'getToken',
						function(res) {
							console.log(1)
						});
				}
			});
		});
	};
});
