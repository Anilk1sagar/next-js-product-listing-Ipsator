import React from 'react';

type Props = Readonly<{
	children: React.ReactNode;
}>;

const ProductsLayout = ({ children }: Props) => {
	return <>{children}</>;
};

export default ProductsLayout;
