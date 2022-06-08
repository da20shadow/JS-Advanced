function getArticleGenerator(articles) {
    const content = document.getElementById('content');
    return () => {

        if (articles.length > 0) {
            let article = document.createElement('article');
            article.className = 'article';
            article.textContent = articles.shift()
            content.appendChild(article);
        }
    }
}
