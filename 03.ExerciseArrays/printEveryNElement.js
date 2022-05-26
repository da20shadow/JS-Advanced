function printEveryNElement(...params){
    const arr = params[0];
    const n = params[1];

    const newArr = [];

    const arrLen = arr.length;
    for (let i = 0; i < arrLen; i+= n) {
        newArr.push(arr[i]);
    }
    return newArr;
}
printEveryNElement([5,20,31,4,20],2)