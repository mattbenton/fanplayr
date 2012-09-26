(function( FP ) {
	if ( FP && FP.Utils ) {
		FP.Utils.deleteCookie('fanplayr_genius_session');
		FP.Utils.deleteCookie('fanplayr_genius_demo');
		FP.Utils.jsonp('http://stage.fanplayr.com/external.genius/?a=clear-user-data');
		alert('Fanplayr data cleared.');
	} else {
		alert('Could not clear Fanplayr data. The website doesn\'t appear to user Fanplayr.');
	}
})( window.fanplayr );