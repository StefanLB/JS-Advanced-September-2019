function main(input){
    function solve(input){
        return Array.from(input)
            .slice(0, input.length)
            .sort((a,b) => a - b)
            .slice(0,2);
    }

    console.log(solve(input).join(" "));
}

main([30, 15, 50, 5]);
main([3, 0, 10, 4, 7, 3]);