var apiUrl = 'https://server01-hopedia.rhcloud.com/',
    main = document.getElementById('main-content')

require.config({
	paths : {
		//create alias to plugins (not needed if plugins are on the baseUrl)
		text: 'lib/text/text',
	},
	baseUrl: './'
});

document.onreadystatechange = function() {
args = getUrlArgs();
switch(args.shift()){
	case undefined:
		break;
	case 'account':
		requirejs(['js/account/main'], function(account) {
			account(args);
		});
		break;
	case 'donation':
		requirejs(['js/donation'], function(donation) {
			donation(args)
		})
	case 'beer':
}

var searchField = document.getElementById('search');
searchField.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		post({name:searchField.value}, 'beerJSON', function(res) {
			if(res.length === 1) {
				main.createElement('')
			}
		});
	}
});
}

//utils
function getUrlArgs() {
	page = window.location.href.split('?')[1];
	if(page === undefined)
		return [undefined];
	else
		return page.split('/');
}
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
function setContent(html) {
	document.getElementById('main-content').innerHTML=html;
}

