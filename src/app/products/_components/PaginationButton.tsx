import React, { memo } from 'react';

const PaginationButton = (
	props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
	const { children, className, ...restProps } = props;

	return (
		<button
			className={`flex gap-1 items-center font-semibold border border-gray-300 hover:border-gray-400 px-4 max-sm:px-3 py-2 max-sm:py-1.5 text-sm max-sm:text-xs rounded disabled:opacity-70 disabled:hover:border-gray-300 ${className}`}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default memo(PaginationButton);
