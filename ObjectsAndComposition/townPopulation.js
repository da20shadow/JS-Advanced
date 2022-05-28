function townPopulation(arr){

    let townRegistry = {};
    for (const townInfo of arr) {
        let currentTown = townInfo.split(' <-> ');
        let [town,population] = currentTown;
        if (townRegistry.hasOwnProperty(town)){
            townRegistry[town] += Number(population);
        }else {
            townRegistry[town] = Number(population);
        }
    }
    for (const town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`)
    }
}
townPopulation(['City <-> 1000', 'City <-> 1000'])