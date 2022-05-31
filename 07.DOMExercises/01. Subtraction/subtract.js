function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let res = document.getElementById('result');
    let sum = Number(num1) - Number(num2);
    res.textContent = sum;
}