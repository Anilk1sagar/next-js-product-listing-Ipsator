import React, { memo, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { debounce } from '@/utils/helpers';
import { Input } from '../ui/input';

const Search = () => {
	const searchBoxRef = useRef<HTMLDivElement | null>(null);

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

	const handleSearchIconClick = () => {
		// const elem = searchBoxRef.current;
		// if (!elem) return;
		// if (elem.classList.contains('max-lg:hidden')) {
		// 	elem.classList.remove('max-lg:hidden');
		// } else {
		// 	elem.classList.add('max-lg:hidden');
		// }
	};

	return (
		<div className="flex w-full justify-end relative">
			<div className="flex items-center max-w-[400px] w-full max-lg:hidden max-lg:fixed" ref={searchBoxRef}>
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

			<button className="hidden max-lg:block" onClick={handleSearchIconClick}>
				<SearchIcon className="w-5" />
			</button>
		</div>
	);
};

export default memo(Search);
