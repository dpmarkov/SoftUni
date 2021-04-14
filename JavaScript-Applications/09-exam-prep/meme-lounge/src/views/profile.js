import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyMemes } from '../api/data.js';

const template = (memes) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${sessionStorage.getItem('gender')}.png">
        <div class="user-content">
            <p>Username: ${sessionStorage.getItem('username')}</p>
            <p>Email: ${sessionStorage.getItem('email')}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) --> 
        ${memes.map(memeTemplate)}

        <!-- Display : If user doesn't have own memes  -->
        ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : ''}
    </div>
</section>`;

const memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href='/details/${meme._id}'>Details</a>
</div>`;

export async function profilePage(ctx) {
    const memes = await getMyMemes();
    ctx.render(template(memes));
}