function townPopulation(arr){

    let townRegistry = {};
    for (const townInfo of arr) {
        let currentTown = townInfo.split(' <-> ');
        let [town,population] = currentTown;
        if (townRegistry.hasOwnProperty(town)){
            population = Number(population);
            population += townRegistry[town];
        }
        townRegistry[town] = Number(population);
    }
    for (const [town,population] of Object.entries(townRegistry)) {
        console.log(`${town} : ${population}`)
    }
}
townPopulation(['City <-> 1000', 'City <-> 1000'])