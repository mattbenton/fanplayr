(function(d, s) {
	var a = d.createElement(s),
		host = d.location.host;

	if ( host.match(/my.fanplayr.com/) ) {
		alert('Cannot reset cache in production environments!');
	} else if ( host.match(/(site.fanplayr|stage.fanplayr.com)/) ) {
		a.async = true;
		a.src = '//' + d.location.host + '/test.reset/';
		d.body.appendChild(a);
	} else {
		alert('Cannot reset cache. This page isn\'t a recognised testing domain');
	}
})(document, 'script')