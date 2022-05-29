function lowestPricesCities(townsList){

    let productsObj = {}; //key: {product: {town, price}
    for (const town of townsList) {
        let [townName,product,price] = town.split(' | ');
        price = Number(price);

        if (!productsObj.hasOwnProperty(product)){
            productsObj[product] = {townName,price};
        }else if (productsObj[product].price > price){
            productsObj[product] = {townName,price};
        }
    }
    for (const product in productsObj) {
        console.log(`${product} -> ${productsObj[product].price} (${productsObj[product].townName})`)
    }
}
lowestPricesCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])