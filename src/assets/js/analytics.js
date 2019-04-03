// Disable Google Analytics  tracking
function respectMyPrivacy() {
	localStorage.setItem('privacy', true);
	console.log('I will not track you.');
}

window.respectMyPrivacy = respectMyPrivacy;



// Load Google Analytics if the user not block it and is not in localhost (gtag.js)
if (window.location.hostname != 'localhost' && ! localStorage.getItem('privacy')) {
	(function() {
		const gaScript = document.createElement('script');
		gaScript.type = 'text/javascript';
		gaScript.async = true;
		gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-96902843-5';
		document.head.appendChild(gaScript);
	})();

	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-96902843-5');
}
