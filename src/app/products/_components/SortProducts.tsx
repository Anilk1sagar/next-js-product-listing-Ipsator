import { Product } from '@/types/product';
import React, { memo } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type Props = {
	products: Product[];
	setProducts: (products: Product[]) => void;
};

const SortProducts = (props: Props) => {
	const { products, setProducts } = props;

	const handleSelectChange = (value: string) => {
		const updatedProducts = [...products];

		if (value === 'price_desc') {
			updatedProducts.sort((a, b) => b.price - a.price);
		} else if (value === 'price_aesc') {
			updatedProducts.sort((a, b) => a.price - b.price);
		}

		setProducts(updatedProducts);
	};

	return (
		<>
			<Select onValueChange={handleSelectChange}>
				<SelectTrigger className="w-full font-semibold focus:ring-0 focus:ring-offset-0 border-gray-300">
					<div className="flex gap-2">
						<span className="font-normal">Sort by:</span> <SelectValue placeholder="Choose here" />
					</div>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="price_desc">Price: High to Low</SelectItem>
						<SelectItem value="price_aesc">Price: Low to High</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
};

export default memo(SortProducts);
