import React, { memo, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
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

	const showSearch = (show: boolean) => {
		const elem = searchBoxRef.current;
		if (!elem) return;
		if (show && elem.classList.contains('max-md:hidden')) {
			elem.classList.remove('max-md:hidden');
		} else {
			elem.classList.add('max-md:hidden');
		}
	};

	return (
		<div className="flex w-full items-center justify-end relative">
			<div
				className="flex items-center max-w-[400px] w-full max-md:hidden max-md:fixed max-md:left-8 max-md:-translate-x-8 max-md:px-8 max-md:max-w-full max-md:z-30"
				ref={searchBoxRef}
			>
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

				<button
					className="hidden max-md:block bg-white ml-2 text-gray-500 hover:text-gray-700"
					onClick={() => showSearch(false)}
				>
					<X size={25} />
				</button>
			</div>

			<button className="hidden max-md:block" onClick={() => showSearch(true)}>
				<SearchIcon className="w-5" />
			</button>
		</div>
	);
};

export default memo(Search);
