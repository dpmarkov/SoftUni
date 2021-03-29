let topicId;
let container;

export function setupComments(commentsContainer) {
    container = commentsContainer;
}
    
export async function loadComments(id) {
    container.innerHTML = '';
    topicId = id;

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    const topicData = Object.values(data).filter(e => e._id == id);
    const topicTitle = topicData.topicName;

    const element = document.createElement('div');
    element.className = 'topic-name-wrapper';
    element.innerHTML = `
        <div class="">
            <div class="topic-name">
                <h2>${topicTitle}</h2>
                <p>Date: <time>?</time></p>
            </div>
            <div class="subscribers">
                <p>Subscribers: <span>?</span></p>
            </div>
    `;

    container.appendChild(element);

    createCommentsCards(topicId);
}

async function createCommentsCards(topicId) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();

    Object.values(data).filter(c => c.topicId == topicId).map(c => {
        const element = document.createElement('div');
        element.className = 'comment';
        element.innerHTML = `
            <header class="header">
                <p><span>${c.username}</span> posted on <time>?</time></p>
            </header>
            <div class="comment-main">
                <div class="userdetails">
                    <img src="./static/profile.png" alt="avatar">
                </div>
                <div class="post-content">
                    ${c.postText}
                </div>
            </div>
            <div class="footer">
                <p><span>?</span> likes</p>
            </div>
        `;
        
        container.appendChild(element);
    });
}

export async function createComment (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const comment = {
        username: formData.get('username'),
        postText: formData.get('postText'),
        topicId
    };

    const responseComment = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(comment)
    });

    if (!responseComment.ok) {
        const errorC = await responseComment.json();
        return alert(errorC.message);
    } else {
        alert('You successfully created a new comment!');
        event.target.reset();
        loadComments(topicId);
    }
}