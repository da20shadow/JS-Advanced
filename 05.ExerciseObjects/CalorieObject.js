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