//Task 9 - Words Uppercase
function uppercaseWords(string){
    let arr = string.match(/\w+/g);
    let upperArr =[];
    for (const word of arr) {
        upperArr.push(word.toUpperCase());
    }
    console.log(upperArr.join(', '))
}
uppercaseWords('Hi, how are you? bro')
//Second Solution
function uppercaseWordsSecondSolution(string){
    console.log(string.match(/\w+/g).join(', ').toLocaleUpperCase());
}
uppercaseWordsSecondSolution('Hi, how are you?');