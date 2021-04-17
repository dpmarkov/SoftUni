import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticle, deleteArticle } from '../api/data.js';

const template = (article, onDelete, isOwner) => html`
<!-- Details -->
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        ${isOwner ? html`
            <div class="buttons">
                <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                <a href="/edit/${article._id}" class="btn edit">Edit</a>
                <a href="/" class="btn edit">Back</a>
            </div>` : ''
        }
        
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const article = await getArticle(id);
    const isOwner = sessionStorage.getItem('userId') == article._ownerId;

    ctx.render(template(article, onDelete, isOwner));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this article?');

        if (confirmed) {
            await deleteArticle(id);
            ctx.page.redirect('/');
        }
    }
}