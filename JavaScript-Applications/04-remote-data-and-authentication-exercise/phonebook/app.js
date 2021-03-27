const phonebook = document.getElementById('phonebook');

document.getElementById('btnLoad').addEventListener('click', getAllEntries);
document.getElementById('btnCreate').addEventListener('click', createEntry);

async function getAllEntries() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    phonebook.innerHTML = ''; //clear

    Object.values(data).forEach(element => {
        const liElm = document.createElement('li');
        liElm.textContent = `${element.person}: ${element.phone}`;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
            deleteEntry(element._id);
        });

        liElm.append(delBtn);
        phonebook.append(liElm)
    });
}

async function deleteEntry(id) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'DELETE'
    });
    const data = await response.json();

    getAllEntries(); //reload
    
    alert('You just deleted contact name: ' + data.person);
}

async function createEntry() {
    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    if (person == '' || phone == '') {
        return alert('All fields are required!');
    }

    const response = await fetch ('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({person, phone})
    });

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

    getAllEntries(); //reload
}