function createArticle() {
	let articles = document.getElementById('articles');
	let article = document.createElement('article');
	let title = document.createElement('h3');
	let content = document.createElement('p');

	title.innerHTML = document.getElementById('createTitle').value;
	content.innerHTML = document.getElementById('createContent').value;

	if (title.innerHTML != '' && content.innerHTML != ''){
		article.appendChild(title);
		article.appendChild(content);
		articles.appendChild(article);

		document.getElementById('createTitle').value = '';
		document.getElementById('createContent').value = '';
	}
}