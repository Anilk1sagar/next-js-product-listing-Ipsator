'use client';

import React, { useEffect, useState } from 'react';
import Pagination from './pagination/Pagination';
import ProductsList from './ProductsList';
import { Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchProducts } from '@/store/slices/products';
import FiltersAndSort from './filters-and-sort/FiltersAndSort';
import { useSearchParams } from 'next/navigation';

const ItemsPerPage = 10;

const Products = () => {
	const searchParams = useSearchParams();
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.products.products);

	// States
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		const searchTerm = searchParams.get('s');
		dispatch(fetchProducts({ s: searchTerm }));
	}, [dispatch, searchParams]);

	if (products.error) {
		return (
			<p className="text-red-600">
				Something went wrong from server side
				<br />
				Error: {products.error.message}
			</p>
		);
	}

	if (products.isLoading || !products.data) {
		return (
			<div className="flex-1 container flex flex-col items-center justify-center gap-3">
				<Loader2 size={50} className="animate-spin text-primary" />
				<span>Loading products, please wait...</span>
			</div>
		);
	}

	return (
		<div className="flex-1 flex flex-col pb-5">
			<section className="bg-[#F9EBE7] py-10">
				<div className="container text-center">
					<h1 className="text-4xl font-semibold">Products</h1>
					<p className="text-gray-800">{products.data.length} items</p>
				</div>
			</section>

			<section className="flex-1 flex py-10">
				<div className="container flex gap-12 max-lg:gap-10 max-[900px]:flex-col max-[900px]:gap-8">
					<FiltersAndSort setCurrentPage={setCurrentPage} />

					<div className="products-container flex-1 mb-8">
						<ProductsList currentPage={currentPage} itemsPerPage={ItemsPerPage} />

						{products.data.length > ItemsPerPage && (
							<Pagination
								products={products.data}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
								itemsPerPage={ItemsPerPage}
							/>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Products;
