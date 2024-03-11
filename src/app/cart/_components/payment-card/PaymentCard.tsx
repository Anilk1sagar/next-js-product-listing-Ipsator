import { Button } from '@/components/ui/button';
import { CartProduct } from '@/store/slices/cart';
import React, { useMemo } from 'react';
import CouponField from './CouponField';

type Props = {
	cart: CartProduct[];
};

const PaymentCard = (props: Props) => {
	const { cart } = props;

	const totalCartAmount = useMemo(() => {
		return cart.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
	}, [cart]);

	return (
		<div className="p-4 w-full bg-white border border-gray-200 rounded">
			<CouponField />

			<hr className="my-4" />

			<p className="mb-3 uppercase text-xs font-bold text-gray-500">Price details ({cart.length} item)</p>

			<div className="space-y-2 text-sm">
				<div className="flex items-center justify-between text-gray-700">
					<span>Total MRP</span>
					<span>Rs. {totalCartAmount.toFixed(2)}</span>
				</div>
				<div className="flex items-center justify-between text-gray-700">
					<span>Coupon Discount</span>
					<span className="text-red-500">- Rs. {400}</span>
				</div>
				<div className="flex items-center justify-between text-gray-700">
					<span>Platform Fee</span>
					<span>Rs. {20}</span>
				</div>
				<div className="flex items-center justify-between text-gray-700">
					<span>Shipping Fee</span>
					<span className="text-green-500">FREE</span>
				</div>
			</div>

			<hr className="my-3" />

			<div className="flex items-center font-bold justify-between text-gray-700">
				<span>Total Amount</span>
				<span>Rs. {totalCartAmount.toFixed(2)}</span>
			</div>

			<hr className="mt-3 mb-4" />

			<div>
				<Button className="uppercase rounded-sm w-full font-bold">Place Order</Button>
			</div>
		</div>
	);
};

export default PaymentCard;
