function solve() {
    let inputElm = document.getElementsByTagName('input')[0];
    let listElm = document.getElementsByTagName('ol')[0].children;
    let buttonElm = document.getElementsByTagName('button')[0];

    buttonElm.addEventListener('click', buttonClick);

    function buttonClick(){
        let name = inputElm.value;
        let firstLetter = name[0].toLocaleUpperCase();
        let correctName = firstLetter + name.slice(1).toLocaleLowerCase();
        let index = firstLetter.charCodeAt(0) - 65;
        let listToAdd = listElm[index];
        
        if (listToAdd.textContent == ""){
            listToAdd.textContent = correctName;
        } else {
            listToAdd.textContent += `, ${correctName}`;
        }

        inputElm.value = "";
    }
}