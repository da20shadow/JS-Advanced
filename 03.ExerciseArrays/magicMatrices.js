function magicMatrices(matrix){

    const lenMatrix = matrix.length - 1;
    let isMagic = true;
    for (let row = 0; row < lenMatrix; row++) {

        let sumOfFirstRow = matrix[row].reduce((a,b) => a + b,0);
        let sumOfSecondRow = matrix[row + 1].reduce((a,b) => a + b);
        let firstColSum = 0;
        let secondColSum = 0;

        const colsLen = matrix[row].length;
        for (let col = 0; col < colsLen; col++) {
            firstColSum += matrix[row][col];
            secondColSum += matrix[row + 1][col];
        }

        if (sumOfFirstRow !== sumOfSecondRow || firstColSum !== secondColSum){
            isMagic = false;
            break;
        }
    }
//TODO 83/100 да видя къде бъркам. Задачата в видеото е на 1:19:40
    console.log(isMagic)
}

function secondSolution(arr) {
    let sumRow = arr.map((col => col.reduce((a, b) => a + b)));
    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

    let areEqual = array => array.every(v => v === array[0]);

    return areEqual(sumRow) && areEqual(sumRow) && sumRow.toString() === sumCol.toString();
}

function thirdSolution(arrMatrix){
    let elementsSums = [];

    let arrLen = arrMatrix.length;
    for (let row = 0; row < arrLen; row++) {
        let rowSum = arrMatrix[row].reduce((a,b)=>a+b);
        elementsSums.push(rowSum);
    }

    for (let row = 0; row < arrLen; row++) {
            let colSum = 0;
        for (let col = 0; col < arrLen; col++) {
            let el = arrMatrix[col][row];
            colSum += el;
        }
        elementsSums.push(colSum);
    }
    let elLen = elementsSums.length -1;
    for (let i = 0; i < elLen; i++) {
        if (elementsSums[i] !== elementsSums[i + 1]){
            return false;
        }
    }
    return true;
}