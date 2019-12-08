function acceptance() {
	let company = document.querySelector('#fields > td:nth-child(1) > input[type=text]');
	let product = document.querySelector('#fields > td:nth-child(2) > input[type=text]');
	let quantity = document.querySelector('#fields > td:nth-child(3) > input[type=text]');
	let scrape = document.querySelector('#fields > td:nth-child(4) > input[type=text]');
	let addItBtn = document.querySelector('#acceptance');
	let stock = document.getElementById('warehouse');

	addItBtn.addEventListener('click', () => {
		if(company.value !== '' && product.value !=='' && Number(quantity.value) && Number(scrape.value) && Number(quantity.value) > Number(scrape.value) && Number(quantity.value) > 0 && Number(scrape.value > 0)){
			let div = document.createElement('div');
			let p = document.createElement('p');
			let outOfStockButton = document.createElement('button');
			outOfStockButton.textContent = 'Out of stock';

			p.textContent = `[${company.value}] ${product.value} - ${Number(quantity.value) - Number(scrape.value)} pieces`;

			div.appendChild(p);
			div.appendChild(outOfStockButton);

			stock.appendChild(div);

			outOfStockButton.addEventListener('click', function() {
				this.parentNode.parentNode.removeChild(this.parentNode);
			});
		}

		company.value = '';
		product.value = '';
		quantity.value = '';
		scrape.value = '';
	});
}