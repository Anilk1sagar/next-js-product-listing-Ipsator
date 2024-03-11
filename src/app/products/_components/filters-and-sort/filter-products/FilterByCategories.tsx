'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useAppSelector } from '@/store/hooks';
import { Product } from '@/types/product';

type Props = {
	setProducts: (products: Product[]) => void;
	onFilterChange?: () => void;
};

const FilterByCategories = (props: Props) => {
	const { setProducts, onFilterChange } = props;
	const { products } = useAppSelector((state) => state.products);

	// States
	const [categories, setCategories] = useState([
		{ label: 'Electronics', value: 'electronics', checked: false },
		{ label: 'Jewelery', value: 'jewelery', checked: false },
		{ label: "Men's clothing", value: "men's clothing", checked: false },
		{ label: "Women's clothing", value: "women's clothing", checked: false },
	]);

	const filterProducts = (updatedCategories = categories) => {
		if (!products.data) return;

		const selectedCategories = updatedCategories.filter((cat) => cat.checked).map((c) => c.value);

		let updatedProducts = [...products.data];
		if (selectedCategories.length > 0) {
			updatedProducts = products.data.filter((p) => selectedCategories.includes(p.category));
		}
		setProducts(updatedProducts);
	};

	const handleCategoryChange = (checked: boolean, categoryIndex: number) => {
		const updatedCategories = [...categories];
		updatedCategories[categoryIndex].checked = checked;
		setCategories(updatedCategories);
		filterProducts(updatedCategories);

		if (typeof onFilterChange === 'function') {
			onFilterChange();
		}
	};

	return (
		<div>
			<h4 className="font-bold text-xl mb-3">Categories</h4>

			<div className="flex flex-col gap-1">
				{categories.map((category, index) => (
					<div className="flex items-center gap-2" key={category.value}>
						<Checkbox
							className=""
							checked={category.checked}
							onCheckedChange={(checked) => {
								handleCategoryChange(checked as boolean, index);
								return checked;
							}}
						/>
						<label htmlFor={category.value} className="text-sm font-medium">
							{category.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterByCategories;
