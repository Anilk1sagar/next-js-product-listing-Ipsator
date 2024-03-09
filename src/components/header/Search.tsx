import React, { memo } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { debounce } from '@/utils/helpers';
import { Input } from '../ui/input';

const Search = () => {
	const handleInputChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		console.log('search input: ', value);
		// setSearchTerm(value);

		// if (!value) {
		// 	setProducts([...allProducts]);
		// } else {
		// 	const updatedProducts = products.filter((product) =>
		// 		product.title.toLowerCase().includes(value.toLowerCase())
		// 	);
		// 	setProducts(updatedProducts);
		// }
	});

	return (
		<div className="flex items-center max-w-[400px] w-full">
			<div className="relative w-full">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<SearchIcon className="text-gray-500 w-4" />
				</div>

				<Input
					type="search"
					id="search"
					placeholder="Search for products, brands and more"
					className="block w-full bg-gray-50 text-sm ps-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-white focus-visible:shadow"
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
};

export default memo(Search);
