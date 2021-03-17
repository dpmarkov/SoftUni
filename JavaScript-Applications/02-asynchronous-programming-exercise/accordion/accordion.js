async function solution() {
    const main = document.getElementById('main');

    try {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(elm => {
            const button = e('button', { className: 'button', id: elm._id }, 'More');
            const extra = e('div', { className: 'extra', display: 'none' });
            const result = e('div', { className: 'accordion' },
                e('div', { className: 'head' },
                    e('span', {}, elm.title),
                    button
                ),
                extra
            );

            button.addEventListener('click', async () => {
                if (extra.style.display != 'block') {
                    button.textContent = 'Less';
                    extra.style.display = 'block';
                } else {
                    button.textContent = 'More';
                    extra.style.display = 'none';
                }

                if (extra.children.length == 0) { //don't repeat the same query
                    const urlE = 'http://localhost:3030/jsonstore/advanced/articles/details/' + elm._id;
                    const responseE = await fetch(urlE);
                    const dataE = await responseE.json();

                    extra.appendChild(e('p', {}, dataE.content));
                }
            });

            main.appendChild(result);
        });
    } catch (err) {
        console.error(err);
    }
}

window.onload = solution;

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') { //add event
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}