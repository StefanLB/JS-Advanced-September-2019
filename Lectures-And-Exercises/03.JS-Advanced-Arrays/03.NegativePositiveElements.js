function main(input){
    function solve(input){
        return Array.from(input)
            .reduce((prev, curr) => {
                if(curr >= 0){
                    prev.push(curr);
                } else {
                    prev.unshift(curr);
                }
                return prev;
            },[])
    }

    console.log(solve(input).join(" "));
}

main([7, -2, 8, 9]);
main([3, -2, 0, -1]);