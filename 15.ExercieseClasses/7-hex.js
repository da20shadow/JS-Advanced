class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf(){
        return this.value;
    }
    toString(){
        return '0x' + `${this.value.toString(16)}`.toUpperCase();
    }
    plus(number){
        let result;
        if (typeof number === 'object'){
            result = this.value + number.value;
        }else {
            result = this.value + number;
        }
        return  new Hex(result);
    }
    minus(number){
        let result;
        if (typeof number === 'object'){
            result = this.value - number.value;
        }else {
            result = this.value - number;
        }
        return  new Hex(result);
    }
    parse(string){
        return parseInt(string,16)
    }
}