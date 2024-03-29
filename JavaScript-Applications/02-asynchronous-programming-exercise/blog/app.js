const viewBtn = document.getElementById('btnViewPost');

function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);

    viewBtn.addEventListener('click', displayPost);
    viewBtn.disabled = true;
}

attachEvents();

async function getPosts() {
    const select = document.getElementById('posts');

    if (select.children.length == 0){ //it doesn't repeat the same query (load posts)
        const url = 'http://localhost:3030/jsonstore/blog/posts';
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).map(createOption).forEach(o => select.appendChild(o));

        viewBtn.disabled = false;
    }
}

function createOption (post) {
    const result = document.createElement('option');
    result.value = post.id;
    result.textContent = post.title;
    return result;
}

function displayPost() {
    getCommentsByPostId(document.getElementById('posts').value);
}

async function getCommentsByPostId(id) {
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + id;
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const [postResponse, commentsResponse] = await Promise.all([fetch(postUrl), fetch(commentsUrl)]);

    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const commentsData = await commentsResponse.json();
    const comments = Object.values(commentsData).filter(c => c.postId == id);

    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = ''; //clear

    comments.map(createComment).forEach(c => commentsUl.appendChild(c));
}

function createComment (comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;

    return result;
}