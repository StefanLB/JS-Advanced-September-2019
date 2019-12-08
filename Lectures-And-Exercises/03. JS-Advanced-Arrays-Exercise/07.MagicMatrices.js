function main(input){
    function solve(input){
        let sum = input[0].reduce((a,b) => a+b);
        let cols = input.reduce((acc,curr,i,matrix) => {
            acc[i] = matrix.map((x) => x[i]);
            return acc;
        },[]);
        let rows = [...input];

        return rows.every(r=>r.reduce((a,b)=> a+b) === sum) && cols.every(c=>c.reduce((a,b) => a+b) === sum);
    }

    console.log(solve(input));
}

main([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
);
main([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
main([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );