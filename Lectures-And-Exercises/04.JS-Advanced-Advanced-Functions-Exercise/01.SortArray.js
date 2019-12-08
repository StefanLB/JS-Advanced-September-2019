function solve(data, crit){
    function sorter(sortCrit){
        return sortCrit === 'asc' ? function(a,b){ return a - b;} : function(a,b){return b - a;};
    }

    return data.sort((a,b) => sorter(crit)(a,b));
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));