function solve(input){
    let result = {};

    input.forEach(x => addCitiesToProd(x.split(' | ')));

    function addCitiesToProd(info){
        let city = info[0];
        let product = info[1];
        let price = Number(info[2]);

        if (typeof result[product] === "undefined"){
            result[product] = {};
        }

        if (typeof result[product][city] === "undefined"){
            result[product][city] = 0;
        }

        result[product][city] = price;
    }

    for (const product of Object.keys(result)){
        let cityWithLowestPrice;
        let lowestPrice = Number.MAX_VALUE;

        for (const city of Object.keys(result[product])){
            if (result[product][city] < lowestPrice ){
                cityWithLowestPrice = city;
                lowestPrice = result[product][city];
            }
        }

        console.log(`${product} -> ${lowestPrice} (${cityWithLowestPrice})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);