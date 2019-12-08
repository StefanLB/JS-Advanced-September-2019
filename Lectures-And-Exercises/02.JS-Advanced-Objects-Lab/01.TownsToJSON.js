function solve(data){
    const isNotEmptyString = x => x !== "";
    const trimStrings = x => x.trim();
    const parseIfNumber = x => Number(x) ? (Math.round(Number(x) * 100) / 100).toFixed(2) : (Number(x) == "0" ? 0 :  x);

    function deserializeStringToArrayOfValues(str){
        return str
            .split("|")
            .filter(isNotEmptyString)
            .map(trimStrings)
            .map(parseIfNumber)
    }

    let keys = deserializeStringToArrayOfValues(data[0]);
    console.log(JSON.stringify(data
        .slice(1)
        .map(deserializeStringToArrayOfValues)
        .map(x => x.reduce((res, val, i) => {
            res[keys[i]] = val;
            return res;
        }, {}))
    ).replace(/(\"(?=[\-0-9])|(?<=[\-0-9])\")/gi, ""));
}

function matrixToJSON(input) {
    let output = [];
    let header = [];
    for (let j = 0; j < input.length; j++) {
        if (j == 0) {
            header = input[j].replace(/(^\||\|$)/gi, "").split(/\|/gi).map(h => h.trim());
            continue;
        }

        input[j] = input[j].replace(/(^\||\|$)/gi, "").split(/\|/gi);
        let city = {};
        for (let k = 0; k < input[j].length; k++) {

            if (Number(input[j][k].trim()) || Number(input[j][k].trim()) == 0) {

                let num = Number(input[j][k].trim());

                if (num - Math.floor(num) > 0.00) {
                    city[header[k]] = num.toFixed(2);
                } else {
                    city[header[k]] = num.toFixed(0);
                }

            } else {
                city[header[k]] = input[j][k].trim();
            }

        }


        output.push(city);

    }

    console.log(JSON.stringify(output).replace(/(\"(?=[\-0-9])|(?<=[\-0-9])\")/gi, ""));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);

solve(['| Town | Latitude | Longitude |',
'| Random Town | 0.00 | 0.00 |']);

matrixToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
matrixToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);

matrixToJSON(['| Town | Latitude | Longitude |',
    '| Random Town | 0.00 | 0.00 |']);