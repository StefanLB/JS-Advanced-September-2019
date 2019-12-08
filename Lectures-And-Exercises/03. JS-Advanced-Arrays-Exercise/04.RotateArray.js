function main(input){
    function solve(input){
        let data = input.slice(0,input.length);
        let shifts = Number(data.pop())%data.length;

        data.unshift(...data.splice(-shifts));

        return data;
    }

    console.log(solve(input).join(" ").replace("'",""));
}

main(['1', 
'2', 
'3', 
'4', 
'2']
);
main(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);