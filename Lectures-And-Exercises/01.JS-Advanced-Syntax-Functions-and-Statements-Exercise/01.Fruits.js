function solve(fruit, weight, price){
    let money = (price*(weight/1000)).toFixed(2);
    let weightKg = (weight/1000).toFixed(2);

    console.log(`I need $${money} to buy ${weightKg} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);