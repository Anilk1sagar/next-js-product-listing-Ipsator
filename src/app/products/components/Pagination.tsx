import React, { memo } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import PaginationButton from './PaginationButton';
import { Product } from '@/types/product';

type Props = {
	itemsPerPage: number;
	products: Product[];
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = (props: Props) => {
	const { itemsPerPage, products, currentPage, setCurrentPage } = props;
	const totalPages = Math.ceil(products.length / itemsPerPage);

	const selectPageHandler = (selectedPage: number) => {
		if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== currentPage) {
			setCurrentPage(selectedPage);

			// Scroll to top when page changes (most useful for mobile devices)
			setTimeout(() => {
				window.scroll({ top: 0, left: 0, behavior: 'auto' });
			});
		}
	};

	return (
		<div className="mt-8 flex justify-center gap-3 max-sm:gap-2">
			<PaginationButton disabled={currentPage <= 1} onClick={() => selectPageHandler(currentPage - 1)}>
				<ChevronLeft className="w-5" /> Previous
			</PaginationButton>

			{[...Array(totalPages)].map((_, index) => (
				<PaginationButton
					key={index}
					disabled={currentPage === index + 1}
					onClick={() => selectPageHandler(index + 1)}
				>
					{index + 1}
				</PaginationButton>
			))}

			<PaginationButton
				disabled={currentPage >= totalPages}
				onClick={() => selectPageHandler(currentPage + 1)}
			>
				Next <ChevronRight className="w-5" />
			</PaginationButton>
		</div>
	);
};

export default memo(Pagination);
