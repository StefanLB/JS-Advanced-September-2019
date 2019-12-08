function solve(a,b,c){
    let result = Math.max(a,Math.max(b,c));
    console.log(`The largest number is ${result}.`);
}

function solve2(...params){
    console.log(`The largest number is ${params.sort((a,b) => a - b).pop()}.`)
}

// (a,b) => a - b sorts largest to smallest

function solve3(...params){
    console.log(`The largest number is ${Math.max(...params)}.`)
}

solve(1,2,3);
solve2(1,2,3);
solve3(1,2,3);