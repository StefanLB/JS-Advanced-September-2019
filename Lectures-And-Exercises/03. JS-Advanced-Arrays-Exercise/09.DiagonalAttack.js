function main(input){
    function solve(input){
        let matrix = input
        .reduce((prev,curr) => {
            prev.push(curr.split(" ").map(Number));
            return prev;
        },[]);

        let [diag1, diag2] = matrix
            .reduce((prev,curr,ind,matrix) => {
                prev[0] += matrix[ind][ind];
                prev[1] += matrix[ind][matrix.length - 1 - ind];
                return prev;
            },[0,0]);


        if(diag1 === diag2){
            return matrix
            .slice(0,matrix.length)
            .reduce((prev,curr,ind,mat) => {
                curr = curr.map(x => x = diag1);
                curr[ind] = mat[ind][ind];
                curr[mat.length-1-ind] = mat[ind][mat.length-1-ind];
                prev.push(curr);

                return prev;
            },[]);
        }

        return matrix;
        
    }

    console.log(solve(input).map(x=>x.join(" ")).join("\n"));
}

main(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);
main(['1 1 1',
'1 1 1',
'1 1 0']
);