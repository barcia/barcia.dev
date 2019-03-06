// Font
import './fonts';

// BrowserDOM
import BrowserDOM from 'browserdom';
const myBrowserDOM = new BrowserDOM({
	scrolled: true,
	scrollDirection: true
});

document.addEventListener('DOMContentLoaded', function() {
	myBrowserDOM.print();
})




document.addEventListener('DOMContentLoaded', function() {
	const post = document.getElementById('post');
	const headings = post.querySelectorAll('h1, h2, h3, h4, h5, h6');

	for (const heading of headings) {
		heading.id = slugify(heading.innerHTML);
		const anchorLink = document.createElement("a");
		anchorLink.innerText = "#";
		anchorLink.href = "#"+heading.id;
		heading.appendChild(anchorLink);
	}
});


function slugify(string) {
	const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
	const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------'
	const p = new RegExp(a.split('').join('|'), 'g')

	return string.toString().toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}
