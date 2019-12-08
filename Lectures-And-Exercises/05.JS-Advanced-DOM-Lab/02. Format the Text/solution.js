function solve() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    let splitInput = input.innerHTML.split('.').filter(x => x !== '');

    for (let i = 0; i < splitInput.length; i+=3){
        let p = document.createElement("p");

        p.innerHTML += splitInput[i] + ".";

        if(splitInput[i+1]){
            p.innerHTML += splitInput[i+1] + ".";
        }

        if(splitInput[i+2]){
            p.innerHTML += splitInput[i+2] + ".";
        }

        output.appendChild(p);
    }
}