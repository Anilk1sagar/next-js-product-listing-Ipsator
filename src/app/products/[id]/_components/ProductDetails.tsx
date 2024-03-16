'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart } from '@/store/slices/cart';
import type { Product } from '@/types/product';
import { ArrowLeftRight, HandCoins, Minus, Plus, ShoppingBag, Star, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

type Props = {
	product: Product;
};

const ProductDetails = (props: Props) => {
	const { product } = props;
	const router = useRouter();
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart.cart);

	const [quantity, setQuantity] = useState<number>(1);

	const isInCart = useMemo(() => {
		return !!cart.find((item) => item.id === product.id);
	}, [cart, product.id]);

	const handleAddToBag = () => {
		if (isInCart) {
			return router.push('/cart');
		}

		dispatch(addToCart({ ...product, quantity: quantity }));
	};

	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold max-md:text-xl max-sm:text-lg">{product.title}</h1>

			<div className="w-max flex gap-1 item-center px-2 py-[1px] rounded-[2px] border border-gray-300 hover:border-gray-500">
				<span className="flex gap-1 items-center font-semibold">
					{product.rating.rate} <Star className="text-green-600 fill-green-600 w-3" />{' '}
				</span>
				<span className="flex gap-1 items-center text-gray-600">| {product.rating.count} Ratings</span>
			</div>

			<p className="text-gray-600 max-sm:text-sm">{product.description}</p>

			<hr />

			<div>
				<p className="text-xl font-bold">
					<span className="text-gray-500">MRP</span>&nbsp; ₹ {product.price.toFixed(2)}{' '}
				</p>
				<p className="mt-1 text-green-600 font-bold text-sm">inclusive of all taxes</p>
			</div>

			<div className="!my-6 border border-gray-400 rounded-sm flex gap-6 w-max px-2 py-2 font-semibold select-none">
				<Button
					className="p-0 size-auto border-0 bg-transparent hover:bg-transparent text-gray-800 hover:text-foreground"
					variant="outline"
					size="icon"
					onClick={() => setQuantity((prev) => prev - 1)}
					disabled={quantity === 1 || isInCart}
				>
					<Minus size={16} />
				</Button>

				<span>{quantity}</span>

				<Button
					className="p-0 size-auto border-0 bg-transparent hover:bg-transparent text-gray-800 hover:text-foreground"
					variant="outline"
					size="icon"
					onClick={() => setQuantity((prev) => prev + 1)}
					disabled={quantity === 10 || isInCart}
				>
					<Plus size={16} />
				</Button>
			</div>

			<div>
				<Button
					className="uppercase h-12 rounded-sm w-full font-semibold text-md"
					onClick={() => handleAddToBag()}
				>
					{isInCart ? (
						<>Go to bag</>
					) : (
						<>
							<ShoppingBag className="mr-2" size={16} /> Add to Bag
						</>
					)}
				</Button>
			</div>

			<hr className="!my-6" />

			<div className="space-y-5">
				<p className="uppercase font-bold flex gap-3 items-center">
					<span>DELIVERY OPTIONS</span> <Truck size={24} strokeWidth={1} />
				</p>

				<div className="flex gap-5 items-center">
					<Truck className="text-gray-500" size={34} strokeWidth={1.5} />{' '}
					<div className="font-bold text-gray-800">Get it by Thu, Mar 21</div>
				</div>
				<div className="flex gap-5 items-center">
					<HandCoins className="text-gray-500" size={34} strokeWidth={1.5} />{' '}
					<div className="font-bold text-gray-800">Pay on delivery available</div>
				</div>
				<div className="flex gap-5 items-center">
					<ArrowLeftRight className="text-gray-500" size={34} strokeWidth={1.5} />{' '}
					<div className="font-bold text-gray-800">Easy 14 days return & exchange available</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
