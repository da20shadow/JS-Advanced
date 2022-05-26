function pieceOfPie(...params){
    const pies = params[0];
    let firstString = params[1];
    let secondString = params[2];

    return pies.slice(pies.indexOf(firstString), pies.indexOf(secondString) + 1);
}
pieceOfPie(['pum','key','cherry','lemon','sugar'],'key','lemon')