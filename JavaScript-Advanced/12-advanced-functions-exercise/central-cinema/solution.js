function solve() {
    const onScreenBtn = document.querySelector('button');
    const clearBtn = document.querySelectorAll('button')[1];
    const [name, hall, ticketPrice] = Array.from(document.querySelectorAll('#add-new input'));
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');

    onScreenBtn.type = 'button'; //before -> submit
    clearBtn.type = 'button';

    onScreenBtn.addEventListener('click', () => {
        if (name.value.trim() != '' && hall.value.trim() != ''
        && ticketPrice.value.trim() != '' && !isNaN(ticketPrice.value)){
            const newList = document.createElement('li');
            const nameT = document.createElement('span');
            const hallT = document.createElement('strong');
            const divWrap = document.createElement('div');
            const ticketT = document.createElement('strong');
            const newInput = document.createElement('input');
            const archiveBtn = document.createElement('button');

            const priceForTicket = Number(ticketPrice.value);

            nameT.textContent = name.value;
            hallT.textContent = 'Hall: ' + hall.value;
            ticketT.textContent = ticketPrice.value;
            newInput.placeholder = 'Tickets Sold';
            archiveBtn.textContent = 'Archive';

            newList.appendChild(nameT);
            newList.appendChild(hallT);
            newList.appendChild(divWrap);
            divWrap.appendChild(ticketT);
            divWrap.appendChild(newInput);
            divWrap.appendChild(archiveBtn);
            moviesList.appendChild(newList);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';

            archiveBtn.addEventListener('click', () => {
                if (!isNaN(newInput.value) && newInput.value.trim() != ''){
                    const profit = Number(newInput.value) * priceForTicket;
                    
                    const deleteBtn = document.createElement('button');
                    const profitElm = document.createElement('strong');
                    
                    divWrap.remove();
                    hallT.remove();
                    profitElm.textContent = `Total amount: ${profit.toFixed(2)}`;
                    deleteBtn.textContent = 'Delete';
                    newList.appendChild(profitElm);
                    newList.appendChild(deleteBtn);
                    archiveList.appendChild(newList);

                    deleteBtn.addEventListener('click', () => {
                        newList.remove();
                    });
                }
            });
        }
    });

    clearBtn.addEventListener('click', () => {
        const liElms = Array.from(archiveList.querySelectorAll('li'));

        liElms.forEach(e => e.remove());
    });
}