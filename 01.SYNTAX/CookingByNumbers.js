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