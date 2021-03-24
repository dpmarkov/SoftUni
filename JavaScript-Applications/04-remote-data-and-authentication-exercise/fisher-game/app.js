const addBtn = document.getElementById('addBtn');
const loadBtn = document.getElementById('loadBtn');
const catches = document.getElementById('catches');

loadBtn.addEventListener('click', getAllCatches);
catches.addEventListener('click', buttonsHandler);

if (sessionStorage.getItem('userToken') != undefined) {
    addBtn.disabled = false;
    document.querySelector('#guest a').textContent = `Logged in as ${sessionStorage.getItem('email')}`;

    addBtn.addEventListener('click', addNewCatch);

    async function addNewCatch(event) {
        const angler = event.target.parentNode.querySelector('.angler').value;
        const weight = event.target.parentNode.querySelector('.weight').value;
        const species = event.target.parentNode.querySelector('.species').value;
        const location = event.target.parentNode.querySelector('.location').value;
        const bait = event.target.parentNode.querySelector('.bait').value;
        const captureTime = event.target.parentNode.querySelector('.captureTime').value;

        //basic validation for empty fields
        if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == ''){
            return alert('All fields are required!');
        }

        await fetch('http://localhost:3030/data/catches/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('userToken')
            },
            body: JSON.stringify({angler, weight, species, location, bait, captureTime})
        });

        getAllCatches();
    }
} else {
    addBtn.disabled = true;
}

async function buttonsHandler(event) {
    if (event.target.className == 'delete') {
        await fetch('http://localhost:3030/data/catches/' + event.target.parentNode.dataset.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('userToken')
            },
        });

        event.target.parentNode.remove();
    } else if (event.target.className == 'update') {
        const angler = event.target.parentNode.querySelector('.angler').value;
        const weight = event.target.parentNode.querySelector('.weight').value;
        const species = event.target.parentNode.querySelector('.species').value;
        const location = event.target.parentNode.querySelector('.location').value;
        const bait = event.target.parentNode.querySelector('.bait').value;
        const captureTime = event.target.parentNode.querySelector('.captureTime').value;

        await fetch('http://localhost:3030/data/catches/' + event.target.parentNode.dataset.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('userToken')
            },
            body: JSON.stringify({angler, weight, species, location, bait, captureTime})
        });
    }
}

async function getAllCatches () {
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();
    
    const result = Object.values(data).map(item => {
        let buttonState = '';
        if (sessionStorage.getItem('userId') != item._ownerId) {
            buttonState = 'disabled';
        }

        return item = 
        `<div class="catch" data-id="${item._id}" data-owner-id="${item._ownerId}">
            <label>Angler</label>
            <input type="text" class="angler" value="${item.angler}" />
            <hr>
            <label>Weight</label>
            <input type="number" class="weight" value="${item.weight}" />
            <hr>
            <label>Species</label>
            <input type="text" class="species" value="${item.species}" />
            <hr>
            <label>Location</label>
            <input type="text" class="location" value="${item.location}" />
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" value="${item.bait}" />
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${item.captureTime}" />
            <hr>
            <button ${buttonState} class="update">Update</button>
            <button ${buttonState} class="delete">Delete</button>
        </div>`;
    }).join('');

    catches.innerHTML = result;
}