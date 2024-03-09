'use client';

import React, { useEffect, useState } from 'react';
import Pagination from './_components/Pagination';
import ProductsList from './_components/ProductsList';
import { Product } from '@/types/product';
import SortProducts from './_components/SortProducts';
// import SearchProducts from './_components/SearchProducts';
import FilterByCategories from './_components/filter-products/FilterByCategories';
import { Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchProducts, setFilteredProducts } from '@/store/slices/products';

const ItemsPerPage = 10;

const ProductsPage = () => {
	const dispatch = useAppDispatch();
	const { products, filteredProducts } = useAppSelector((state) => state.products);

	// States
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		// dispatch(fetchProducts());
	}, [dispatch]);

	const handleSetFilteredProducts = (data: Product[]) => {
		dispatch(setFilteredProducts(data));
	};

	if (products.error) {
		return (
			<p className="text-red-600">
				Something went wrong from server side
				<br />
				Error: {products.error.message}
			</p>
		);
	}

	if (products.isLoading || !products.data || !filteredProducts) {
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
					<p className="text-gray-800">{filteredProducts.length} items</p>
				</div>
			</section>

			<section className="flex-1 flex py-10">
				<div className="container flex gap-16">
					<div className="basis-[220px] flex flex-col gap-6">
						<SortProducts products={filteredProducts} setProducts={handleSetFilteredProducts} />
						{/* <SearchProducts
							products={productsData}
							setProducts={setProductsData}
							onSearch={() => setCurrentPage(1)}
						/> */}

						<FilterByCategories
							setProducts={handleSetFilteredProducts}
							onFilterChange={() => setCurrentPage(1)}
						/>
					</div>

					<div className="products-container flex-1 mb-8">
						<ProductsList currentPage={currentPage} itemsPerPage={ItemsPerPage} />

						{filteredProducts.length > ItemsPerPage && (
							<Pagination
								products={filteredProducts}
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

export default ProductsPage;
