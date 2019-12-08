function main(input){
    function solve(input){
        return input
        .slice(0,input.length)
        .sort((a, b) => a.length - b.length  || a.toLowerCase().localeCompare(b.toLowerCase()));
    }

    console.log(solve(input).join("\n").replace("'",""));
}

main(['alpha', 
'beta', 
'gamma']
);
main(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
main(['test', 
'Deny', 
'omen', 
'Default']
);