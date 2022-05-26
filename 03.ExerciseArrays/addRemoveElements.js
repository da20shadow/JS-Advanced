function addRemoveElements(commands) {

    const arr = [];
    let lastEl = 0;

    for (const command of commands) {
        lastEl++;
        switch (command) {
            case 'add':
                arr.push(lastEl);
                break;
            case 'remove':
                arr.pop();
                break;
        }
    }
    if (arr.length === 0) {
        console.log('Empty')
    } else {
        arr.forEach(el => console.log(el))
    }
}

addRemoveElements(['add', 'add', 'remove', 'add', 'add'])