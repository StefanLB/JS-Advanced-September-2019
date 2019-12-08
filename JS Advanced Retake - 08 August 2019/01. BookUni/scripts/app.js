function solve() {
    let bookName = Array.from(document.getElementsByTagName('input'))[0];
    let bookYear = Array.from(document.getElementsByTagName('input'))[1];
    let bookPrice = Array.from(document.getElementsByTagName('input'))[2];
    let createBtn = Array.from(document.getElementsByTagName('button'))[0];
    let oldBookshelf = Array.from(document.getElementsByClassName('bookShelf'))[0];
    let newBookshelf = Array.from(document.getElementsByClassName('bookShelf'))[1];

    let totalProfit = 0;

    createBtn.addEventListener('click', function(e){
        e.preventDefault();

        if(bookName.value !== '' && bookYear.value > 0 && bookPrice.value > 0){
            let div = document.createElement('div');
            div.classList.add('book');

            let p = document.createElement('p');
            p.textContent = `${bookName.value} [${bookYear.value}]`;
            let buyBtn = document.createElement('button');

            if(Number(bookYear.value)>=2000){
                let price = Number(bookPrice.value);
                buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
                div.appendChild(p);
                div.appendChild(buyBtn);

                let moveBtn = document.createElement('button');
                moveBtn.textContent = 'Move to old section';
                moveBtn.addEventListener('click', function() {
                    price *= 0.85;
                    buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
                    this.parentNode.parentNode.removeChild(this.parentNode);
                    div.removeChild(moveBtn);
                    oldBookshelf.appendChild(div)
                });

                buyBtn.addEventListener('click', function() {
                    totalProfit+= price;
                    this.parentNode.parentNode.removeChild(this.parentNode);
                    Array.from(document.getElementsByTagName('h1'))[1]
                        .textContent = `Total Store Profit: ${totalProfit.toFixed(2)} BGN`;
                });
                div.appendChild(moveBtn);
                newBookshelf.appendChild(div);
            } else {
                let price = Number(bookPrice.value)*0.85;
                buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
                div.appendChild(p);
                div.appendChild(buyBtn);
                buyBtn.addEventListener('click', function() {
                    totalProfit+= price;
                    this.parentNode.parentNode.removeChild(this.parentNode);
                    Array.from(document.getElementsByTagName('h1'))[1]
                        .textContent = `Total Store Profit: ${totalProfit.toFixed(2)} BGN`;
                });

                oldBookshelf.appendChild(div)
            }
        }

    }, false);
}