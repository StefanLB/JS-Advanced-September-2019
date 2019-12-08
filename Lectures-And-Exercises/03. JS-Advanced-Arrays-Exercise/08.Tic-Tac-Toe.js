function solve(input){
    let arr = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    
    let playerXturn = true;
    
    for(let i = 0; i < input.length; i++){
        let r = input[i].split(" ")[0];
        let c = input[i].split(" ")[1];
        
        if(arr[r][c] !== false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        arr[r][c] = playerXturn ? 'X' : 'O';

        if(isThereAWinner(arr) === true){
            console.log(`Player ${playerXturn ? 'X' : 'O'} wins!`)
            arr.forEach(x => console.log(x.join("\t")));
            return;
        }

        playerXturn = !playerXturn;

        if((arr.flat(1).includes(false)) !== true){
            break;
        }

        function isThereAWinner(arr){
            if((arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] !== false) ||
                   (arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && arr[1][0] !== false) ||
                   (arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && arr[2][0] !== false) ||
                   (arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0] && arr[0][0] !== false) ||
                   (arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1] && arr[0][1] !== false) ||
                   (arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2] && arr[0][2] !== false) ||
                   (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== false) ||
                   (arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2] && arr[2][0] !== false)){
                       return true;
                   }

            return false;
        }
    }

    console.log('The game ended! Nobody wins :(');
    arr.forEach(x => console.log(x.join("\t")));
}


solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);
solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);
solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);