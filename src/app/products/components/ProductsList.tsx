import { Product } from '@/types/product';
import React from 'react';
import ProductCard from './ProductCard';

type Props = {
	products: Product[];
};

const ProductsList = (props: Props) => {
	const { products } = props;

	if (products.length === 0) {
		return <div>No products found!</div>;
	}

	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
			{products.map((product) => (
				<div className="flex" key={product.id}>
					<ProductCard product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductsList;
