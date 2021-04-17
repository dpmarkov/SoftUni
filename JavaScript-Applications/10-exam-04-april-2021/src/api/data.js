import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement application-specific requests

export async function getRecentArticles() {
    return await api.get('/data/wiki?sortBy=_createdOn%20desc&distinct=category');
}

export async function getAllArticles() {
    return await api.get('/data/wiki?sortBy=_createdOn%20desc');
}

export async function createArticle(article) {
    return await api.post('/data/wiki', article);
}

export async function updateArticle(id, article) {
    return await api.put('/data/wiki/' + id, article);
}

export async function getArticle(id) {
    return await api.get('/data/wiki/' + id);
}

export async function deleteArticle(id) {
    return await api.del('/data/wiki/' + id);
}

export async function search(query) {
    return await api.get(`/data/wiki?where=title%20LIKE%20%22${query}%22`);
}