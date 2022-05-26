function sortNumbers(numArr){

    numArr.sort((a,b)=> a - b);
    const newArr = [];
    for (let i = 0; i < numArr.length; i++) {

        newArr.push(numArr.shift());
        newArr.push(numArr.pop());

        i = -1;
    }
    return newArr;
}
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])