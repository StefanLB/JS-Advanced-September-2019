function solve(input){
    let result = {};

    let wordsArray = input.toString().match(/\w+/gim);

    for (let word of wordsArray){
        if (typeof result[word] === "undefined"){
            result[word] = 0;
        }
        result[word]++;
    }

    console.log(JSON.stringify(result));
}

solve(['Far too slow, you\'re far too slow.']);
solve(['JS devs use Node.js for server-side JS.-- JS for devs']);