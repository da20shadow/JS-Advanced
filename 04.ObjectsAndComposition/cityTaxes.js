function cityTaxes(name,population,treasury,taxRate = 10){
    return {
        name,
        population,
        treasury,
        taxRate,
        collectTaxes(){
            let taxes = Math.floor(this.population * this.taxRate);
            this.treasury += taxes;
        },
        applyGrowth(percent){
            let increaseWith = Math.floor(this.population * (percent / 100));
            this.population += increaseWith;
        },
        applyRecession(percent){
            let decrease = Math.floor(this.treasury * (percent / 100));
            this.treasury -= decrease;
        }
    };
}
const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);