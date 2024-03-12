import React, { memo } from 'react';
import ProductCard from './ProductCard';
import { useAppSelector } from '@/store/hooks';
import Product404 from '@/components/Product404';

type Props = {
	currentPage: number;
	itemsPerPage: number;
};

const ProductsList = (props: Props) => {
	const { currentPage, itemsPerPage } = props;

	const products = useAppSelector((state) => state.products.products);

	if (products.isLoading || !products.data) {
		return <div>Loading...</div>;
	}

	if (products.data.length === 0) {
		return <Product404 />;
	}

	return (
		<div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
			{products.data
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
