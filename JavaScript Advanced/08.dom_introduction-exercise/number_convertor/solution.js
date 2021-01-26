function solve() {
    let convertTo = document.getElementById('selectMenuTo');
    
    convertTo.textContent = ''; //empty

    let newOptionA = document.createElement('option');
    newOptionA.value = 'binary';
    newOptionA.innerHTML = 'Binary';

    let newOptionB = document.createElement('option');
    newOptionB.value = 'hexadecimal';
    newOptionB.innerHTML = 'Hexadecimal';
    
    convertTo.appendChild(newOptionA);
    convertTo.appendChild(newOptionB);

    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        let input = Number(document.getElementById('input').value);
        let resultElm = document.getElementById('result');
        
        if (convertTo.value == "binary"){
            resultElm.value = input.toString(2);
        } else { //Hexadecimal
            resultElm.value = input.toString(16).toLocaleUpperCase();
        }
    });
}