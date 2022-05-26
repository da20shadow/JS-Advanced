function listOfNames(names){
    names.sort((a,b)=> a.localeCompare(b));

        let i = 1;
    names.forEach(el => {
        console.log(`${i}.${el}`)
        i++;
    })
}
listOfNames(['Abi','Rabi','babi'])