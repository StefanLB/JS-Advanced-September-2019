function solve() {
    let sectionsList = Array.from(document.getElementsByTagName('section'));

    Array.from(document.querySelectorAll('p.answer-text'))
        .forEach((p) => {p.addEventListener('click', showNext);
         });

    let counter = 0;
    const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    function showNext() {
        let currentSelection = this.parentNode.parentNode.parentNode.parentNode;

        if(rightAnswers.includes(this.textContent)) {
            counter ++;
        }

        if(currentSelection === sectionsList[0]) {
            currentSelection.style.display = 'none';
            sectionsList[1].style.display = 'block';
        } else if (currentSelection === sectionsList[1]) {
            currentSelection.style.display = 'none';
            sectionsList[2].style.display = 'block';
        } else if (currentSelection === sectionsList[2]) {
            currentSelection.style.display = 'none';
            document.querySelector('#results').style.display = 'block';
        }

        let h1Result = document.getElementsByTagName('h1')[1];

        if (counter === 3) {
            h1Result.innerHTML = 'You are recognized as top JavaScript fan!';
        } else if (counter < 3) {
            h1Result.innerHTML = `You have ${counter} right answers`;
        }
    }
}
