import React from 'react';

type Props = Readonly<{
	children: React.ReactNode;
}>;

const CartLayout = ({ children }: Props) => {
	return <>{children}</>;
};

export default CartLayout;
