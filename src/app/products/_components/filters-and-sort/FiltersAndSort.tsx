'use client';

import React, { memo } from 'react';
import SortProducts from './SortProducts';
import FilterByCategories from './filter-products/FilterByCategories';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { Product } from '@/types/product';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';
import { setProducts } from '@/store/slices/products';

type Props = {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const FiltersAndSort = (props: Props) => {
	const { setCurrentPage } = props;

	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.products);

	const handleSetFilteredProducts = (data: Product[]) => {
		dispatch(setProducts(data));
	};

	return (
		<div className="basis-[260px] max-lg:basis-[250px] max-[900px]:basis-full">
			<div className="p-5 max-[900px]:p-0 max-[900px]:bg-transparent max-[900px]:border-0 max-[900px]:justify-end rounded border bg-white flex flex-col max-[900px]:flex-row gap-6 max-[900px]:gap-3">
				<SortProducts products={products.data!} setProducts={handleSetFilteredProducts} />

				<div className="max-[900px]:hidden">
					<FilterByCategories
						setProducts={handleSetFilteredProducts}
						onFilterChange={() => setCurrentPage(1)}
					/>
				</div>

				<Sheet>
					<SheetTrigger className="px-3 py-2 rounded-md text-sm bg-white hidden max-[900px]:flex gap-2 items-center border border-gray-300 justify-center">
						Filters <Filter size={16} className="text-gray-800" />
					</SheetTrigger>
					<SheetContent className="w-[280px]">
						<FilterByCategories
							setProducts={handleSetFilteredProducts}
							onFilterChange={() => setCurrentPage(1)}
						/>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default memo(FiltersAndSort);
