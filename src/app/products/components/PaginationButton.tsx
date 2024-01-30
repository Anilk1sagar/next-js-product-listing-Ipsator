import React from 'react';

const PaginationButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
	const { children, className, ...restProps } = props;

	return (
		<button
			className={`flex gap-1 font-semibold border border-gray-300 hover:border-gray-400 px-4 py-2 rounded ${className}`}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default PaginationButton;
