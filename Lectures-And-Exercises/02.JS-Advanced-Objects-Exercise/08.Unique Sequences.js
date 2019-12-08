function solve(input){
    let result = new Set();

    for(let i = 0; i < input.length; i++){
        result.add((JSON.parse(input[i])).sort((a,b) => b - a).join(", "));
    }

    let resultArray = [];
    result.forEach(x => resultArray.push(x));

    resultArray.sort((a,b) => a.split(", ").length - b.split(", ").length).forEach(x => console.log(`[${x}]`));
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);
solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);