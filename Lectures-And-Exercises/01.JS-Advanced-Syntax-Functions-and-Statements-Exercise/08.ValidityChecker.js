function solve(params){
    //The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
    //d = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    let x1 = params[0];
    let y1 = params[1];
    let x2 = params[2];
    let y2 = params[3];

    console.log(`{${x1}, ${y1}} to {0, 0} is ${ Number.isInteger((Math.sqrt(x1**2 + y1**2))) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${ Number.isInteger((Math.sqrt(x2**2 + y2**2))) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${ Number.isInteger((Math.sqrt((x2-x1)**2 + (y2-y1)**2))) ? 'valid' : 'invalid'}`);
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);