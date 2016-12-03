define(function () {
	//Do setup work here
	var reviewsElem;
	return function(beer) {
		if(typeof beer === 'string') {
			post({name:searchField.value}, 'beerJSON', function(res) {
				if(res.length === 1) {
					beer=res[0]
					display_beer(beer)
				}
			});
		}
		else {
			display_beer(beer)
		}
		function display_beer(beer) {
			requirejs(['text!html/beer.html'], function(html) {
				setContent(html)
				var table = document.getElementById('beer_properties');
				reviewsElem = document.getElementById('beer_reviews');
				addProperty('abv', table)
				addProperty('ibu', table)

				for(var i=0, len=beer.reviews.length; i<len; i++) {
					addReview(beer.reviews[i])
				}
			});
		}
		function addReview(review) {
			var reviewElem=document.createElement('div'),
			    title=document.createElement('h3'),
			    remark=document.createElement('p');
			//title.innerHTML=review.
			remark.innerHTML=review.remark;

			reviewElem.appendChild(remark)
			reviewsElem.appendChild(comment)
		}
		function addProperty(prop, table) {
			if(beer[prop]!==undefined) {
				if(beer[prop].length>0) {
					var row=document.createElement('tr'),
					    propCell=document.createElement('td'),
					    valueCell=document.createElement('td');
					propCell.innerHTML=prop;
					valueCell.innerHTML=beer[prop][0]._value
					row.appendChild(propCell);
					row.appendChild(valueCell);
					table.appendChild(row);
				}
			}
		}
	};
});

