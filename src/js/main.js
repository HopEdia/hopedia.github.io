var apiUrl = 'https://server01-hopedia.rhcloud.com/',
    main = document.getElementById('main-content')

require.config({
	paths : {
		//create alias to plugins (not needed if plugins are on the baseUrl)
		text: 'lib/text/text',
	},
	baseUrl: './'
});

var spinner;
var searchField = document.getElementById('search');
spinner = document.getElementById('spinner_table');

loadPage();
window.onhashchange = loadPage

searchField.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		post({name:searchField.value}, 'beerJSON', function(res) {
			if(res.length === 1) {
				requirejs(['js/beer'], function(beer) {
					beer(res[0])
					location.href='#beer/'+res[0]._id
				})
			}
		});
	}
});

function loadPage() {
	unload()
	args = getUrlArgs();
	switch(args.shift()){
		case undefined:
			requirejs(['js/index'], function(index) {
				index(args);
			});
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
			break;
		case 'beer':
			requirejs(['js/beer'], function(beer) {
				beer(args[0])
			})
			break;
	}
}

//utils
function getUrlArgs() {
	page = window.location.href.split('#')[1];
	//support old syntax
	if(page === undefined)
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
			cb(JSON.parse(xhr.responseText))
		}
	};
	xhr.send(JSON.stringify(criteria));
}
function setContent(html) {
	spinner.style.display='none';
	document.getElementById('main-content').innerHTML=html;
}
function unload() {
	document.getElementById('main-content').innerHTML=null;
	spinner.style.display='table';
}

