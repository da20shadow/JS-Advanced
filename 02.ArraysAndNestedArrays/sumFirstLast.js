function sumFirstLast(numbers){
    const first = Number(numbers.shift());
    const last = Number(numbers.pop());
    return first + last;
}

sumFirstLast([20,30,40])