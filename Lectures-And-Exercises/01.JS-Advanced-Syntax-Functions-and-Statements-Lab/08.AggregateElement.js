function solve(params){
    let sum = params.reduce((a,b) =>  Number(a) + Number(b),0);
    let concat = params.reduce((a,b) => String(a) + String(b));
    let sumInv = params.reduce((a,b) => Number(a) + 1/Number(b),1/params.shift());

    console.log(sum);
    console.log(sumInv);
    console.log(concat);
}

solve([1,2,3]);