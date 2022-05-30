function townToJSON(inputTownsInfoArr){
        let [keys,...townInfoArr] = inputTownsInfoArr;
        keys = keys.split(/[ |]+/).filter(el => el);
    const townsArr = [];
    for (const town of townInfoArr) {
        let currentTown = town.split(/[|]+/).filter(el => el); //[ 'Sofia', '42.696552', '23.32601' ]
        const obj = {};
        let latitude = Number(currentTown[1]).toFixed(2);
        let longLatitude = Number(currentTown[2]).toFixed(2);
        obj[keys[0]] = currentTown[0].trim();
        obj[keys[1]] = Number(latitude);
        obj[keys[2]] = Number(longLatitude);
        townsArr.push(obj);
    }
    console.log(JSON.stringify(townsArr))
}
townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Veliko Tarnovo | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])