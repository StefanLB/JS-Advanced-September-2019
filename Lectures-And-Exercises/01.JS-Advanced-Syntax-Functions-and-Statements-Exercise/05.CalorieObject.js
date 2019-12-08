function solve(params){
    let result = '{ ';
    for (let i = 0; i <params.length ; i+=2) {
        if(i !== 0){
            result += ', '
        }

        result += params[i] + ': ' + params[(Number(i)+1)];
    }
    result += ' }';

    console.log(result);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);