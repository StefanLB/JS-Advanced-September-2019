function solve(arr, startInd, endInd){
    if(!Array.isArray(arr)){
        return NaN;
    }

    return arr.slice(Math.max(0,startInd),Math.min(arr.length,endInd)+1)
            .reduce( (prev,curr) => prev += Number(curr),
            0);
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));
