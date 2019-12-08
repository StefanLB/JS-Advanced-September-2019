function main(input){
    function solve(input){
        return Array.from(input)
        .reduce((prev, curr, ind) => {
            if(ind%2 === 1){
                prev.push(curr*2);
            }
            return prev;
        },[])
        .reverse();
        
    }

    console.log(solve(input).join(" "));
}

main([10, 15, 20, 25]);
main([3, 0, 10, 4, 7, 3]);