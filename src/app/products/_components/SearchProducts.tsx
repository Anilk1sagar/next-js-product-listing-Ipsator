'use client';

import { Product } from '@/types/product';
import { debounce } from '@/utils/helpers';
import { Search } from 'lucide-react';
import React, { memo, useState } from 'react';

type Props = {
	products: Product[];
	setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
	onSearch?: () => void;
};

const SearchProducts = (props: Props) => {
	const { products, setProducts, onSearch } = props;

	const [allProducts] = useState(products);

	const handleInputChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// setSearchTerm(value);

		if (!value) {
			setProducts([...allProducts]);
		} else {
			const updatedProducts = products.filter((product) =>
				product.title.toLowerCase().includes(value.toLowerCase())
			);
			setProducts(updatedProducts);
		}

		if (typeof onSearch === 'function') onSearch();
	});

	// const handleSearch = () => {
	// 	if (!searchTerm) {
	// 		setProducts([...allProducts]);
	// 	} else {
	// 		const updatedProducts = allProducts.filter((product) =>
	// 			product.title.toLowerCase().includes(searchTerm.toLowerCase())
	// 		);
	// 		setProducts(updatedProducts);
	// 	}
	// };

	return (
		<div className="flex items-center lg:w-full lg:max-w-[700px]">
			<div className="relative w-full">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<Search className="text-gray-500 w-4" />
				</div>
				<input
					type="search"
					id="search"
					className="block w-full max-w-[500px] p-2 ps-10 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:border-gray-400 focus:bg-white focus-visible:outline-0"
					placeholder="Search for products"
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
};

export default memo(SearchProducts);
