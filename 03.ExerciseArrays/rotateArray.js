function rotateArray(...params){
    const arr = params[0];
    const rotation = params[1];

    for (let i = 0; i < rotation; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(' '))
}
rotateArray([1,2,3,4],2);
rotateArray(['Banana','Orange','Coconut','Apple'],15);