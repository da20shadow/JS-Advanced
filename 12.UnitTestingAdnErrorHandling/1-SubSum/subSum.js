function subSum(numArray, start, end){
    if (!Array.isArray(numArray)){
        return NaN;
    }
    if (start < 0){
        start = 0;
    }
    if (end > numArray.length){
        end = numArray.length - 1;
    }
    let subArr = numArray.slice(start,end + 1)
    return subArr.reduce((a, x) => a + Number(x), 0);
}
module.exports = subSum;