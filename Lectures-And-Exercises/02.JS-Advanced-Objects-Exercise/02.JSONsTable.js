function solve(input){
    let data = [];

    input.forEach(x => data.push(JSON.parse(x)));

    console.log("<table>");
    for (let row of data){
        console.log(`\t<tr>\n\t\t<td>${escapeChars(row.name)}</td>\n\t\t<td>${escapeChars(row.position)}</td>\n\t\t<td>${escapeChars(row.salary)}</td>\n\t</tr>`);
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

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}', '{"name":"Teo","position":"Lecturer","salary":1000}', '{"name":"Georgi","position":"Lecturer","salary":1000}']
);