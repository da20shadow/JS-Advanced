class VegetableStore {
    availableProducts = [];
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
    }

    loadingVegetables (vegetables){

        let vTypes = [];
        vegetables.forEach(v => {
            let [type,quantity,price] = v.split(/\s+/);
            if (!vTypes.includes(type)){vTypes.push(type);}
            quantity = Number(quantity)
            price = Number(price);

            const product = this.availableProducts.find(p => p.type === type);
            if (product){
                product.quantity += quantity;
                if (product.price < price){
                    product.price = price;
                }
            }else {
                this.availableProducts.push({type,quantity,price})
            }
        })
        return `Successfully added ${vTypes.join(', ')}`;
    }

    buyingVegetables (selectedProducts){
        let totalPrice = 0;
        selectedProducts.forEach(product => {
            let [type,quantity] = product.split(/\s+/);
            quantity = Number(quantity);
            let p = this.availableProducts.find(p => p.type === type);
            if (!p){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > p.quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += (p.price * quantity);
            p.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity){
        let product = this.availableProducts.find(p => p.type === type);

        if (!product){
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > product.quantity){
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        product.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision (){
        let report = [];
        report.push("Available vegetables:");

        this.availableProducts.sort((p1,p2)=> p1.price - p2.price);
        this.availableProducts.forEach(p => report.push(`${p.type}-${p.quantity}-$${p.price}`));
        report.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return report.join('\n');
    }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra",1));
console.log(vegStore.rottingVegetable("Okra",2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision())