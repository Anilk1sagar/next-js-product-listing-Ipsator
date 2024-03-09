'use client';

import React, { useEffect, useState } from 'react';
import Pagination from './_components/Pagination';
import { fetchProductsAPI } from '@/services/product.service';
import ProductsList from './_components/ProductsList';
import { Product } from '@/types/product';
import SortProducts from './_components/SortProducts';
import SearchProducts from './_components/SearchProducts';
import FilterByCategories from './_components/filter-products/FilterByCategories';
import { Loader2 } from 'lucide-react';

const ItemsPerPage = 10;

const ProductsPage = () => {
	// States
	const [products, setProducts] = useState<{ data: Product[] | null; loading: boolean; error: any }>({
		data: null,
		loading: true,
		error: null,
	});
	const [productsData, setProductsData] = useState<Product[] | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		fetchProductsAPI()
			.then((resp) => {
				setProducts({ data: resp, loading: false, error: null });
			})
			.catch((err: any) => {
				console.error('error: ', err);
				setProducts({ data: null, loading: false, error: err });
			});
	}, []);

	useEffect(() => {
		setProductsData(products.data ? [...products.data] : null);
	}, [products.data]);

	if (products.error) {
		return (
			<p className="text-red-600">
				Something went wrong from server side
				<br />
				Error: {products.error.message}
			</p>
		);
	}

	if (products.loading || !products.data || !productsData) {
		return (
			<div className="flex-1 container flex flex-col items-center justify-center gap-3">
				<Loader2 size={50} className="animate-spin text-primary" />
				<span>Loading products, please wait...</span>
			</div>
		);
	}

	return (
		<div className="flex-1 pb-5">
			<section className="bg-[#F9EBE7] py-10">
				<div className="container text-center">
					<h1 className="text-4xl font-semibold">Products</h1>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="flex flex-col md:flex-row md:items-center gap-4 border-b-[1px] border-gray-200 pb-1">
						<div className="md:basis-[200px]">
							<strong>Total Products</strong> - <span className="text-gray-500">{productsData.length}</span>
						</div>

						<div className="flex-1 flex sm:flex-row flex-col justify-between gap-4 md:pl-5">
							<SearchProducts
								products={productsData}
								setProducts={setProductsData}
								onSearch={() => setCurrentPage(1)}
							/>
							<SortProducts setProducts={setProductsData} />
						</div>
					</div>

					<div className="mt-8 flex md:flex-row flex-col gap-10">
						<div className="filters-container flex flex-col gap-4 md:basis-[200px]">
							<div className="mb-2 border-b-[1px] border-gray-300">
								<span className="font-semibold">FILTERS</span>
							</div>

							<FilterByCategories
								allProducts={products.data}
								setProducts={setProductsData}
								onFilterChange={() => setCurrentPage(1)}
							/>
						</div>

						<div className="products-container flex-1 mb-8">
							<ProductsList products={productsData} currentPage={currentPage} itemsPerPage={ItemsPerPage} />
							<Pagination
								products={productsData}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
								itemsPerPage={ItemsPerPage}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductsPage;
