function argumentInfo(...args){

    const countTypes = {};

    for (const arg of args) {
        const argType = typeof arg;
        console.log(argType + ": " + arg)
        countTypes[argType] ? countTypes[argType] += 1 : countTypes[argType] = 1;
    }

    Object.keys((countTypes))
        .sort((a,b) => {
            return countTypes[b] - countTypes[a]
        })
        .forEach((key) => console.log(`${key} = ${countTypes[key]}`));
}
argumentInfo('cat', 42,'kitten',1,3,4, function () { console.log('Hello world!'); })