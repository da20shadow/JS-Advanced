function solve() {
    let textarea = document.querySelectorAll('textarea');
    let tbody = document.querySelector('tbody');

    [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));

    function execute(btn) {
        if (!textarea[0].value) {
            return;
        }

        if (btn.target.textContent === 'Generate') {
            let input = JSON.parse(textarea[0].value);

            input.forEach(furniture => {
                tbody.innerHTML += `<tr>
          <td><img src=${furniture.img}/></td>
          <td><p>${furniture.name}</p></td>
          <td><p>${furniture.price}</p></td>
          <td><p>${furniture.decFactor}</p></td>
          <td><input type="checkbox"/></td>
          </tr>`
            });

        } else {
            let furnitureName = [];
            let totalPrice = 0;
            let averageDecFactor = 0;

            [...document.querySelectorAll('input:checked')]
                .forEach(furniture => {
                    let parentRow = furniture.parentNode.parentNode;
                    averageDecFactor += Number(parentRow.children[3].textContent);
                    totalPrice += Number(parentRow.children[2].textContent);
                    furnitureName.push(parentRow.children[1].textContent);
                });

            textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
            textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
            textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}`;
        }
    }
}
//SECOND SOLUTION:
// function solve() {
//     let generateButton = document.querySelector('#exercise button');
//     let table = document.querySelector('tbody');
//     generateButton.addEventListener('click',addFurnitureToTable);
//
//     function addFurnitureToTable(e){
//         let furnitureArr = JSON.parse(e.target.parentNode.querySelector('textarea').value);
//
//         let addedFurniture = document.querySelector('tbody tr');
//         for (let furnitureObj of furnitureArr) {
//             let img = furnitureObj['img'];
//             let name = furnitureObj['name'];
//             let price = furnitureObj['price'];
//             let decFactor = furnitureObj['decFactor'];
//
//             let currentFurniture = addedFurniture.cloneNode(true);
//
//             currentFurniture.children[0].textContent += '\n';
//             currentFurniture.children[0].children[0]
//                 .setAttribute('src',img);
//             currentFurniture.children[1].textContent += '\n';
//             currentFurniture.children[1].querySelector('p').textContent = name;
//             currentFurniture.children[2].textContent += '\n';
//             currentFurniture.children[2].querySelector('p').textContent = price;
//             currentFurniture.children[3].textContent += '\n';
//             currentFurniture.children[3].querySelector('p').textContent = decFactor;
//             currentFurniture.children[4].textContent += '\n';
//             currentFurniture.children[4].querySelector('input').checked = true;
//             currentFurniture.children[4].querySelector('input').disabled = false;
//
//             table.appendChild(currentFurniture);
//         }
//     }
//
//     let buyBtn = document.querySelectorAll('#exercise button')[1];
//     let resultTextArea = document.querySelectorAll('#exercise textarea')[1];
//     buyBtn.addEventListener('click',processOrder);
//
//     function processOrder(e){
//         let allFurniture = Array.from(table.querySelectorAll('tr'));
//         let checkedArr = [];
//         allFurniture.forEach(f => {
//             let isChecked = f.children[4].querySelector('input').checked;
//             if (isChecked){
//                 checkedArr.push(f);
//             }
//         })
//         let cartObj = {};
//         checkedArr.forEach(c => {
//             let name = c.children[1].querySelector('p').textContent;
//             let price = c.children[2].querySelector('p').textContent;
//             let decFactor = c.children[3].querySelector('p').textContent;
//             cartObj[name] = [price,decFactor];
//         })
//         console.log(cartObj)
//         let furnitureList = Object.keys(cartObj);
//         console.log(furnitureList);
//         let prices = Object.values(cartObj);
//         console.log(prices)
//         let totalPrice = 0;
//         let totalAvgDecFactor = 0;
//         prices.map(p => {
//              totalPrice += Number(p[0]) });
//         prices.map(p => { totalAvgDecFactor += Number(p[1]) });
//         let avgDecor =  totalAvgDecFactor / prices.length;
//
//         resultTextArea.value = `Bought furniture: ${furnitureList.join(', ')}\n`;
//         resultTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//         resultTextArea.value += `Average decoration factor: ${avgDecor}`;
//     }
// }


//Function for Fikreto ;d
let startBtn = document.querySelector('#margin button');
let counter = document.getElementById('counter');
let message = document.getElementById('message');
let hideMessageBtn = document.getElementById('hideMessage');
hideMessageBtn.style.display = 'none';
hideMessageBtn.addEventListener('click',() => {
    hideMessageBtn.style.display = 'none';
    message.style.display = 'none';
})


startBtn.style.cursor = 'pointer';
startBtn.addEventListener('click',startTimer);

function startTimer(){
    startBtn.style.display = 'none';
    let i = 5;
    const timer = setInterval(startCounter,1000);

    function startCounter(){
        counter.textContent = i.toString();
        i--;
        if (i <0){
            clearInterval(timer);
            showMessage();
        }
    }
}
function showMessage(){
    counter.style.display = 'none';
    message.textContent = 'Ша ти пиша довечера че обедната почивка ми мина ;д';
    message.style.display = 'block';
    hideMessageBtn.style.display = 'block';
}

