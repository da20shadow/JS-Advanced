function functionalSum(a){
    const calc = (b) => {
        a += b;
        return calc;
    }
    calc.toString = function (){
        return a;
    }

    return calc;
}

functionalSum(1)(6)(-3)