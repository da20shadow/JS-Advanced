function calculator() {

    let num1 = null;
    let num2 =  null;
    let result =  null;
    return {
        init(selector1,selector2,resultSelector){
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add(){
            result.value = Number(num1.value) + Number(num2.value);
        },
        subtract(){
            result.value = Number(num1.value) - Number(num2.value);
        }
    }
}
const calculate = calculator();
calculate.init('#num1','#num2','#result');