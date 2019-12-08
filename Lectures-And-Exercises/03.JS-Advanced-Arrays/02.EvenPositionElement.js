function main(input){
    function solve(input){
        return Array.from(input)
            .reduce((prev, curr, ind, arr) => {
                if(ind%2 === 0){
                    prev.push(curr);
                }
                return prev;
            },[]);
    }

    console.log(solve(input).join(" "));
}

main(['20', '30', '40']);
main(['5', '10']);