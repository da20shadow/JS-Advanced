function calculate(num1, operator, num2){
    let sum;
    if (operator === '+'){
        sum = num1 + num2;
    }else if (operator === '-'){
        sum = num1 - num2;
    }else if (operator === '*'){
        sum = num1 * num2;
    }
    return sum
}
module.exports = calculate;