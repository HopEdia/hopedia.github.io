define(function () {
	//Do setup work here

	return function(paths) {
		requirejs(['text!html/donation.html'], function(html) {
			setContent(html)
			var f,s=document.getElementById("flattr");
			f=document.createElement('iframe');
			f.src='//button.flattr.com/view/?fid=g3o9e0&url='+encodeURIComponent(document.URL);
			f.title='Flattr';
			f.height=62;
			f.width=55;
			f.style.borderWidth=0;
			s.parentNode.insertBefore(f,s);
		});
	};
});
