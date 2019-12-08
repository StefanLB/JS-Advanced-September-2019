function solve(...input) {
        let armiesInput = Array.from(input)[0];
        let battlesInput = Array.from(input)[1];

        let armies = {};

        for (let armyInfo of armiesInput){
                if (!armies.hasOwnProperty(armyInfo.kingdom)){
                        armies[armyInfo.kingdom] = {};
                }

                let generals = armies[armyInfo.kingdom];

                if (!generals.hasOwnProperty(armyInfo.general)){
                        generals[armyInfo.general] = {};
                        generals[armyInfo.general].army = 0;
                        generals[armyInfo.general].wins = 0;
                        generals[armyInfo.general].losses = 0;
                }

                generals[armyInfo.general].army += Number(armyInfo.army);
        }

        for( let battle of battlesInput){

                if (battle[0] === battle[2]){
                        continue;
                }

                let general1 = armies[battle[0]][battle[1]];
                let general2 = armies[battle[2]][battle[3]];

                if (general1.army > general2.army){
                        general1.army = Math.floor(1.1*general1.army);
                        general2.army = Math.floor(0.9*general2.army);
                        general1.wins +=1;
                        general2.losses +=1;
                } else if (general1.army < general2.army){
                        general2.army = Math.floor(1.1*general2.army);
                        general1.army = Math.floor(0.9*general1.army);
                        general2.wins +=1;
                        general1.losses +=1;
                }
        }

        let winner = Array.from(Object.entries(armies)).sort((a,b) => {
                let sort = totWins(b[1]) - totWins(a[1]);
                if(sort == 0){
                        sort = totLosses(a[1]) - totLosses(b[1]);
                        if(sort == 0){
                                sort = a[0].localeCompare(b[0]);
                        }
                }
                return sort;
        })[0];

        console.log(`Winner: ${winner[0]}`);
        Array.from(Object.entries(winner[1])).sort((a,b) => {

                return  b[1]['army'] - a[1]['army'];

        }).forEach(g => {
                console.log(`/\\general: ${g[0]}`);
                console.log(`---army: ${g[1]['army']}`);
                console.log(`---wins: ${g[1]['wins']}`);
                console.log(`---losses: ${g[1]['losses']}`);
        });


        function totWins(kingdom){
                let tot = 0;
                Object.values(kingdom).forEach(x => tot+=x['wins']);
                return tot;
        }
        function totLosses(kingdom){
                let tot = 0;
                Object.values(kingdom).forEach(x => tot+=x['losses']);
                return tot;
        }
}


solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);
// solve([[ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]]
// );
// solve([[ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//         { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//         { kingdom: "Stonegate", general: "Doran", army: 70000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]]
// );