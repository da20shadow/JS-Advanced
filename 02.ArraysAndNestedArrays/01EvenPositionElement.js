function evenPositionElement(arr){
    let evenArr = [];
    let loop = 0;
    for (const num of arr) {
        if (loop % 2 === 0){
            evenArr.push(num);
        }
        loop++;
    }
    console.log(evenArr.join(' '));
}
let testArr = ['20','30','40','50','60']
evenPositionElement(testArr)