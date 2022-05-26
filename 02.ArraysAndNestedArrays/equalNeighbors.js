function equalNeighbors(matrix){
    const matrixLen = matrix.length;

    let neighborCounter = 0;

    for (let row = 0; row < matrixLen; row++) {
        let rowLen = matrix[row].length;
        for (let col = 0; col < rowLen; col++) {
            let rightCol = col + 1;
            let downRow = row + 1;

            if (rightCol > -1 && rightCol < rowLen){
                if (matrix[row][col] === matrix[row][rightCol]){
                    neighborCounter++;
                }
            }

            if (downRow > -1 && downRow < matrixLen){
                if (matrix[row][col] === matrix[downRow][col]){
                    neighborCounter++;
                }
            }
        }
    }
    console.log(neighborCounter)
}
equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']])