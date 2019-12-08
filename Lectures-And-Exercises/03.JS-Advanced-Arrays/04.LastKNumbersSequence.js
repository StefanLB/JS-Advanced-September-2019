function main(n, k){
    function solve(n, k){
        let result = new Array(n);

        for(let i = 0; i < n; i++){
            result[i] = i === 0 ? 1 : 0;

            for( let j = 1; j <= k; j++){
                result[i] += result[i-j] ? result[i-j] : 0;
            }
        }

        return result;
    }

    console.log(solve(Number(n), Number(k)));
}

main(6, 3);
main(8, 2);