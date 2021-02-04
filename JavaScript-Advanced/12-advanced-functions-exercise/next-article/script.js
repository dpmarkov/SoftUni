function getArticleGenerator(articles) {
    let output = document.getElementById('content');

    return () => {
        if (articles.length > 0){
            let article = articles.shift();
            let newEl = document.createElement('article');

            newEl.textContent = article;
            output.appendChild(newEl);
        }
    };
}
