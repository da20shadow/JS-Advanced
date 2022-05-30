// function colorize() {
//     let rows = document.getElementsByTagName('tr');
//     rows = Array.from(rows)
//     let row = 1;
//     let lenRows = rows.length;
//     for (let i = 0; i < lenRows; i++) {
//         if (row % 2 === 0){
//             rows[i].style.backgroundColor = 'teal';
//         }
//         row++;
//     }
// }
function colorize() {
    let rows = document.querySelectorAll('tr:nth-of-type(2n)');
    rows.forEach(li => li.style.backgroundColor = 'teal');
}