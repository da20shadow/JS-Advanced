function extract(content) {
    let text = document.getElementById(content);
    let matches = [];
    let pattern = /[(]+[a-zA-Z ]+[)]+/g;
    let match = pattern.exec(text.textContent);

    while (match){
        matches.push(match[0]);
        match = pattern.exec(text.textContent);
    }
    let result = [];
    for (const el of matches) {
        let newEl = '';
        for (let i = 1; i < el.length -1; i++) {
            newEl += el[i];
        }
        result.push(newEl);
    }
    return result.join('; ');
}

// function extract(content) {
//     const contentEl = document.getElementById(content);
//     const pattern = /\([\w ]+\)/g;
//
//     let match = pattern.exec(contentEl.textContent);
//     let text = [];
//
//     while (match) {
//         text.push(match[0])
//         match = pattern.exec(contentEl.textContent);
//     }
//     console.log(text.join('; '));
// }