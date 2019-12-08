function solve(input){
    const alphaSort = (a, b) => a.localeCompare(b);
    let catalogue = {};

    for (let line of input){
        let [name, price] = line.split(" : ");
        price = Number(price);
        let initial = name[0];

        if (!catalogue.hasOwnProperty(initial)){
            catalogue[initial] = {};
        }

        let products = catalogue[initial];

        if (!products.hasOwnProperty(name)){
            products[name] = price;
        }
    }

    let sortedInitials = Object.keys(catalogue)
        .sort(alphaSort);
    for (let initial of sortedInitials){
        console.log(initial);
        let products = catalogue[initial];
        let sortedProducts = Object.keys(products).sort(alphaSort);

        for(let p of sortedProducts){
            console.log(`  ${p}: ${products[p]}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
solve(['Banana : 2',
    'Rubic\'s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);