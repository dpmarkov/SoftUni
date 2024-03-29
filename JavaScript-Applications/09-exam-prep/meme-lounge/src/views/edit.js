import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMeme, updateMeme } from '../api/data.js';
import { notify } from '../api/notification.js';

const template = (meme, onSubmit) => html`
<!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const meme = await getMeme(id);

    ctx.render(template(meme, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');

        try {
            if (!title || !description || !imageUrl) {
                throw new Error('All fields are required');
            }
            
            await updateMeme(id, { title, description, imageUrl });

            ctx.page.redirect('/details/' + id);
        } catch(err) {
            notify(err.message);
        }
    }
}