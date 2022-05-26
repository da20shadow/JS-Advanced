function diagonalSums(matrix){
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    let rowMatrixLength = matrix.length;

    let row = 0;
    for (let col = 0; col < rowMatrixLength; col++) {
        mainDiagonalSum += matrix[row][col];
        row++;
    }
    row = rowMatrixLength - 1;
    for (let col = 0; col < rowMatrixLength ; col++) {
        secondaryDiagonalSum += matrix[row][col];
        row--;
    }
    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`)
}
diagonalSums([
    [20,40],
    [10,60]
])
// diagonalSums([
//     [3,3,3],
//     [7,7,7],
//     [5,5,5]
// ])