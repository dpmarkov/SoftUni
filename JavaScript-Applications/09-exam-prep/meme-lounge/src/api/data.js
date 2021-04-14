import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement application-specific requests
export async function getMemes() {
    return await api.get('/data/memes?sortBy=_createdOn%20desc');
}

export async function createMeme(meme) {
    return await api.post('/data/memes', meme);
}

export async function getMeme(memeId) {
    return await api.get('/data/memes/' + memeId);
}

export async function deleteMeme(memeId) {
    return await api.del('/data/memes/' + memeId);
}

export async function updateMeme(memeId, meme) {
    return await api.put('/data/memes/' + memeId, meme);
}

export async function getMyMemes() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}