import { Product } from '@/types/product';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
	product: Product;
};

const ProductCard = (props: Props) => {
	const { product } = props;

	return (
		<div className="w-full border border-gray-300 rounded-sm">
			<div className="flex justify-center items-center h-[200px] relative bg-gray-50">
				<Image
					src={product.image}
					alt={product.title}
					width={100}
					height={200}
					className="w-auto h-full"
					loader={() => product.image}
				/>

				<div
					className="flex gap-1 item-center absolute bottom-1 left-2 text-xs px-1 font-semibold rounded-sm"
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
				>
					<span className="flex gap-1 items-center">
						{product.rating.rate} <Star className="text-green-600 w-3" />{' '}
					</span>
					<span className="flex gap-1 items-center">| {product.rating.count}</span>
				</div>
			</div>

			<div className="mt-2 p-2 text-sm flex flex-col gap-2">
				<p className="font-semibold">{product.title}</p>
				<p className="text-gray-500 text-xs" title={product.description}>{product.description.slice(0, 90)}...</p>
				<p className="font-semibold">Rs. {product.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
