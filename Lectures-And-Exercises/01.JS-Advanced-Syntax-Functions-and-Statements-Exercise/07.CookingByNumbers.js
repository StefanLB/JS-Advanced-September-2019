function solve(params){
    let num = Number(params[0]);

    const operationsMap = {
        'chop': a => a / 2,
        'dice': a => Math.sqrt(a),
        'spice': a => a + 1,
        'bake': a => a * 3,
        'fillet': a => a * 0.8,
    };

    for (let i = 1; i < params.length; i++) {
        num = operationsMap[params[i]](num);
        console.log(num);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);