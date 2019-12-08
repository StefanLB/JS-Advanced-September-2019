function solution() {
    let currentText = '';

    function append(string){
        currentText += string;
    }

    function removeStart(n) {
        currentText = currentText.substring(n);
    }

    function removeEnd(n) {
        currentText = currentText.substring(0, currentText.length - n);
    }

    function print(){
        console.log(currentText);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

function solution2(){
    let currentText = '';

    function append(text){
        return currentText += text;
    }

    function removeStart(n){
        return currentText = currentText.substr(n, currentText.length-1);
    }

    function removeEnd(n){
        return currentText = currentText.substr(0, currentText.length - n);
    }

    function print(){
        return console.log(currentText);
    }

    return{
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = solution2();

secondZeroTest.append('hello');
secondZeroTest.append('again');
secondZeroTest.removeStart(3);
secondZeroTest.removeEnd(4);
secondZeroTest.print();