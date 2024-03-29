class Garden {
    plants = [];
    storage = [];
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
    }

    addPlant (plantName, spaceRequired){
        if (typeof plantName === 'string' && typeof spaceRequired === 'number'){

            if (spaceRequired > this.spaceAvailable){
                throw new Error("Not enough space in the garden.");
            }
            //TODO: if there is a problem maybe should make it with Map() because plantNames must be unique
            let obj = {
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            }
            this.plants.push(obj);
            this.spaceAvailable -= spaceRequired;

            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity){
        if (typeof quantity === 'number'){

            const plant = this.plants.find(x => x.plantName === plantName);

            if (!plant){
                throw new Error(`There is no ${plantName} in the garden.`)
            }

            if (plant.ripe){
                throw new Error(`The ${plantName} is already ripe.`)
            }

            if (quantity <= 0){
                throw new Error('The quantity cannot be zero or negative.')
            }

            plant.ripe = true;
            plant.quantity += quantity;

            return quantity === 1
                ? `${quantity} ${plantName} has successfully ripened.`
                : `${quantity} ${plantName}s have successfully ripened.`

        }
    }

    harvestPlant(plantName){
        let plant = this.plants.find(x => x.plantName === plantName);

        if (!plant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!plant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants = this.plants.filter(x => x.plantName !== plantName);

        let quantity = plant.quantity;
        let obj = {
            plantName,
            quantity,
        }
        this.storage.push(obj);
        let space = plant.spaceRequired;
        this.spaceAvailable += space;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport(){
        const report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`);
        const plantsNames = [];
        this.plants.sort((p1,p2) => p1.plantName.localeCompare(p2.plantName));
        this.plants.forEach(p => plantsNames.push(p.plantName));
        report.push(`Plants in the garden: ${plantsNames.join(', ')}`);

        this.storage.length === 0
            ? report.push("Plants in storage: The storage is empty.")
            : report.push(`Plants in storage: ${this.storage
                                .map(p => 
                Object.values(p).map(x =>
                            typeof x === 'string' 
                            ? x 
                            : `(${x})`).join(' ') )
                            .join(', ') }`);

        return report.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport())