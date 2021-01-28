function subtract() {
    let resultElment = document.getElementById('result');
    let firstN = Number(document.getElementById('firstNumber').value);
    let secondN = Number(document.getElementById('secondNumber').value);

    resultElment.textContent = firstN - secondN;
}