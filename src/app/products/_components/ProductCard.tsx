'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart } from '@/store/slices/cart';
import { Product } from '@/types/product';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { memo } from 'react';

type Props = {
	product: Product;
};

const ProductCard = (props: Props) => {
	const { product } = props;
	const router = useRouter();
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart.cart);

	const handleCardClick = () => {
		router.push(`/products/${product.id}`);
	};

	const isInCart = () => {
		return !!cart.find((item) => item.id === product.id);
	};

	return (
		<>
			<div
				className="flex flex-col w-full p-4 bg-white border border-gray-200 rounded-sm hover:shadow transition-shadow cursor-pointer"
				onClick={handleCardClick}
			>
				<div className="mb-4 flex justify-center items-center h-[200px] relative rounded-sm">
					<Image
						src={product.image}
						alt={product.title}
						width={100}
						height={200}
						className="w-auto max-h-full h-auto"
						loader={() => product.image}
					/>

					<div
						className="flex gap-1 item-center absolute bottom-1 left-2 text-xs px-2 font-semibold rounded-sm"
						style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
					>
						<span className="flex gap-1 items-center">
							{product.rating.rate} <Star className="text-green-600 fill-green-600 w-3" />{' '}
						</span>
						<span className="flex gap-1 items-center">| {product.rating.count}</span>
					</div>
				</div>

				<div className="flex-1 mt-1 flex flex-col gap-2">
					<p className="font-semibold text-sm">{product.title}</p>
					<p className="mb-4 text-gray-500 text-xs line-clamp-2" title={product.description}>
						{product.description}
					</p>

					<div className="mt-auto flex flex-wrap gap-2 justify-between items-center">
						<p className="shrink-0 font-semibold flex flex-col leading-[0.9rem]">
							<span className="text-xs line-through text-gray-400">
								Rs. {(product.price + 10).toFixed(2)}
							</span>
							<span>Rs. {product.price}</span>
						</p>

						<div className="font-semibold">
							{isInCart() ? (
								<Button
									className="rounded-sm"
									size="xs"
									variant="outlinePrimary"
									onClick={(e) => {
										e.stopPropagation();
										dispatch(removeFromCart(product.id));
									}}
								>
									Remove <ShoppingCart className="ml-1" size={16} />
								</Button>
							) : (
								<Button
									className="px-3"
									size="xs"
									onClick={(e) => {
										e.stopPropagation();
										dispatch(addToCart(product));
									}}
								>
									Add <ShoppingCart className="ml-1" size={16} />
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(ProductCard);
