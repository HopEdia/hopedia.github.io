document.onreadystatechange = function() {
var apiUrl = 'http://localhost:8080/',
    main = document.getElementById(̈́'main-content')
function post(criteria, ressource, cb) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', apiUrl+ressource)
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.onreadystatechange = function (req) {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			cb(JSON.parse(req.responseText))
		}
	};
	xhr.send(JSON.stringify(criteria));
}

var searchField = document.getElementById('search');
searchField.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		post({name:searchField.value}, "beerJSON", function(res) {
			if(res.length === 1) {
				main.createElement('')
			}
		});
	}
});
}
