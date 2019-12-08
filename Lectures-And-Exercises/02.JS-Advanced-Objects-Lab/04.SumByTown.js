function solve(input){
    let result = {};

    for (let i = 0; i < input.length; i+=2) {
        if (typeof result[input[i]] === "undefined"){
            result[input[i]] = 0;
        }
        result[input[i]] += Number(input[i+1]);
    }

    console.log(JSON.stringify(result));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);