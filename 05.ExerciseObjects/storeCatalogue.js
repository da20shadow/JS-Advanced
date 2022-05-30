function storeCatalogue(productsList){
    productsList.sort((a,b) => a.localeCompare(b));

    const products = {}; // {A: {product: 12, product: 16, product: 12}, B: {product: 9}
    let currentLetter;

    for (let product of productsList) {
        let [productName,price] = product.split(' : ');

        if (productName[0] !== currentLetter){
            currentLetter = productName[0];
            products[currentLetter] = {};
        }
        products[currentLetter][productName] = price;
    }
    for (const productsKey in products) {
        console.log(productsKey);
        const productsList = Object.entries(products[productsKey]);
        productsList.forEach(p => {
            console.log(` ${p[0]}: ${p[1]}`)
        })
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])