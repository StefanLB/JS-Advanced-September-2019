function main(input){
    function solve(input){
        let tokens = input.slice(0,input.length);
        let delimiter = tokens.pop();

        return tokens.join(`${delimiter}`);
    }

    console.log(solve(input));
}

main(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);
main(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);