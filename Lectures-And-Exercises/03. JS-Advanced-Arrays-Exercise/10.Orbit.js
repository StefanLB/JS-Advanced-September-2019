function main(input){
    function solve(input){
        let width = input[0];
        let height = input[1];
        let x = input[2];
        let y = input[3];
        let matrix = new Array(height).fill(new Array(width).fill(0));

        let result = matrix
            .reduce((prev, curr, ind) => {
                curr = curr.reduce((prevR, currR, indR) => {
                    currR = Math.max(Math.abs(ind - x), Math.abs(indR - y)) + 1;
                    prevR.push(currR);
                    return prevR;
                },[]);
                prev.push(curr);
                return prev;
            },[]
        );

        return result;
    }

    console.log(solve(input).map(x => x.join(" ")).join("\n"));
}

main([4, 4, 0, 0]);
main([5, 5, 2, 2]);
main([3, 3, 2, 2]);