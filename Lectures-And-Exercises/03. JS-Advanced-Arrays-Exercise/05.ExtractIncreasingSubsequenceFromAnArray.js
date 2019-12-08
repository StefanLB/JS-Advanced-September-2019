function main(input){
    function solve(input){
        let result = input
        .reduce((prev,curr) => {
            if(prev[prev.length-1] <= curr || prev.length === 0){
                prev.push(curr);
            }

            return prev;
        },[]);

        return result;
    }

    console.log(solve(input).join("\n"));
}

main([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );
main([1, 
    2, 
    3,
    4]
    );
main([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );