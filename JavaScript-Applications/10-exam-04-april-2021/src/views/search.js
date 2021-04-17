import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';

const template = (onSearch, articles) => html`
<!-- Search  -->
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${articles == null ? '' : articles.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>` : articles.map(articleTemplate)}
    </div>
</section>`;

const articleTemplate = (article) => html`
<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`;

export async function searchPage(ctx) {
    const query = ctx.querystring.split('=')[1];

    if (query) {
        const articles = await search(query);

        ctx.render(template(onSearch, articles));
        console.log(articles);
    } else {
        ctx.render(template(onSearch, null));
    }
    
    async function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchWord = formData.get('search');

        if (searchWord == '') {
            return alert('Please type in a word to search for.');
        }

        ctx.page.redirect('/search?query=' + searchWord);
    }
}