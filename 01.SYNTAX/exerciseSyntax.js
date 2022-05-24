//Task 1 - Fruits
function calculateMoneyForFruits(fruitType, grams, pricePerKg) {
  let weight = grams / 1000;
  let money = weight * pricePerKg;

  weight = weight.toFixed(2);
  money = money.toFixed(2);

  console.log(`I need $${money} to buy ${weight} kilograms ${fruitType}.`);
}

//Task 2 - Greatest Common Divisor
//Solution 1
function getGreatestCommonDivisor(firstNumber,secondNumber){

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (firstNumber > secondNumber){
        console.log(getGreatestDivisor(firstNumber))
    } else {
        console.log(getGreatestDivisor(secondNumber))
    }
    
    function getGreatestDivisor(number){
        let greatestNumber;
        for(let i = 1; i <= number; i++){
            
            if (firstNumber % i === 0 && secondNumber % i === 0) {
                greatestNumber = i;
            }
        }
        return greatestNumber;
    };

}

//Solution 2
function getGreatestCommonDivisorSecondSolution(firstNum, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}

//Task 3 - Same Numbers
//Solution 1
function sameNumbers(number){
    number = number.toString().split('');
    let newNumArr = [];
    number.map(n => newNumArr.push(parseInt(n)));
    let current;
    let previous;
    let isSame = false;
    let sum = newNumArr.reduce((a,b)=> a + b);
    for (let i = 0; i < newNumArr.length; i++) {
        current = newNumArr[i];
        previous === undefined ? previous = newNumArr[i] : previous = newNumArr[i - 1];
        if (current === previous){
            isSame = true;
        }else {
            isSame = false;
            break;
        }
    }
    console.log(isSame);
    console.log(sum);
}
        
//Solution 2
function sameNumbersSecondSolution(number){
    number = number.toString().split('');
    let newNumArr = [];
    number.map(n => newNumArr.push(parseInt(n)));
    let sum = newNumArr.reduce((a,b)=> a + b);

    let areSame = false;
    let firstNumber = newNumArr[0];

    for (let i = 0; i < newNumArr.length; i++){
        if (firstNumber !== newNumArr[i]){
            areSame = false;
            break;
        }else {
            areSame = true;
        }
    }

    console.log(areSame);
    console.log(sum);
}
