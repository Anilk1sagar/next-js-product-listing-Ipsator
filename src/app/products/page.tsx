'use client';

import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import { fetchProducts } from '@/services/product.service';
import ProductsList from './components/ProductsList';
import { Product } from '@/types/product';
import SortProducts from './components/SortProducts';
import SearchProducts from './components/SearchProducts';

const ProductsPage = () => {
	const [products, setProducts] = useState<{ data: Product[] | null; loading: boolean; error: any }>({
		data: null,
		loading: true,
		error: null,
	});

	const [productsData, setProductsData] = useState<Product[] | null>(null);

	useEffect(() => {
		fetchProducts()
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

	if (products.loading || !products.data || !productsData) {
		return <div>Loading products, please wait...</div>;
	}

	if (products.error) {
		return (
			<p className="text-red-600">
				Something went wrong from server side
				<br />
				Error: {products.error}
			</p>
		);
	}

	return (
		<div>
			<div className="mb-4">
				<strong>Total Products</strong> - <span>{1000}</span>
			</div>

			<div className="md:flex gap-10">
				<div className="filters-container basis-[200px]">
					<div className="border-b-[1px] border-gray-300">
						<strong>FILTERS</strong>
					</div>
				</div>

				<div className="products-container flex-1 mb-4">
					<div className="flex sm:flex-row flex-col justify-between gap-4 border-b-[1px] border-gray-300 pb-2">
						<SearchProducts allProducts={products.data} setProducts={setProductsData} />
						<SortProducts setProducts={setProductsData} />
					</div>

					<div className="mt-4">
						<ProductsList products={productsData} />
					</div>

					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
