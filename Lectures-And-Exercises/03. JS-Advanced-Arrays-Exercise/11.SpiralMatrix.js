function main(x, y){
    function solve(x, y){
        // once end of array or num !== 0 is reached, switch direction
        const rowMap = {right : 0, down : 1, left : 0, up : -1};
        const colMap = {right : 1, down : 0, left : -1, up : 0};
        const switchDirection = {right : "down", down : "left", left : "up", up : "right"};
        
        let matrix = new Array(y);
        for(i = 0; i < y; i++){
            matrix[i] = new Array(x).fill(0);
        }

        let currDir = "right";
        let row = 0;
        let col = 0;

        for(let i = 1; i <= x*y; i++){
            matrix[row][col] = i;
            
            if(row + rowMap[currDir] >= x ||
                matrix[row +  rowMap[currDir]][col + colMap[currDir]] !== 0){
                    currDir = switchDirection[currDir];
            }
            row = row + rowMap[currDir];
            col = col + colMap[currDir];
        }

        return matrix;
    }

    console.log(solve(x, y).map(elem => elem.join(" ")).join("\n"));
}

main(5, 5);
main(3, 3);