function main(input){
    function solve(input){
        return +input[0] + +input[input.length-1];
    }

    console.log(solve(input));
}

main(['20', '30', '40']);
main(['5', '10']);