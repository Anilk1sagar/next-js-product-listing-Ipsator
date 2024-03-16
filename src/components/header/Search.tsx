'use client';

import React, { memo, useRef, useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchBoxRef = useRef<HTMLDivElement | null>(null);

	const [searchTerm, setSearchTerm] = useState(searchParams.get('s') || '');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// console.log('search input: ', value);
		setSearchTerm(value);
		if (!value && pathname.includes('/products')) {
			router.replace('/products');
		}
	};

	const showSearchInput = (show: boolean) => {
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
				className="flex items-center max-w-[400px] bg-white w-full max-md:hidden max-md:translate-y-0 max-md:fixed max-md:left-8 max-md:-translate-x-8 max-md:px-8 max-md:max-w-full max-md:z-30"
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
						className="block w-full bg-gray-50 text-sm ps-10 max-md:pe-16 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-white focus-visible:shadow"
						value={searchTerm}
						onChange={handleInputChange}
					/>

					{searchTerm && (
						<Link
							href={{ pathname: '/products', query: { s: searchTerm } }}
							className="absolute right-2 top-1/2 -translate-y-1/2"
						>
							<Button type="button" variant="secondary" size="xs">
								Search
							</Button>
						</Link>
					)}
				</div>

				<button
					className="hidden max-md:block bg-white ml-2 text-gray-500 hover:text-gray-700"
					onClick={() => showSearchInput(false)}
				>
					<X size={25} />
				</button>
			</div>

			<button className="hidden max-md:block" onClick={() => showSearchInput(true)}>
				<SearchIcon className="w-5" />
			</button>
		</div>
	);
};

export default memo(Search);
