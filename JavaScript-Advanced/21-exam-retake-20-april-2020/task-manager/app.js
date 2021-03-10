function solve() {
    const taskElm = document.getElementById('task');
    const descriptionElm = document.getElementById('description');
    const dateElm = document.getElementById('date');
    const openElm = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const inProgressElm = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
    const completeElm = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();

        if (taskElm.value != '' && descriptionElm.value != '' && dateElm.value != '') {
            const articleElm = document.createElement('article');
            const h3Elm = c('h3', taskElm.value);
            const p1Elm = c('p', `Description: ${descriptionElm.value}`);
            const p2Elm = c('p', `Due Date: ${dateElm.value}`);
            const divElm = c('div', '', 'flex');
            const startBtn = c('button', 'Start', 'green');
            const delBtn = c('button', 'Delete', 'red');

            divElm.appendChild(startBtn);
            divElm.appendChild(delBtn);
            articleElm.appendChild(h3Elm);
            articleElm.appendChild(p1Elm);
            articleElm.appendChild(p2Elm);
            articleElm.appendChild(divElm);
            
            openElm.appendChild(articleElm);

            startBtn.addEventListener('click', () => {
                startBtn.remove();

                finishBtn = c ('button', 'Finish', 'orange');

                divElm.appendChild(finishBtn);
                inProgressElm.appendChild(articleElm);

                finishBtn.addEventListener('click', () => {
                    divElm.remove();

                    completeElm.appendChild(articleElm);
                });
            });

            delBtn.addEventListener('click', () => articleElm.remove());
        }
    });

    function c(type, content, className) {
        const newElm = document.createElement(type);
        newElm.textContent = content;
        newElm.classList.add(className);

        return newElm;
    }
}