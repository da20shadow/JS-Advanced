const arr = [1,2,99,13,11];
arr.sort((a,b) => a - b );
console.log(arr); //[ 1, 2, 11, 13, 99 ]
arr.sort((a,b) => b - a );
console.log(arr); //[ 99, 13, 11, 2, 1 ]


