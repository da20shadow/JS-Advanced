function listProcessor(input){

    let arr = [];
    const commands = {
        add(str){
            arr.push(str);
        },
        remove(str){
            arr = arr.filter(e => e !== str);
        },
        print(){
            console.log(arr.join(','))
        }
    }
    for (const inputElement of input) {
        const [command,string] = inputElement.split(' ');
        commands[command](string);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

