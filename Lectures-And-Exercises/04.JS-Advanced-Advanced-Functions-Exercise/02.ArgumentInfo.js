function solve(...args){
    let typesCount = {};

    function fillType(x){
        if(typeof typesCount[typeof x] === 'undefined'){
            typesCount[typeof x] = 0
        }

        typesCount[typeof x]++;
    }

    function logArg(x){
        console.log(`${typeof x}: ${x}`)
    }

    args.forEach(x => {
        fillType(x);
        logArg(x);
    });

    let typesCountSorted = Object.keys(typesCount).sort(function(a,b){return typesCount[b]-typesCount[a]})

    for(let i of typesCountSorted){
        console.log(`${i} = ${typesCount[i]}`);
    }
}


solve('cat', 42, function () { console.log('Hello world!'); });
