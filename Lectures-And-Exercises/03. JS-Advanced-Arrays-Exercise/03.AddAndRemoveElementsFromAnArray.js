function main(input){
    function solve(input){

        let result = []
    
        for(let i = 1; i <= input.length; i++){
            input[i-1] === "add" ? result.push(i) : result.pop();
        }

        return result;
    }

    console.log(solve(input).length === 0 ? 'Empty' : solve(input).map(Number).join('\n'));
}

main(['add', 
'add', 
'add', 
'add']
);
main(['add', 
'add', 
'remove', 
'add', 
'add']
);
main(['remove', 
'remove', 
'remove']
);