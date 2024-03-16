'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/store/hooks';
import { type CartProduct, removeFromCart, addQuantity, removeQuantity } from '@/store/slices/cart';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
	product: CartProduct;
};
const CartItemCard = (props: Props) => {
	const { product } = props;
	const dispatch = useAppDispatch();

	return (
		<div className="p-4 w-full bg-white border border-gray-200 rounded relative">
			<Button
				className="p-0 size-auto border-0 bg-transparent hover:bg-transparent absolute top-2 right-2"
				variant="outline"
				size="icon"
				onClick={() => dispatch(removeFromCart(product.id))}
			>
				<X className="text-gray-500 hover:text-foreground" size={20} />
			</Button>

			<div className="pr-5 flex gap-4 max-sm:flex-col">
				<div className="basis-[150px] w-full max-lg:basis-[100px] max-md:basis-[150px] max-sm:w-full max-h-[140px] flex justify-center items-center bg-gray-50">
					<Image
						src={product.image}
						alt={product.title}
						width={250}
						height={200}
						className="w-auto max-w-full h-auto max-h-full"
						loader={() => product.image}
					/>
				</div>

				<div className="flex-1 flex flex-col gap-3">
					<div>
						<p className="font-semibold text-sm">{product.title}</p>
						<p className="text-gray-500 text-xs line-clamp-2" title={product.description}>
							{product.description}
						</p>
					</div>

					<div className="flex gap-2 items-center text-sm">
						<p>Qantity:</p>
						<div className="border boder-gray-400 rounded-md flex gap-2 w-max px-1 py-1 font-semibold">
							<Button
								className="p-0 size-auto border-0 bg-transparent hover:bg-transparent text-gray-800 hover:text-foreground"
								variant="outline"
								size="icon"
								onClick={() => dispatch(removeQuantity(product.id))}
								disabled={product.quantity === 1}
							>
								<Minus size={16} />
							</Button>

							<span>{product.quantity}</span>

							<Button
								className="p-0 size-auto border-0 bg-transparent hover:bg-transparent text-gray-800 hover:text-foreground"
								variant="outline"
								size="icon"
								onClick={() => dispatch(addQuantity(product.id))}
								disabled={product.quantity === 10}
							>
								<Plus size={16} />
							</Button>
						</div>
					</div>

					<div className="mt-auto flex flex-wrap gap-2 justify-between items-center">
						<p className="shrink-0 font-semibold flex flex-col leading-[0.9rem]">
							<span className="text-xs line-through text-gray-400">
								Rs. {(product.price * product.quantity + 10).toFixed(2)}
							</span>
							<span>Rs. {(product.price * product.quantity).toFixed(2)}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItemCard;
