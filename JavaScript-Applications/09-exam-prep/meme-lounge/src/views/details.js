import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMeme, deleteMeme } from '../api/data.js';

const template = (meme, onDelete, isOwner) => html`
<!-- Details Meme Page (for guests and logged users) -->
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner ? html`
                <a class="button warning" href="/edit/${meme._id}">Edit</a>
                <button @click=${onDelete} class="button danger">Delete</button>` : ''}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const meme = await getMeme (ctx.params.id);
    const isOwner = meme._ownerId === sessionStorage.getItem('userId');

    ctx.render(template(meme, onDelete, isOwner));

    async function onDelete() {
        await deleteMeme(ctx.params.id);

        ctx.page.redirect('/catalog');
    }
}