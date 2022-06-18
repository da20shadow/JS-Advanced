class SummerCamp {

    priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};

    constructor(organizer,location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if (!this.priceForTheCamp[condition]){
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(x => x.name === name)){
            return (`The ${name} is already registered at the camp.`);
        }

        if (money < this.priceForTheCamp[condition]){
            return (`The money is not enough to pay the stay at the camp.`);
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        if (!this.listOfParticipants.some(x => x.name === name)){
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2){
        let player1 = this.listOfParticipants.find(x => x.name === participant1);

        if (!player1){
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame === 'WaterBalloonFights'){
            let player2 = this.listOfParticipants.find(x => x.name === participant2);

            if (!player2){
                throw new Error(`Invalid entered name/s.`);
            }

            if (player1.condition !== player2.condition){
                throw new Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power){
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            }else if (player2.power > player1.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            }else {
                return `There is no winner.`;
            }

        }else if (typeOfGame === 'Battleship'){
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString(){
        const str = [];
        const numberOfParticipants = this.listOfParticipants.length;
        str.push(`${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((p1,p2) => p2.wins - p1.wins);
        this.listOfParticipants.forEach(p => {
            str.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        });
        return str.join('\n');
    }

}
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

console.log(camp.registerParticipant('Petar Petarson', 'child', 300)) // "The Petar Petarson was successfully registered."

console.log(camp.registerParticipant('Sara Dickinson', 'child', 200)) //"The Sara Dickinson was successfully registered.");

console.log(camp.timeToPlay('Battleship', 'Sara Dickinson')) // "The Sara Dickinson successfully completed the game Battleship.");

console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson')) // "The Sara Dickinson is winner in the game WaterBalloonFights.");

console.log(camp.toString()) //`Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Sara Dickinson - child - 120 - 1
// Petar Petarson - child - 100 - 0`);

