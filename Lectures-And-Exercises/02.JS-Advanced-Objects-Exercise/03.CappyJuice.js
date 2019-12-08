function solve(input){
    let unfinishedBottles = {};
    let finishedBottles = {};

    for (let i = 0; i < input.length; i++) {
        let currentFruit = input[i].split(" => ")[0];
        let currentMl = Number(input[i].split(" => ")[1]);

        if (typeof unfinishedBottles[currentFruit] === "undefined"){
            unfinishedBottles[currentFruit] = 0;
        }
        unfinishedBottles[currentFruit] += currentMl;

        if (unfinishedBottles[currentFruit] >= 1000){

            typeof finishedBottles[currentFruit] === "undefined" ? finishedBottles[currentFruit] = Math.trunc(unfinishedBottles[currentFruit]/1000) : finishedBottles[currentFruit] += Math.trunc(unfinishedBottles[currentFruit]/1000);
            unfinishedBottles[currentFruit] = unfinishedBottles[currentFruit]%1000;
        }
    }

    for (const key in finishedBottles) {
        console.log(`${key} => ${finishedBottles[key]}`);
    }

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);