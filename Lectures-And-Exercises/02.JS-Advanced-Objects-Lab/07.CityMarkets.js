function solve(input){
    var result = {};
    input.forEach(x => addSalesToCity(x.split(' -> ')));

    function addSalesToCity(info){
        let city = info[0];
        let product = info[1];
        let qtyAndPrice = info[2].split(" : ");
        let sales =  Number(qtyAndPrice[0])*Number(qtyAndPrice[1]);

        if (typeof result[city] === "undefined"){
            result[city] = {};
        }

        if (typeof result[city][product] === "undefined"){
            result[city][product] = 0;
        }

        result[city][product] += sales;
    }

    for (const city of Object.keys(result)){
        console.log(`Town - ${city}`);

        for (const prod in result[city]){
            console.log(`$$$${prod} : ${result[city][prod]}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);