function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst){
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function result(formatter) {
    return function (value) {
        return formatter(',','$',true,value);
    }
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71

function currencyFormatter2(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function result2(formatter){
    return function(value){
        return formatter(',','$',true,value);
    }
}

let dollarFormatter2 = result2(currencyFormatter2);

console.log(dollarFormatter2(5345));
console.log(dollarFormatter2(3.1429));
console.log(dollarFormatter2(2.709));