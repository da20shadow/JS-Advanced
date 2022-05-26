function splitBy(...params){
    const arr = params[0];
    const delimiter = params[1];

    console.log(arr.join(delimiter))
}
splitBy(['One','Two','Three','Four','Five'],'-')