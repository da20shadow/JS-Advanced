function autoEngineering(carsArr){

    const carBrands = new Map();

    carsArr.forEach(car => {
        let [brand,model,producedCars] = car.split(' | ');
        producedCars = Number(producedCars);

        if (!carBrands.has(brand)){
            let currentModel = new Map();

            currentModel.set(model,producedCars);
            carBrands.set(brand,currentModel);
        }else {

            if (!carBrands.get(brand).has(model)){
                carBrands.get(brand).set(model,producedCars);
            }else {
                let currentProduction = carBrands.get(brand).get(model) + producedCars;
                carBrands.get(brand).set(model,currentProduction);
            }

        }

    })

    let brands = carBrands.entries();
    for (const brand of brands) {
        console.log(brand[0]);

        let models = brand[1].entries();
        for (const model of models) {
            console.log('###' + model[0] + ' -> ' + model[1])
        }

    }
}

autoEngineering(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])