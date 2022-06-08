function solve() {
    const numersList = Array.from(document.querySelectorAll('tbody tr input'))
    const quickCheckBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];

    quickCheckBtn.style.cursor = 'pointer';
    clearBtn.style.cursor = 'pointer';

    const table = document.querySelector('table');
    const checkPara = document.querySelectorAll('#check p')[0];

    clearBtn.addEventListener('click', clearSudomu);
    quickCheckBtn.addEventListener('click', checkSudomuWin);

    function clearSudomu(e) {
        numersList.forEach(el => (el.value = ''));
        table.style.border = 'none';
        checkPara.textContent = '';
    }

    function checkSudomuWin(e) {
        let sudomuMatrix = [
            [numersList[0].value, numersList[1].value, numersList[2].value],
            [numersList[3].value, numersList[4].value, numersList[5].value],
            [numersList[6].value, numersList[7].value, numersList[8].value],
        ];

        let isSudomu = true;
        for (let i = 1; i < sudomuMatrix.length; i++) {
            let row = sudomuMatrix[i];
            let col = sudomuMatrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }

        if (isSudomu) {
            table.style.border = '2px solid green';
            checkPara.style.color = 'green';
            checkPara.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkPara.style.color = 'red';
            checkPara.textContent = 'NOP! You are not done yet...';
        }
    }
}