function attachEvents() {
    document.getElementById('submit').addEventListener('click', () => {
        const authorElm = document.querySelector('input[name=author]');
        const contentElm = document.querySelector('input[name=content]');
        const author = authorElm.value;
        const content = contentElm.value;

        authorElm.value = '';
        contentElm.value = '';

        sendMessage({author, content});
    })

    document.getElementById('refresh').addEventListener('click', getMessages);
    getMessages();
}

attachEvents();

async function getMessages() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();
    document.getElementById('messages').value = Object.values(data).map(n => `${n.author}: ${n.content}`).join('\n');
}

async function sendMessage(message) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(message)
    });
    const data = await response.json();
}