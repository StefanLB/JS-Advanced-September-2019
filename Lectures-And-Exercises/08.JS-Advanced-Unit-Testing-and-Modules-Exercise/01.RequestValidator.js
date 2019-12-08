function solve(input){
    const methodsMap = {
        method: /^(GET|POST|DELETE|CONNECT)$/gm,
        uri: /^(\*|[A-Za-z0-9.]+)$/gm,
        version: /^HTTP\/(0\.9|1\.0|1\.1|2\.0)$/gm,
        message: /^[^<>\\&'"]*$/gm
    };

    for(const property in methodsMap){
        if(!input.hasOwnProperty(property) || !input[property].match(methodsMap[property])){
            throw new Error(`Invalid request header: Invalid ${property == 'uri' ? 'URI' : property.charAt(0).toUpperCase() + property.slice(1)}`);
        }
    }
    return input;
}



// console.log(solve({
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: ''
//     }
// ));
// console.log(solve({
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive'
//     }
// ));
// console.log(solve({
//         method: 'POST',
//         uri: 'home.bash',
//         message: 'rm -rf /*'
//     }
// ));
console.log(solve({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}));