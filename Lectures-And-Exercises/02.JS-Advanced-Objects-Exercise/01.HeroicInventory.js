function solve(input){
    let result = [];

    input.forEach(x => addDataToResult(x.split(" / ")));

    function addDataToResult(x){
        let currentItems = [];
        if (x.length > 2){
            currentItems = x[2].split(", ");
        }

        result.push({
            name: x[0],
            level: Number(x[1]),
            items: currentItems
        })
    }

    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);