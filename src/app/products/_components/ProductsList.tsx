import { Product } from '@/types/product';
import React, { memo } from 'react';
import ProductCard from './ProductCard';

type Props = {
	products: Product[];
	currentPage: number;
	itemsPerPage: number;
};

const ProductsList = (props: Props) => {
	const { products, currentPage, itemsPerPage } = props;

	if (products.length === 0) {
		return <div>No products found!</div>;
	}

	return (
		<div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
			{products
				.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage)
				.map((product) => (
					<div className="flex" key={product.id}>
						<ProductCard product={product} />
					</div>
				))}
		</div>
	);
};

export default memo(ProductsList);
