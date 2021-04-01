async function request(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const host = 'http://localhost:3030/jsonstore/collections/books';

async function getAllBooks() {
    return Object
        .entries(await request(host))
        .map(([k, v]) => Object.assign(v, { _id: k}));
}

async function getBookById(id) {
    return await request(host + '/' + id);
}

async function createBook(book) {
    console.log('gggg');
    
    return await request(host, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function updateBook(id, book) {
    return await request(host + '/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function deleteBook(id) {
    return await request(host + '/' + id, {
        method: 'DELETE'
    });
}

export {
    getAllBooks,
    getBookById,
    deleteBook,
    createBook,
    updateBook
};