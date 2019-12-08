function solve(input){
    const alphaSort = (a, b) => a.localeCompare(b);
    let glads = {};

    for (let line of input){
        if (line.split(" -> ").length > 1){
            let [glad, technique, skill] = line.split(" -> ");
            skill = Number(skill);

            if (!glads.hasOwnProperty(glad)){
                glads[glad] = {};
            }

            let techniques = glads[glad];

            if (!techniques.hasOwnProperty(technique)){
                techniques[technique] = skill;
            } else {
                if(techniques[technique] < skill){
                    techniques[technique] = skill;
                }
            }
        } else if (line.split(" vs ").length > 1){
            let [glad1, glad2] = line.split(" vs ");

            if(glads.hasOwnProperty(glad1) &&
                glads.hasOwnProperty(glad2) &&
                Object.keys(glads[glad1]).filter(x => Object.keys(glads[glad2]).includes(x)).length > 0){

                let glad1pts = Object.keys(glads[glad1]).reduce((sum,key)=>sum + glads[glad1][key],0);
                let glad2pts = Object.keys(glads[glad2]).reduce((sum,key)=>sum + glads[glad2][key],0);

                glad1pts > glad2pts ? delete glads[glad2] : delete glads[glad1];
            }
        }
    }

    let sortedGlads = Object.keys(glads)
        .sort(alphaSort)
        .sort((a,b) => Object.keys(glads[b]).reduce((sum,key)=>sum + glads[b][key],0) - Object.keys(glads[a]).reduce((sum,key)=>sum + glads[a][key],0));
    for (let glad of sortedGlads){
        console.log(`${glad}: ${Object.keys(glads[glad]).reduce((sum,key)=>sum + glads[glad][key],0)} skill`);

        let techniques = glads[glad];
        let sortedTechniques = Object.keys(techniques)
            .sort((a,b) => a.localeCompare(b))
            .sort((a,b) => techniques[b] - techniques[a]);

        for(let technique of sortedTechniques){
            console.log(`- ${technique} <!> ${glads[glad][technique]}`);
        }
    }
}

solve(["Pesho -> BattleCry -> 400",
        "Gosho -> PowerPunch -> 300",
        "Stamat -> Duck -> 200",
        "Stamat -> Tiger -> 250",
        "Ave Cesar"]
);
solve(["Pesho -> Duck -> 400",
        "Julius -> Shield -> 150",
        "Gladius -> Heal -> 200",
        "Gladius -> Support -> 250",
        "Gladius -> Shield -> 250",
        "Pesho vs Gladius",
        "Gladius vs Julius",
        "Gladius vs Gosho",
        "Ave Cesar"]
);