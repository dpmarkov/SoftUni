import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import * as data from './api/data.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';

//window.data = data; //for testing purposes
const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', appLogout);
setUserNav(); //set navigation on initialization

//routing...................................................................................................................
    page('/', decorateContext, homePage);
    page('/login', decorateContext, loginPage);
    page('/register', decorateContext, registerPage);
    page('/catalog', decorateContext, catalogPage);
    page('/create', decorateContext, createPage);
    page('/details/:id', decorateContext, detailsPage);
    page('/edit/:id', decorateContext, editPage);
    page('/search', decorateContext, searchPage);

    page.start();

    function decorateContext(ctx, next) {
        ctx.render = (content) => render(content, main);
        ctx.setUserNav = setUserNav;
        next();
    }
//...................................................................................................................routing

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    if (token == null) { //guest
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    } else { //user
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
    }
}

async function appLogout () {
	await data.logout();
	page.redirect('/');
	setUserNav();
}