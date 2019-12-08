function solve(params){
    let area = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    let overSpeedLimit = Number(params[0]) - area[params[1]];

    if(overSpeedLimit > 0 && overSpeedLimit <= 20){
        console.log('speeding');
    } else if(overSpeedLimit > 20 && overSpeedLimit <= 40){
        console.log('excessive speeding');
    } else if(overSpeedLimit > 40){
        console.log('reckless driving');
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);
