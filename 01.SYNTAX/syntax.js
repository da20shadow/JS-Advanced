//Format the code with ALT + SHIFT + F

//Task 2
function strLen(a, b, c) {
  let total = a.length + b.length + c.length;
  let avg = Math.floor(total / 3);

  console.log(total);
  console.log(avg);
}

//Task 3 Largest Number

function largestNumber(...params) {
  console.log(`The largest number is ${Math.max(...params)}.`);
}

//Task 4 Calculate Area of circle

function calculateArea(radius) {
  if (typeof radius == "number") {
    let area = radius ** 2 * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof radius}.`
    );
  }
}

//Task 5 - Math Operations

function solve(num1, num2, operator) {
  // '+', '-', '*', '/', '%', '**
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }
  if (result !== undefined) {
    console.log(result);
  }
}

//Task 06. Sum of Numbers N…M

function sumOfNumbers(n, m) {
  let sum = 0;
  let num1 = Number(n);
  let num2 = Number(m);

  for (num1; num1 <= num2; num1++) {
    sum += num1;
  }
  console.log(sum);
}

//Task 07. Day of Week

function showDay(day) {
  switch (day) {
    case "Monday":
      console.log(1);
      break;
    case "Tuesday":
      console.log(2);
      break;
    case "Wednesday":
      console.log(3);
      break;
    case "Thursday":
      console.log(4);
      break;
    case "Friday":
      console.log(5);
      break;
    case "Saturday":
      console.log(6);
      break;
    case "Sunday":
      console.log(7);
      break;
    default:
      console.log("error");
  }
}

//Task 08. Days in a month 

function getDaysInMonth(month, year){
  const days = new Date(year, month,0).getDate();
  console.log(days);
}

//Task 09. Square of Stars 

function printSquare(number){

  if (number === undefined){
    number = 5;
  }

  for (let i = 0; i < number; i++){
    console.log('* '.repeat(number))
  }

}

//Task 10. Aggregate Elements 

function aggregate(thearray) {
  const numbersArray = thearray.map(Number);
  const sum = numbersArray.reduce(getSum);

  function getSum(a,b) {
    return a + b;
  }

  let inverseValuesSum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
      inverseValuesSum += 1 / numbersArray[i];
  }

  const stringConcat = numbersArray.join('');

  console.log(sum);
  console.log(inverseValuesSum);
  console.log(stringConcat);
}
aggregate(['1','2','3']);