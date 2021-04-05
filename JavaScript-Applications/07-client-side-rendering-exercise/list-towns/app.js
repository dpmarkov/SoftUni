import { html, render } from '../../node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const towns = document.getElementById('towns').value.split(', ').map(t => t.trim());

    const listTemplate = (data) => html`
        <ul>
            ${data.map(t => html`<li>${t}</li>`)}
        </ul>
    `;

    render(listTemplate(towns), document.getElementById('root'));
});