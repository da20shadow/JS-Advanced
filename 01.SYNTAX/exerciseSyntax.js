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

