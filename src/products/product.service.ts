// Documento que tiene todo lo que tenga que ver con la lógica de negocio o servicios

import { Product } from './product.model';

export const productsList: Product[] = [];

export const addProduct = (data: Product) => {
	productsList.push(data);
}

export const calcStock = (): number => {
	let total = 0;
	productsList.forEach(product => {
		total += product.stock;
	});
	return total;
}