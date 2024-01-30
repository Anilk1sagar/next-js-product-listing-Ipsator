import { Product } from '@/types/product';
import { debounce } from '@/utils/helpers';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
	allProducts: Product[];
	setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

const SearchProducts = (props: Props) => {
	const { allProducts, setProducts } = props;
	// const [searchTerm, setSearchTerm] = useState<string | null>('');

	const handleInputChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// setSearchTerm(value);

		if (!value) {
			setProducts([...allProducts]);
		} else {
			const updatedProducts = allProducts.filter((product) =>
				product.title.toLowerCase().includes(value.toLowerCase())
			);
			setProducts(updatedProducts);
		}
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
		<div className="flex items-center lg:w-full  lg:max-w-[500px]">
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
			{/* <button
				type="button"
				onClick={handleSearch}
				disabled={!searchTerm}
				className="text-white bg-gray-500 disabled:bg-gray-300 focus:outline-none font-medium rounded-sm text-sm px-4 py-[9px]"
			>
				Search
			</button> */}
		</div>
	);
};

export default SearchProducts;
