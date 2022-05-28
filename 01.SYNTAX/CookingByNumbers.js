//Task 07. Cooking by Numbers
function CookingByNumbers(number,firstOperation, secondOperation,
                          thirdOperation,fourthOperation,fiftiethOperation){
    number = Number(number);
    cooking(firstOperation);
    cooking(secondOperation);
    cooking(thirdOperation);
    cooking(fourthOperation);
    cooking(fiftiethOperation);

    function cooking(operation){

    switch (operation){
        case 'chop':
            //divide the num by 2
            number /= 2;
            console.log(number);
            break;
        case 'dice':
            //square root of a number
            number = Math.sqrt(number);
            console.log(number);
            break;
        case 'spice':
            //add 1 to the number
            number++;
            console.log(number);
            break;
        case 'bake':
            //multiply number by 3
            number *= 3;
            console.log(number);
            break;
        case 'fillet':
            //subtract 20% from the number
            number = number - (number * 0.20);
            console.log(number);
            break;
    }
    }
}
CookingByNumbers('9', 'dice', 'spice',
    'chop', 'bake','fillet');

function secondSolution(number,...operationsList){
    number = Number(number);
    const operations = operationsList;
    const arr = [];
    const commander = {
        chop() {number /= 2; arr.push(number);},
        dice(){number = Math.sqrt(number); arr.push(number);},
        spice() {number++; arr.push(number)},
        bake() {number *= 3; arr.push(number)},
        fillet() {number = number - (number * 0.20); arr.push(number)},
        default(){/* ... */}
    }

    operations.forEach(op => commander[op] ? commander[op]() : commander.default());

    arr.forEach(el => console.log(el))
}
secondSolution(9,'dice','spice','chop','bake','fillet')