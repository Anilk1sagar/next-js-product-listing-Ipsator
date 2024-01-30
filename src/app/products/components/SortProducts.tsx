import { Product } from '@/types/product';
import React from 'react';

type Props = {
	setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

const SortProducts = (props: Props) => {
	const { setProducts } = props;

	const sortWithPrice = (products: Product[], sortBy: string) => {
		const updatedProducts = [...products];

		if (sortBy === 'price_desc') {
			updatedProducts.sort((a, b) => b.price - a.price);
		} else if (sortBy === 'price_aesc') {
			updatedProducts.sort((a, b) => a.price - b.price);
		}
		return updatedProducts;
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;

		setProducts((prevState) => {
			return !prevState ? prevState : sortWithPrice(prevState, value);
		});
	};

	return (
		<div className="flex items-center">
			<label htmlFor="products" className="block text-sm font-medium text-gray-900 w-[90px]">
				Sort by:
			</label>
			<select
				id="products"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				onChange={handleSelectChange}
			>
				<option selected value={undefined} disabled>
					Choose a option
				</option>
				<option value="price_desc">Price: High to Low</option>
				<option value="price_aesc">Price: Low to High</option>
			</select>
		</div>
	);
};

export default SortProducts;
