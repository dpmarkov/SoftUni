function addItem() {
    let newItemTextElm = document.getElementById('newItemText');
    let newItemValueElm = document.getElementById('newItemValue');
    let menuElm = document.getElementById('menu');
    let text = newItemTextElm.value;
    let value = newItemValueElm.value;
    let newOptionElm = document.createElement('option');

    newOptionElm.textContent = text;
    newOptionElm.value = value;
    menuElm.appendChild(newOptionElm);

    newItemTextElm.value = "";
    newItemValueElm.value = "";
}