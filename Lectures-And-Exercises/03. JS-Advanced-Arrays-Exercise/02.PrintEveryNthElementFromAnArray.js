function main(input){
    function solve(input){
        let arr = input.slice(0,input.length);
        let step = arr.pop();

        const addByStep = {
            true: "push",
            false: ""
        }

        let result = [];
        for(let i = 0; i < arr.length; i++){
            if(i%step === 0){
                result.push(arr[i]);
            }
        }

        return result;

    }

    console.log(solve(input).join("\n").replace("'",""));
}

main(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);
main(['dsa',
'asd', 
'test', 
'tset', 
'2']
);
main(['1', 
'2',
'3', 
'4', 
'5', 
'6']
);