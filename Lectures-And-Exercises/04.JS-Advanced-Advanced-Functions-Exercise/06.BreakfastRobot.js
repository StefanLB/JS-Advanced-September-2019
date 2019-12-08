function result(){
    let ingredsMap = {
        protein : 0,
        carbohydrate : 0,
        fat : 0,
        flavour : 0
    };

    return function(input){

        let cookBook = {
            apple : {carbohydrate : 1, flavour : 2},
            lemonade : {carbohydrate : 10, flavour : 20},
            burger : {carbohydrate : 5, fat : 7, flavour : 3},
            eggs : {protein : 5, fat : 1, flavour : 1},
            turkey : {protein : 10, carbohydrate : 10, fat : 10, flavour : 10}
        };

        let commandsMap = {
            restock: function(microEl, qty){
                ingredsMap[microEl] += Number(qty);
                return 'Success';
            },
            prepare : function(recipe, qty){
                for(let i in cookBook[recipe]){
                    if(ingredsMap[i] < cookBook[recipe][i]*qty){
                        return `Error: not enough ${i} in stock`;
                    }
                }
                for(let i in cookBook[recipe]){
                    ingredsMap[i] -= cookBook[recipe][i]*qty;
                }
                return 'Success';
            },
            report : function () {
                return `protein=${ingredsMap.protein} carbohydrate=${ingredsMap.carbohydrate} fat=${ingredsMap.fat} flavour=${ingredsMap.flavour}`
            }
        };

        let commands = input.split(' ');

        return commandsMap[commands.shift()](...commands);
    };
}

let manager = result();
// manager("restock flavour 50");  // Success
// manager("prepare lemonade 4");  // Error: not enough carbohydrate in stock
// manager("restock carbohydrate 10");
// manager("restock flavour 10");
// manager("prepare apple 1");
// manager("restock fat 10");
// manager("prepare burger 1");
// manager("report");
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

