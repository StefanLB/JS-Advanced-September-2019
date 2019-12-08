function solve(params){
    const typeMap = {
        'coffee caffeine': 0.8,
        'coffee decaf': 0.9,
        'tea': 0.8
    };

    let totalSpent = 0;

    for (let i = 0; i < params.length; i++) {
        let currentParams = params[i].toString().split(', ');
        let coinsIns = Number(currentParams[0]);
        let typeOfDrink = currentParams[1];
        typeOfDrink = typeOfDrink === 'coffee' ? (typeOfDrink + ' ' + currentParams[2]) : typeOfDrink;
        let milk = currentParams[currentParams.length-2] === 'milk' ? 0.1 : 0;
        let sugar = Number(currentParams[currentParams.length-1]) > 0 ? 0.1 : 0;

        let drinkPrice = typeMap[typeOfDrink] + milk + sugar;

        if (coinsIns >= drinkPrice){
            totalSpent+=drinkPrice;
            console.log(`You ordered ${typeOfDrink === 'tea' ? 'tea':'coffee'}. Price: $${drinkPrice.toFixed(2)} Change: $${(coinsIns-drinkPrice).toFixed(2)}`);
        } else {
            console.log(`Not enough money for ${typeOfDrink === 'tea' ? 'tea':'coffee'}. Need $${(drinkPrice-coinsIns).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${totalSpent.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);