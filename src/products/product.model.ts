// Documento que tiene todo lo que tenga que ver con modelado de datos

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
	title: string,
	createdAt: Date,
	stock: number,
	size?: Sizes
}