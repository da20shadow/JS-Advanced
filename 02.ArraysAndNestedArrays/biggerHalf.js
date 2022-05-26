function biggerHalf(numbersArr){
    //1. sort the numbersArr
    numbersArr.sort((a,b) => a - b);
    //2. create new arr from the second half of the numbersArr
        //if there are an odd number of elements take the bigger half
    const newArr = [];
    const len = numbersArr.length;
    for (let i = Math.floor(len / 2); i < len; i++) {
     newArr.push(numbersArr[i]);
    }
    //3. return the new array
    return newArr;
}

console.log(biggerHalf([4,7,2,5]));
console.log(biggerHalf([3,19,14,7,2,19,6]));


