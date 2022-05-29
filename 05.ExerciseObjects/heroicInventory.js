function heroicInventory(heroes){
    let result = [];
    for (const hero of heroes) {
        let [name,level,items] = hero.split(' / ');
        items = items ? items.split(', ') : [];
        level = Number(level);
        result.push({name,level,items});
    }
    console.log(JSON.stringify(result))
}