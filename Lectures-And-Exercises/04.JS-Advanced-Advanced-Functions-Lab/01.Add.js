function solution(num){
    return function(addend){
        return num + addend;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

function solution2(num){
    return function(addend){
        return num + addend;
    }
}

let add10 = solution(10);
console.log(add10(10));
console.log(add10(15));