function magicMatrices(matrix){
    let sumRow = matrix.map((col => col.reduce((a, b) => a + b)));
    let sumCol = matrix.reduce((r, a) => r.map((b, i) => a[i] + b));

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