import { cn } from '@/lib/utils';
import React, { memo } from 'react';

const PaginationButton = (
	props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
	const { children, className, ...restProps } = props;

	return (
		<button
			className={cn(
				'flex gap-1 items-center font-semibold border border-gray-300 hover:border-gray-400 px-2.5 py-1 text-sm max-sm:text-xs rounded disabled:opacity-70 disabled:hover:border-gray-300 disabled:cursor-default',
				className
			)}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default memo(PaginationButton);
