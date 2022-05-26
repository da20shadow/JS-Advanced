function negativePositiveNum(numbers){
    const newNumArr = [];

    for (const number of numbers) {
        number < 0 ? newNumArr.unshift(number) : newNumArr.push(number);
    }
    newNumArr.map(x => console.log(x));
}
negativePositiveNum([1,2,5,-45,-4,-1])