function breakFastRobot(){

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple(quantity){
            let neededCarb = 1 * quantity;
            let neededFlavours = 2 * quantity;

            if (ingredients['carbohydrate'] < neededCarb){
                return "Error: not enough carbohydrate in stock"
            }else if (ingredients['flavour'] < neededFlavours){
                return "Error: not enough flavours in stock"
            }else{
                ingredients['carbohydrate'] -= neededCarb;
                ingredients['flavour'] -= neededFlavours;
                return "Success"
            }
        },
        lemonade(quantity){
            let neededCarb = 10 * quantity;
            let neededFlavours = 20 * quantity;

            if (ingredients['carbohydrate'] < neededCarb){
                return "Error: not enough carbohydrate in stock"
            }else if (ingredients['flavour'] < neededFlavours){
                return "Error: not enough flavours in stock"
            }else{
                ingredients['carbohydrate'] -= neededCarb;
                ingredients['flavour'] -= neededFlavours;
                return "Success"
            }
        },
        burger(quantity){
            let neededCarb = 5 * quantity;
            let neededFlavours = 3 * quantity;
            let neededFat = 7 * quantity;

            if (ingredients['carbohydrate'] < neededCarb){
                return "Error: not enough carbohydrate in stock"
            }else if (ingredients['flavour'] < neededFlavours){
                return "Error: not enough flavours in stock"
            }else if (ingredients['fat'] < neededFat){
                return "Error: not enough fat in stock"
            }else{
                ingredients['carbohydrate'] -= neededCarb;
                ingredients['flavour'] -= neededFlavours;
                ingredients['fat'] -= neededFat;
                return "Success"
            }
        },
        eggs(quantity){
            let neededProtein = 5 * quantity;
            let neededFlavours = 1 * quantity;
            let neededFat = 1 * quantity;

            if (ingredients['protein'] < neededProtein){
                return "Error: not enough protein in stock"
            }else if (ingredients['flavour'] < neededFlavours){
                return "Error: not enough flavours in stock"
            }else if (ingredients['fat'] < neededFat){
                return "Error: not enough fat in stock"
            }else{
                ingredients['protein'] -= neededProtein;
                ingredients['flavour'] -= neededFlavours;
                ingredients['fat'] -= neededFat;
                return "Success"
            }
        },
        turkey(quantity){
            let neededProtein = 10 * quantity;
            let neededCarb = 10 * quantity;
            let neededFlavours = 10 * quantity;
            let neededFat = 10 * quantity;

            if (ingredients['protein'] < neededProtein){
                return "Error: not enough protein in stock"
            }else if (ingredients['carbohydrate'] < neededCarb){
                return "Error: not enough carbohydrate in stock"
            }else if (ingredients['flavour'] < neededFlavours){
                return "Error: not enough flavours in stock"
            }else if (ingredients['fat'] < neededFat){
                return "Error: not enough fat in stock"
            }else{
                ingredients['protein'] -= neededProtein;
                ingredients['carbohydrate'] -= neededCarb;
                ingredients['flavour'] -= neededFlavours;
                ingredients['fat'] -= neededFat;
                return "Success"
            }
        }
    }

    let instructions = {
        restock(microElement, quantity){
            ingredients[microElement] += Number(quantity);
            return 'Success';
        },
        prepare(recipe,quantity){
            return recipes[recipe](Number(quantity));
        },
        report(){
            return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
        }
    }

    return (string) => {
        let [instruction,recipe,quantity] = string.split(' ');
        return instructions[instruction](recipe,quantity);
    }
}
let manager = breakFastRobot();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));


//second solution
function closure() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        apple: parseRecipeData(0, 1, 0, 2),
        lemonade: parseRecipeData(0, 10, 0, 20),
        burger: parseRecipeData(0, 5, 7, 3),
        eggs: parseRecipeData(5, 0, 1, 1),
        turkey: parseRecipeData(10, 10, 10, 10),
    }

    function parseRecipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour,
        }
    }

    function restock(ingr, x) {
        ingredients[ingr] += x
        return "Success";
    }

    function prepare(required, quantity) {
        const parsedData = Object.entries(required).map(x => [
            x[0],
            x[1] * quantity,
        ])

        for (let i = 0; i < parsedData.length; i++) {
            const [name, amount] = parsedData[i]
            if (ingredients[name] - amount < 0) {
                return `Error: not enough ${name} in stock`;
            }
        }

        parsedData.forEach(([name, amount]) => (ingredients[name] -= amount))
        return "Success";
    }

    const report = () =>
        Object.entries(ingredients)
            .map(([key, value]) => `${key}=${value}`)
            .join(" ");

    const actions = {
        prepare: (r, q) => prepare(recipes[r], q),
        restock,
        report,
    }

    return s => {
        const [command, a, b] = s
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)));

        return actions[command](a, b);
    }
}