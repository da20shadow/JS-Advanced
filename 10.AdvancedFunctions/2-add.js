function solution(number) {
    function add(a, b) {
        return a + b;
    }
    return add.bind(this, number);
    // return (n) => add(number, n); 
}

let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));

//My solution:
function solve (number){
    return (num) => {
        return number + num ;
    }
}

let add10 = solve(5);
console.log(add10(2))
console.log(add10(3))