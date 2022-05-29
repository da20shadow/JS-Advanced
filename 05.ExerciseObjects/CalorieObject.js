//function that receive array of strings (JSON)
    //create foods array
    //create calories array
    //for loop each element in the stringJSON
        //check if the index is even number
            //add the element to array with the foods
        //else odd index is a number representing the calories in 100 grams of the food
            //add to the array with calories
    //create an object
        //for loop through the foods array
            //add the food name as key and calories as value
    //print the created object

function calorieObject(string){
    const foods = [];
    const calories = [];

    const lengthStr = string.length;
    for (let i = 0; i < lengthStr; i++) {
        if (i % 2 === 0){
            foods.push(string[i]);
        }else {
            calories.push(Number(string[i]));
        }
    }

    const object = {};

    const foodsLen = foods.length;
    for (let i = 0; i < foodsLen; i++) {
        object[foods[i]] = calories[i];
    }
    console.log(object)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])