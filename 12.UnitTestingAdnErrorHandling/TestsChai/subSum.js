function extractSum(numArr,start,end){

    if (!Array.isArray(numArr)){
        throw new Error('The numArr is not array!');
    }
    if (start < 0){
        throw new Error('Start Index Must Be greater than zero!');
    }
    if (end > numArr.length){
        throw new Error('End index must be less than the array length');
    }

    numArr.map(num => {
        if (isNaN(num)){
            return NaN;
        }
    })

    let subArr = numArr.slice(start,end);
    return subArr.reduce((a, x) => a + Number(x), 0);
}
module.exports = extractSum;