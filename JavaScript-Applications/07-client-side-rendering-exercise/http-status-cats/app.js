import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { cats as catData } from './catSeeder.js';

const template = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

const main = document.getElementById('allCats');
const result = html`
<ul @click=${toggleInfo}>
    ${catData.map(c => template(c))}
</ul>
`;
render(result, main);

function toggleInfo(event) {
    if (event.target.classList.contains('showBtn')) {
        event.target.textContent == 'Show status code' ? event.target.textContent = 'Hide status code' : event.target.textContent = 'Show status code';
        const info = event.target.nextElementSibling;
        info.style.display == 'none' ? info.style.display = 'block' : info.style.display = 'none' ;
    }
}