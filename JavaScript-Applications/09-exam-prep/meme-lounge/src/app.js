import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import * as data from './api/data.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage  } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

window.data = data; //for testing purposes
const main = document.querySelector('main');
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', appLogout);

setUserNav(); //set navigation on initialization

//routing...................................................................................................................
    page('/', decorateContext, homePage);
    page('/login', decorateContext, loginPage);
    page('/register', decorateContext, registerPage);
    page('/catalog', decorateContext, catalogPage);
    page('/create', decorateContext, createPage);
    page('/details/:id', decorateContext, detailsPage);
    page('/edit/:id', decorateContext, editPage);
    page('/profile', decorateContext, profilePage);

    page.start();

    function decorateContext(ctx, next) {
        ctx.render = (content) => render(content, main);
        ctx.setUserNav = setUserNav;
        next();
    }
//...................................................................................................................routing

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email == null) { //guest
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    } else { //user
        document.querySelector('div.profile > span').textContent = 'Welcome ' + email;
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    }
}

async function appLogout() {
    await data.logout();
    setUserNav();

    page.redirect('/');
}