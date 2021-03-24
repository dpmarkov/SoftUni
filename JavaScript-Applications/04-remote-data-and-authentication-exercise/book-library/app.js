async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');
    const result = Object.entries(books).map(createRow).join('');
    document.querySelector('tbody').innerHTML = result; 
}

function createRow([id, book]) {
    const result = `
        <tr data-id = "${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
    `;

    return result;
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    event.target.reset();
    getAllBooks();
}

async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    event.target.reset();
    getAllBooks();
}

async function deleteBook(id) {
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'DELETE'
    });

    getAllBooks();
}

function start() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.getElementById('editForm').addEventListener('submit', updateBook);
    document.querySelector('table').addEventListener('click', handleTableClick);

    getAllBooks();
}

function handleTableClick(event) {
    if (event.target.className == 'editBtn'){
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';
        const bookId = event.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(bookId);
    } else if (event.target.className == 'deleteBtn') {
        const confirmed = confirm('Are you sure you want to delete this book?');

        if (confirmed) {
            const bookId = event.target.parentNode.parentNode.dataset.id;
            deleteBook(bookId);
        }
    }
}

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
    
    document.querySelector('#editForm input[name="id"').value = id;
    document.querySelector('#editForm input[name="title"').value = book.title;
    document.querySelector('#editForm input[name="author"').value = book.author; 
}

start()