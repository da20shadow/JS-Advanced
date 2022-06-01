function solve() {
   let products = Array.from(document.querySelectorAll('.add-product'));
   let totalPrice = 0;
   let productsList = {};

    products.forEach(p => {
        p.addEventListener('click',addProduct);
    })

    function addProduct(e){

        if (e.target.tagName === 'BUTTON'){
            let productName = e.target.parentNode.parentNode.querySelector('.product-details .product-title').textContent;
            let price = e.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
            price = Number(price).toFixed(2);
            totalPrice += Number(price);
            productsList[productName] = price;
            let productInfo = `Added ${productName} for ${price} to the cart.\n`;
            document.querySelector('textarea').value += productInfo;
        }
    }

    let checkOutBtn = document.querySelector('.checkout');

    checkOutBtn.addEventListener('click',processOrder);

    function processOrder(){
        let textArea = document.querySelector('textarea');
        let productsNames = Object.keys(productsList);
        let textToAdd = `You bought ${productsNames.join(', ')} for ${totalPrice.toFixed(2)}.`;
        textArea.value += textToAdd;

        let allButtons = Array.from(document.querySelectorAll('button'));
        allButtons.forEach(btn => {
            btn.disabled = true;
        })
    }
}

//Second solution:
// function solve() {
//     let button = document.getElementsByTagName("button");
//     let textArea = document.getElementsByTagName("textarea")[0];
//
//     let list = new Map()
//
//     Array.from(button).forEach(b => {
//         b.addEventListener("click", (e) => {
//             if (e.target.className === "add-product") {
//                 let currentElement = e.target.parentElement;
//
//                 let priceElement = currentElement.nextElementSibling.innerHTML;
//                 let brandElement = currentElement.previousElementSibling.children[0].innerHTML;
//
//                 if (!list.has(brandElement)) {
//                     list.set(brandElement, 0);
//                 }
//                 list.set(brandElement, list.get(brandElement) + Number(priceElement));
//
//                 textArea.value += `Added ${brandElement} for ${priceElement} to the cart.\n`;
//             } else {
//
//                 let totalPrice = Number(Array.from(list.values()).reduce((a, b) => +a + +b, 0));
//                 textArea.value += `You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`;
//
//                 let buttons = Array.from(document.querySelectorAll('button'));
//                 buttons.forEach(button => button.disabled = true);
//             }
//         });
//     });
// }