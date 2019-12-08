function fromJSONToHTMLTable(input){
    let data = JSON.parse(input);
    let result = '';

    function escapeChars(info){
        return (info+'').replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    result += '<table>\n';

    result += '<tr>';
    Object.getOwnPropertyNames(data[0]).forEach(x => result += `<th>${x}</th>`);
    result += '</tr>\n';

    for (let row of data){
        result += '<tr>';

        Object.values(row).forEach(x => result += `<td>${escapeChars(x)}</td>`);

        result += '</tr>\n';
    }

    result += '</table>';
    return result;
}