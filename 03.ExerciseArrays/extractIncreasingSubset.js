function extractIncreasingSubset(arr){
    let biggestNum = arr[0];

    const newArr = [];
    for (const num of arr) {
        if (num >= biggestNum){
            biggestNum = num;
            newArr.push(num);
        }
    }
    return newArr;
}

extractIncreasingSubset([1,3,8,4,10,12,3,2,24])