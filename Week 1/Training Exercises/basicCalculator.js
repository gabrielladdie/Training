function calculator(x, y, operator){
    if(operator = "+"){
        return x + y;
    } else if(operator = "-"){
        return x - y;
    } else if(operator = "*"){
        return x * y;
    } else if(operator = "/"){
        return x / y;
    } else {
        return null;
    }
}

console.log(calculator(2, 3, "+"));