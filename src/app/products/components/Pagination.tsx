import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import PaginationButton from './PaginationButton';

const Pagination = () => {
	return (
		<div className="mt-4 flex justify-center gap-4">
			<PaginationButton>
				<ChevronLeft /> Previous
			</PaginationButton>

			<PaginationButton className="flex gap-2 font-semibold">
				Next <ChevronRight />
			</PaginationButton>
		</div>
	);
};

export default Pagination;
