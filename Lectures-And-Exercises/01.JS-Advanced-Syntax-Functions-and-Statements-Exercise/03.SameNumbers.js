function solve(x){
    console.log(x.toString() === x.toString().split("").reverse().join(""));
    console.log(x.toString().split("").reduce((a,b) => Number(a) + Number(b),0));
}

solve(2222222);
solve(1234);