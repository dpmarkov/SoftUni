import { setupComments, loadComments, createComment } from './comment.js';
const topicsView = document.getElementById('topicsView');
const commentsView = document.getElementById('commentsView');

const topicsContainer = document.querySelector('.topic-title');
const commentsContainer = document.getElementById('comments');

const topicForm = document.getElementById('topicForm');
topicForm.addEventListener('submit', createTopic);

const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', createComment);

const homeLink = document.getElementById('homeLink');
homeLink.addEventListener('click', loadTopics);

document.querySelector('.cancel').addEventListener('click', (e) => onCancel(e));

function onCancel(event) {
    event.preventDefault();
    topicForm.reset();
}

loadTopics();
setupComments(commentsContainer);

topicsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (event.target.classList.contains('topicLink')) {    
        loadComments(event.target.id);
        topicsView.style.display = 'none';
        commentsView.style.display = 'block';
    }
});

async function createTopic(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formData.get('topicName') == '' || formData.get('username') == '' || formData.get('postText') == '') {
        return alert('All fields are required!');
    }

    const topic = {
        topicName: formData.get('topicName'),
        username: formData.get('username')
    };
    const responseTopic = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(topic)
    });

    if (!responseTopic.ok) {
        const errorT = await responseTopic.json();
        return alert(errorT.message);
    }

    const topicData = await responseTopic.json();
    const topicId = topicData._id;
    console.log(topicData);
    

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
        alert('Your topic is created');
        event.target.reset();
        loadTopics();
    }
}

function createTopicCard(topic) {
    const element = document.createElement('div');
    element.className = 'topic-container';
    element.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <a href="#" class="normal">
                    <h2 class="topicLink" id="${topic._id}">${topic.topicName}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>?</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${topic.username}</span></p>
                        </div>
                    </div>
                    <div class="subscribers">
                        <button class="subscribe" disabled>Subscribe</button>
                        <p>Subscribers: <span>?</span></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    topicsContainer.appendChild(element);
}

async function loadTopics(e) {
    e.preventDefault();
    
    topicsContainer.innerHTML = 'Loading...';
    topicsView.style.display = 'block';
    commentsView.style.display = 'none';

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await response.json();
    
    topicsContainer.innerHTML = '';
    Object.values(data).map(data => createTopicCard(data));
}