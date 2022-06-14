function juiceFlavors(fruits){

    let fruitsMap = new Map();
    let bottles = new Map();

    fruits.forEach(f => {
        let [fruit,quantity] = f.split(' => ');
        quantity = Number(quantity);

        if (!fruitsMap.has(fruit)){
            fruitsMap.set(fruit,quantity);
        }else {
            let currentQuantity = fruitsMap.get(fruit);
            fruitsMap.set(fruit,currentQuantity + quantity);
        }

        if (fruitsMap.get(fruit) >= 1000){
            let currentQuantity = fruitsMap.get(fruit);

            let numOfBottles = Math.trunc(currentQuantity / 1000);
            let remains = currentQuantity % 1000;

            if (!bottles.has(fruit)){
                bottles.set(fruit,numOfBottles)
            }else{
                let currentBottles = bottles.get(fruit);
                bottles.set(fruit,currentBottles + numOfBottles);
            }

            fruitsMap.set(fruit,remains);

            // while(currentQuantity >= 1000){
            //
            //     currentQuantity -= 1000;
            //
            //     if (!bottles.has(fruit)){
            //         bottles.set(fruit,1)
            //     }else{
            //         let currentBottles = bottles.get(fruit);
            //         bottles.set(fruit,currentBottles + 1);
            //     }
            // }
            // fruitsMap.set(fruit,currentQuantity);
        }

    })


    for (const bottle of bottles) {
        console.log(bottle.join(' => '))
    }

}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'] )

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])