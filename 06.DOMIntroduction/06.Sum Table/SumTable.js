function sumTable() {
    let sum = document.getElementById('sum');
    let prices = document.querySelectorAll('td');

    let total = 0;
    prices.forEach((product,index) => {
        if (index % 2 !== 0){
            total += Number(product.textContent);
            console.log(product.textContent)
        }
    })
    sum.textContent = total;
    console.log(total)
}

//Second solution:
function sumTableSecondSolution(){
    let costs = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = Array.from(costs).reduce((a,b) => {
    let current = Number(b.textContent) || 0;
        return a + current;
    },0)
    let result = document.getElementById('sum');
    result.textContent = sum;
}