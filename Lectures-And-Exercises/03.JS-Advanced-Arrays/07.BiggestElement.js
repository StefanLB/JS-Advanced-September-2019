function main(input){
    function solve(input){
        return Math.max(...input.flat(1));
    }

    console.log(solve(input));
}

main([[20, 50, 10],
    [8, 33, 145]]
   );
main([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );