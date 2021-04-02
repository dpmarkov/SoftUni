import { html, render } from '../../node_modules/lit-html/lit-html.js';

const selectTemplate = (list) => html`
    <select id="menu">
        ${list.map(x => html`<option value="${x._id}">${x.text}</option>`)}
    </select>
`;

let list = [];
const main = document.querySelector('div');
const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const input = document.getElementById('itemText');
initialize();

async function initialize() {
    document.querySelector('form').addEventListener('submit', (event) => addItem(event, list));

    const respose = await fetch(endpoint);
    const data = await respose.json();
    const list = Object.values(data);

    update(list);
}

function update(list) {
    const result = selectTemplate(list);
    render(result, main);
}

async function addItem(event, list) {
    event.preventDefault();

    const item = {
        text: input.value
    };

    const respose = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });

    const data = await respose.json();
    list.push(data);
    update(list);

    input.value = '';
}