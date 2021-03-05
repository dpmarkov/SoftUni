function solution() {
    const inputElm = document.querySelector('input');
    const addBtn = document.querySelector('button');
    const listGifts = document.querySelectorAll('ul')[0];
    const sentGifts = document.querySelectorAll('ul')[1];
    const discardedGifts = document.querySelectorAll('ul')[2];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const name = inputElm.value;
        const liElm = document.createElement('li');
        const sendBtn = document.createElement('button');
        const discardBtn = document.createElement('button');

        sendBtn.textContent = 'Send';
        discardBtn.textContent = 'Discard';
        sendBtn.setAttribute('id', 'sendButton');
        discardBtn.setAttribute('id', 'discardButton');

        liElm.textContent = name;
        liElm.className = 'gift';

        liElm.appendChild(sendBtn);
        liElm.appendChild(discardBtn);
        listGifts.appendChild(liElm);

        sortGifts();
        inputElm.value = '';
    });

    listGifts.addEventListener('click', (e) => {
        if (e.target.id == 'sendButton') {
            const selectedElm = e.target.parentElement;

            Array.from(selectedElm.querySelectorAll('button')).map(e => e.remove());
            sentGifts.appendChild(selectedElm);
        } else if (e.target.id == 'discardButton') {
            const selectedElm = e.target.parentElement;

            Array.from(selectedElm.querySelectorAll('button')).map(e => e.remove());
            discardedGifts.appendChild(selectedElm);
        }
    });

    function sortGifts() {
        const sorted = Array.from(listGifts.children).sort((a, b) => {
            return a.textContent.localeCompare(b.textContent);
        });

        sorted.map(e => listGifts.appendChild(e));
    }
}