// Type Checking (@ts-check): Es para que TypeScript verifique que el código sea correcto, pero no se compila a JS, solo se usa para verificar errores
//@ts-check

(async () => {
	const myCart = [];
	const products = [];
	const limit = 2;

	async function getProducts() {
		const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
			method: 'GET'
		});
		const data = await rta.json();
		products.concat(data);
	}
	function getTotal() {
		let total = 0;
		for (let i = 0; i < products.length; i++) {
			total += products[i].prize;
		}
		return total;
	}
	function addProduct(index) {
		if (getTotal() <= limit) {
			myCart.push(products[index]);
		}
	}

	await getProducts();
	addProduct(1);
	addProduct(2);
	const total = getTotal();
	console.log(total);
	const person = {
		name: 'Nicolas',
		lastName: 'Molina'
	}
	// const rta = person + limit
	// console.log(rta);
});