function heroes(){
    return {
        mage(name){
            return {
                name,
                health: 100,
                mana: 100,
                cast(spell){
                    this.mana -= 1;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        },
        fighter(name){
            return {
                name,
                health: 100,
                stamina: 100,
                fight(){
                    this.stamina -= 1;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        }
    }
}
let create = heroes();
const mag = create.mage('Gandalf');
mag.cast('Abra cadabra');

const leonid = create.fighter('Leonid');
leonid.fight();

console.log(mag.mana);
console.log(leonid.stamina)