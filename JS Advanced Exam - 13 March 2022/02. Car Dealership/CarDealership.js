class CarDealership{

    availableCars = [];
    soldCars = [];
    totalIncome = 0;

    constructor(name) {
        this.name = name;
    }

    addCar (model, horsepower, price, mileage){
        if (model.trim() === ''){
            throw new Error('Invalid input!');
        }

        if (horsepower < 0){
            throw new Error('Invalid input!');
        }

        if (price < 0){
            throw new Error('Invalid input!');
        }

        if (mileage < 0){
            throw new Error('Invalid input!');
        }

        this.availableCars.push({model,horsepower,price,mileage});

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredMileage){
        const carToSell = this.availableCars.find(c => c.model === model);

        if (!carToSell){
            throw new Error(`${model} was not found!`);
        }

        const difference = carToSell.mileage - desiredMileage;

        if (carToSell.mileage > desiredMileage && difference <= 40000){
            carToSell.price = carToSell.price * 0.95;
        }else if (carToSell.mileage > desiredMileage && difference > 40000){
            carToSell.price = carToSell.price * 0.90;
        }

        this.availableCars = this.availableCars.filter(c => c.model !== model);
        let horsepower = carToSell.horsepower;
        let soldPrice = carToSell.price;
        this.soldCars.push({model,horsepower,soldPrice});
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar (){

        if (this.availableCars.length === 0){
            return 'There are no available cars';
        }

        let report = ['-Available cars:'];
        this.availableCars.forEach(car =>
            report.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));
        return report.join('\n');
    }

    salesReport (criteria){

        if (criteria === 'horsepower'){
            this.soldCars.sort((car1,car2) => car2.horsepower - car1.horsepower);
        }else if (criteria === 'model'){
            this.soldCars.sort((car1,car2) => car1.model.localeCompare(car2.model));
        }else {
            throw new Error('Invalid criteria!');
        }

        let soldCars = [];

        soldCars.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        soldCars.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(car => {
            soldCars.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        });
        return soldCars.join('\n')
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
console.log(dealership.currentCar())
dealership.sellCar('Audi A3',200000)
console.log(dealership.salesReport('model'))
console.log(dealership.currentCar())

