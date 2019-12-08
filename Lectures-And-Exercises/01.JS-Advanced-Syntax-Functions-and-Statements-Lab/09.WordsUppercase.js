function solve(input){
    console.log(input.match(/\w+/gim).map(x=>x.toUpperCase()).join(", "));
}

solve('Hi, how are you?');