function biggestElement(matrix){
    let length = matrix.length;
    let element = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < length; i++) {
        let colLength = matrix[i].length;
        for (let j = 0; j < colLength; j++) {
            let currentEl = matrix[i][j];
            if (element < currentEl){
               element = currentEl;
           }
        }
    }
    return element;
}
biggestElement([[-20, -50, -10], [-8, -33, -145]])
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])

//Кратко решение:
function solve(arr) {
    return Math.max(...arr.flat());
}