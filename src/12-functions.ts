(() => {
	type Sizes = 'S' | 'M' | 'L' | 'XL';

	function createProductToJSON(
		title: string,
		createdAt: Date, // -> Es la unica excepción que se puede usar el tipo Date como objeto (por eso está en mayusculas)
		stock: number,
		size: Sizes
	) {
		return {
			title,
			createdAt,
			stock,
			size
		}
	}

	/**
	 * En esta versión haremos que el parametro size sea opcional
	 * utilizando el optional chaining de TypeScript (?:) -> size?: Sizes
	 * @param title 
	 * @param createdAt 
	 * @param stock 
	 * @param size 
	 * @returns 
	 */
	const createProductToJSONV2 = (title: string, createdAt: Date, stock: number, size?: Sizes) => {
		return {
			title,
			createdAt,
			stock,
			size
		}
	}

	const product1 = createProductToJSON('Camisa', new Date(), 100, 'M');
	console.log(product1);
	console.log(product1.createdAt);

	const product2 = createProductToJSONV2('Camisa', new Date(), 100); // sin talla o size porque es opcional
	console.log(product2);
	console.log(product2.size); // --> undefined
})()