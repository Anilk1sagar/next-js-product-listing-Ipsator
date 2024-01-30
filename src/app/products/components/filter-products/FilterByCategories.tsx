'use client';

import { Product } from '@/types/product';
import React, { useState } from 'react';

type Props = {
	allProducts: Product[];
	setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

const FilterByCategories = (props: Props) => {
	const { allProducts, setProducts } = props;

	// States
	const [categories, setCategories] = useState([
		{ label: 'Electronics', value: 'electronics', checked: false },
		{ label: 'Jewelery', value: 'jewelery', checked: false },
		{ label: "Men's clothing", value: "men's clothing", checked: false },
		{ label: "Women's clothing", value: "women's clothing", checked: false },
	]);

	const filterProducts = (updatedCategories = categories) => {
		const selectedCategories = updatedCategories.filter((cat) => cat.checked).map((c) => c.value);

		let updatedProducts = [...allProducts];
		if (selectedCategories.length > 0) {
			updatedProducts = allProducts.filter((p) => selectedCategories.includes(p.category));
		}
		setProducts(updatedProducts);
	};

	const handleCategoryChange = (checked: boolean, categoryIndex: number) => {
		const updatedCategories = [...categories];
		updatedCategories[categoryIndex].checked = checked;
		setCategories(updatedCategories);
		filterProducts(updatedCategories);
	};

	return (
		<div>
			<div className="font-semibold text-sm text-gray-800">CATEGORIES</div>
			<div className="mt-2 flex flex-col gap-1">
				{categories.map((category, index) => (
					<div className="flex items-center" key={category.value}>
						<input
							checked={category.checked}
							id={category.value}
							type="checkbox"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
							onChange={(e) => handleCategoryChange(e.target.checked, index)}
						/>
						<label
							htmlFor={category.value}
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							{category.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterByCategories;
