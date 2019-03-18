/* eslint-disable no-undef */
WebFontConfig = {
	google: {
		families: ['Overpass:400,700']
	}
};

(function(d) {
	var wf = d.createElement('script'), s = d.scripts[0];
	wf.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js';
	wf.async = true;
	s.parentNode.insertBefore(wf, s);
})(document);
