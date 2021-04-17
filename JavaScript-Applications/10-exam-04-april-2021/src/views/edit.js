import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticle, updateArticle } from '../api/data.js';

const template = (article, onSubmit) => html`
<!-- Edit -->
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${article.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category" .value=${article.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${article.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const article = await getArticle(id);

    ctx.render(template(article, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();
        const validCategories = ['JavaScript', 'C#', 'Java', 'Python'];

        if (title == '' || category == '' || content == '') {
            return alert('All fields are required!');
        }
        if (validCategories.includes(category) == false) {
            return alert('Please type in a correct category. Valid choices are: JavaScript, C#, Java or Python');
        }

        await updateArticle(id, {
            title,
            category,
            content
        });

        ctx.page.redirect('/details/' + id);
    }
}