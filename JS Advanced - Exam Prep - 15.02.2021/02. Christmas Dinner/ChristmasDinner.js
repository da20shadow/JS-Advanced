class ChristmasDinner {
    dishes = [];
    products = [];
    guests = {};

    constructor(budget) {
        this._budget = budget;
    }

    set _budget(budget){
        if (budget < 0){
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
    }

    shopping(product){
        const type = product[0];
        const price = product[1];

        if (this.budget < price){
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe){
        const recipeName = recipe.recipeName;
        const productsList = recipe.productsList;

        let areAllProductsIncluded = true;

        productsList.forEach(p => {
            if (!this.products.includes(p)){
                areAllProductsIncluded = false;
            }
        })

        if (areAllProductsIncluded){
            this.dishes.push({recipeName: recipeName, productsList: productsList});
            return `${recipeName} has been successfully cooked!`;
        }else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish){

        const findDish = this.dishes.find(d => d.recipeName === dish);

        if (!findDish){
            throw new Error('We do not have this dish');
        }
        if (this.guests[name]){
            throw new Error('This guest has already been invited')
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        const guestList = [];

        const allGuests = Object.entries(this.guests);


        let products = Object.values(this.dishes);
        allGuests.forEach(g => {

            let currentProducts = products.find(el => el.recipeName === g[1]);

            guestList.push(`${g[0]} will eat ${g[1]}, which consists of ${currentProducts.productsList.join(', ')}`);
        })
        return guestList.join('\n');
    }

}
let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
console.log(dinner.shopping(['Honey', 10]));

console.log('---------------------------------');
console.log(dinner.products);
console.log('---------------------------------');

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

