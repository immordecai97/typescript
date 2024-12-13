(() => {
	// Forma inferida (ya deduce que devuelves un number)
	const calcTotal = (prices: number[]) => {
		let total = 0;
		prices.forEach((price) => {
			total += price;
		});
		return total;
	}

	// Forma explícita, agregas el tipo de retorno ():number
	const calcTotalV2 = (prices: number[]): number => {
		let total = 0;
		prices.forEach((price) => {
			total += price;
		});
		return total;
	}

	const rta = calcTotal([1, 2, 3, 4, 5]); // 15
	console.log('rta', rta);
	const rta2 = calcTotalV2([1, 2, 3, 4, 8]); // 18



	// Funciones sin retorno (void)
	// Forma inferida (deduce que no devuelves nada (void))
	const printTotal = (prices: number[]) => {
		const rta = calcTotal(prices);
		console.log('El total es: ', rta);
	}

	// Forma explícita, agregas el tipo de retorno ():void
	const printTotalV2 = (prices: number[]): void => {
		const rta = calcTotal(prices);
		console.log('El total es: ', rta);
	}

	const rta3 = printTotal([1, 2, 3, 4, 5]); // 15
	console.log('rta3', rta3);
	const rta4 = printTotalV2([1, 2, 3, 4, 8]); // 18
	console.log('rta4', rta4);
})()