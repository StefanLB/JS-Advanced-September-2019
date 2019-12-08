function solve(score){
    let data = JSON.parse(score);

    console.log("<table>");
    console.log(`  <tr><th>name</th><th>score</th></tr>`);
    for (let row of data){
        console.log(`  <tr><td>${escapeChars(row.name)}</td><td>${escapeChars(row.score)}</td></tr>`);
    }
    console.log("</table>");

    function escapeChars(info){
        return (info+'').replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

// function solve2(score){
//     let data = JSON.parse(score);
//     console.log("<table>");
//     console.log(`  <tr><th>name<\/th><th>score<\/th><\/tr>`);
//     for(const info of data){
//
//         console.log(` <tr><td>${escapeHtml(info.name)}<\/td><td>${escapeHtml(info.score)}<\/td><\/tr>`);
//     }
//     console.log("</table>");
//
//     function escapeHtml(text) {
//         return (text+"").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
//     }
// }

solve(['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]']);
solve(['[{"name":"Pesho & Kiro", "score":479}, {"name":"Gosho, Maria & Viki", "score":205}]']);

// solve2(['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]']);
// solve2(['[{"name":"Pesho & Kiro", "score":479}, {"name":"Gosho, Maria & Viki", "score":205}]']);