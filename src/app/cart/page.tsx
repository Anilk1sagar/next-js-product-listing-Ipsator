'use client';

import { useAppSelector } from '@/store/hooks';
import React from 'react';
import EmptyCart from './_components/EmptyCart';
import PaymentCard from './_components/PaymentCard';
import CartItemCard from './_components/CartItemCard';

const CartPage = () => {
	const { cart } = useAppSelector((state) => state.cart);

	if (cart.length === 0) {
		return <EmptyCart />;
	}

	return (
		<div className="flex-1 flex flex-col pt-5 pb-20">
			<section className="flex-1">
				<div className="container max-w-[980px]">
					<div className="mb-5">
						<h1 className="text-3xl font-semibold">Cart </h1>
						<p className="text-gray-600">Total {cart.length} items</p>
					</div>

					<div className="flex gap-10">
						<div className="flex-1">
							<div className="flex flex-col gap-4">
								{cart.map((item) => (
									<CartItemCard key={item.id} product={item} />
								))}
							</div>
						</div>

						<div className="basis-[320px]">
							<PaymentCard cart={cart} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CartPage;
