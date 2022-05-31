function solve() {

    const optionBinary = document.createElement('option');
    const optionHexadecimal = document.createElement('option');
    const dropDownMenu = document.getElementById('selectMenuTo');

    const button = document.querySelector('#container button');

    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';

    dropDownMenu.appendChild(optionBinary);
    dropDownMenu.appendChild(optionHexadecimal);
    button.addEventListener('click', convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result = '';
        const resultInput = document.getElementById('result');

        if (dropDownMenu.value === 'binary') {
            result = number.toString(2);
        } else if (dropDownMenu.value === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        resultInput.value = result;
    }
}