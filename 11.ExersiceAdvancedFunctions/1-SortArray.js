function sortArray(numArr, orderType){
    if (orderType === 'asc'){
        numArr.sort((a,b) => a - b);
    }else {
        numArr.sort((a,b) => a - b).reverse();
    }
    return numArr;
}
sortArray([3, 1, 2, 10], 'asc')