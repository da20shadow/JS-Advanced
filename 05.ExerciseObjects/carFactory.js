function carFactory(order){
const engines = {
    smallEngine: {power: 90, volume: 1800},
    normalEngine: {power: 120, volume: 2400},
    monsterEngine: {power: 200, volume: 3500}
}
    let engine;
    if (engines.smallEngine.power >= order.power){
        engine = engines.smallEngine;
    }else if (engines.normalEngine.power >= order.power){
        engine = engines.normalEngine;
    }else if (engines.monsterEngine.power >= order.power){
        engine = engines.monsterEngine;
    }

    let wheel = order.wheelsize;
    if (wheel % 2 === 0){
        wheel--;
    }
    let model = order.model;
    const color = order.color;
    const carriage = order.carriage;

    return {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels: [wheel, wheel, wheel, wheel]
    };
}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
))