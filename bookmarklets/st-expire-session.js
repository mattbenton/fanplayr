(function( FP ) {
	if ( FP && FP.Utils ) {
		var session = FP.Utils.initSession('fanplayr_genius_session');

		var scripts = document.getElementsByTagName('script');
		for ( var i = 0; i < scripts.length; i++ ) {
			var match = scripts[i].src.match(/(site\.fanplayr|stage\.fanplayr\.com|my\.fanplayr\.com)/i);
			if ( match ) {
				var script = document.createElement('script');
				script.async = true;
				script.src = '//' + match[1] + '/external.genius/?a=expire-session&sk=' + session('key');
				document.body.appendChild(script);
				return;
			}
		}
		alert('Can\t determine Fanplayr server.');
	} else {
		alert('The website doesn\'t appear to user Fanplayr.');
	}
})( window.fanplayr );