//Task 1 - Fruits
function calculateMoneyForFruits(fruitType, grams, pricePerKg) {
  let weight = grams / 1000;
  let money = weight * pricePerKg;

  weight = weight.toFixed(2);
  money = money.toFixed(2);

  console.log(`I need $${money} to buy ${weight} kilograms ${fruitType}.`);
}

