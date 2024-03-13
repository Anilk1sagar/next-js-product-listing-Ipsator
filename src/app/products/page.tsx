import React, { Suspense } from 'react';
import Products from './_components/Products';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shop | Products',
	description: 'Nextjs and Typescript Shopping Project',
};

const ProductsPage = () => {
	return (
		<Suspense fallback={<></>}>
			<Products />
		</Suspense>
	);
};

export default ProductsPage;
