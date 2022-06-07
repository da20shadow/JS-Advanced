//Фибоначи: всяко следващо число е равно на сумата от предишните 2
function fibonaci(){
    let number = 0;
    let secondNum = 1;
    return () => {
        let third = number + secondNum;
        number = secondNum;
        secondNum = third;
        return number;
    }
}

const fib = fibonaci();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())