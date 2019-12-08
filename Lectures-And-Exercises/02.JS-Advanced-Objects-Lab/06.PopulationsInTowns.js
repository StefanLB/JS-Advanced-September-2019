function solve(input){
    let cities = {};
    input.forEach(x => addPopToCity(x.split(' <-> ')));

    function addPopToCity(cityAndPop){
        if (typeof cities[cityAndPop[0]] === "undefined"){
            cities[cityAndPop[0]] = 0;
        }
        cities[cityAndPop[0]] += Number(cityAndPop[1]);
    }

    for (const key in cities){
        console.log(`${key} : ${cities[key]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);