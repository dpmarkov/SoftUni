function addItem() {
    const liElm = document.createElement('li');
    const ulElm = document.getElementById('items');

    liElm.textContent = document.getElementById('newItemText').value;
    document.getElementById('newItemText').value = '';
    ulElm.appendChild(liElm)
}