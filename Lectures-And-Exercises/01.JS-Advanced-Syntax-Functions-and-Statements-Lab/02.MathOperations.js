function solve(num1, num2, operator){
    let result;
    switch(operator){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}

function solve2(operator, ...params){
    return params
        .reduce(
            (a,b) => eval(`${a} ${operator} ${b} `),
            params.shift()
        );
}

const operationsMap = {
    '+': (x,y) => x + y,
    '-': (x,y) => x - y,
    '/': (x,y) => x / y,
    '*': (x,y) => x * y,
    '%': (x,y) => x % y,
    '**': (x,y) => x ** y,
}

function solve3(operator, ...params){
    return params
        .reduce(
            (a,b) => operationsMap[operator](a, Number(b)), Number(params.shift())
        );
}

solve(5,10,'+');
console.log(solve2('+',5, 10));
console.log(solve3('+',5, 10));