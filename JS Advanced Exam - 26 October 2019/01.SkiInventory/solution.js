function solve() {
    let productsList = document.querySelector('#products > ul');
    let myList = document.querySelector('#myProducts > ul');
    let totalPrice = document.querySelector('body > h1:nth-child(4)');
    let totalPriceNumber = 0;

    let prodName = document.querySelector('#add-new > input[type=text]:nth-child(2)');
    let prodQty = document.querySelector('#add-new > input[type=text]:nth-child(3)');
    let prodPrice = document.querySelector('#add-new > input[type=text]:nth-child(4)');
    let addBtn = document.querySelector('#add-new > button');
    let buyBtn = document.querySelector('#myProducts > button');

    let filterCrit = document.querySelector('#filter');
    let filterBtn = document.querySelector('#products > div > button');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if(Number(prodQty.value) && Number(prodPrice.value) && prodName.value !== '' && Number(prodQty.value) > 0 && Number(prodPrice.value) > 0){


           let currRecord = document.createElement('li');
           let currProdName = document.createElement('span');
           let currProdQty = document.createElement('strong');
           let priceAndAddList = document.createElement('div');
           let currPrice = document.createElement('strong');
           let addToListBtn = document.createElement('button');

           let prodQtyNumber = Number(prodQty.value);
           let prodPriceNumber = Number(prodPrice.value);

            currProdName.textContent = prodName.value;
            currProdQty.textContent = `Available: ${prodQtyNumber}`;
            currPrice.textContent = prodPriceNumber.toFixed(2);
            addToListBtn.textContent = "Add to Client's List";

            priceAndAddList.appendChild(currPrice);
            priceAndAddList.appendChild(addToListBtn);

            currRecord.appendChild(currProdName);
            currRecord.appendChild(currProdQty);
            currRecord.appendChild(priceAndAddList);

            productsList.appendChild(currRecord);

            addToListBtn.addEventListener('click', () => {
                prodQtyNumber -= 1;
                currProdQty.textContent = `Available: ${prodQtyNumber}`;

                totalPriceNumber+=prodPriceNumber;
                totalPrice.textContent = `Total Price: ${totalPriceNumber.toFixed(2)}`;

                let myProd = document.createElement('li');
                myProd.textContent = currProdName.textContent;
                let myProdPrice = document.createElement('strong');
                myProdPrice.textContent = prodPriceNumber.toFixed(2);

                myProd.appendChild(myProdPrice);
                myList.appendChild(myProd);

                if(prodQtyNumber === 0){
                    currProdQty.parentNode.parentNode.removeChild(currRecord);
                }
            });
        }
    });

    buyBtn.addEventListener('click', () => {
        totalPrice.textContent = 'Total Price: 0.00';
        myList.innerHTML = '';
    });

    filterBtn.addEventListener('click', () => {
        let filterWord = filterCrit.value.toLowerCase();

        let allProds = Array.from(document.querySelectorAll('#products ul li'));

        allProds.forEach(x => {
            if (x.childNodes[0].textContent.toLowerCase().indexOf(filterWord) === -1){
                x.style.display = 'none';
            } else {
                x.removeAttribute('style');
            }

        })
    })
}