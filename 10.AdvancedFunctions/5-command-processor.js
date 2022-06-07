function solution() {
    let result = '';

    return {
        append(str) {
            result += str;
        },
        removeStart(num) {
            result = result.substring(num);
        },
        removeEnd(num) {
            result = result.substring(0, result.length - num);
        },
        print() {
            console.log(result);
        }
    };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


function commandProcessor(){
    return {
        string: '',
        append(str){
            this.string += str;
        },
        removeStart(n){
            this.string = this.string.substr(n);
        },
        removeEnd(n){
            this.string = this.string.substring(0,this.string.length - n);
        },
        print(){
            console.log(this.string);
        }
    }
}

console.log('========================')
const myObj = commandProcessor();
myObj.append('asd');
myObj.print()
myObj.removeStart(1);
myObj.print();
myObj.removeEnd(1);
myObj.print();