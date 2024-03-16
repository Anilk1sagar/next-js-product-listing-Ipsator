import React, { useRef, useState } from 'react';
import type { Product } from '@/types/product';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
	product: Product;
};

const ProductImages = (props: Props) => {
	const { product } = props;

	const images = useRef<string[]>(Array(4).fill(product.image)).current;
	const [selectedImgIndx, setSelectedImgIndx] = useState<number>(0);

	return (
		<div className="flex max-md:flex-col gap-5">
			<div className="shrink-0 w-[60px] flex flex-col gap-2 max-md:flex-row max-md:max-w-[300px] max-sm:max-w-[220px] max-md:w-full">
				{images.map((image, index) => (
					<div
						className={cn(
							'rounded-sm border-2 p-[4px] bg-white cursor-pointer',
							selectedImgIndx === index ? 'border-primary cursor-default' : 'border'
						)}
						key={index}
						onClick={() => setSelectedImgIndx(index)}
					>
						<Image
							src={image}
							alt={product.title}
							className="w-auto max-w-full h-auto max-h-full max-md:w-full"
							width={49}
							height={70}
							loader={() => image}
						/>
					</div>
				))}
			</div>

			<div className="bg-white w-full h-[500px] max-md:h-auto flex items-center justify-center p-5 max-md:-order-1">
				<Image
					src={images[selectedImgIndx]}
					alt={product.title}
					className="w-auto max-w-full h-auto max-h-full max-md:max-w-[80%] max-sm:max-w-full"
					width={500}
					height={500}
					loader={() => images[selectedImgIndx]}
				/>
			</div>
		</div>
	);
};

export default ProductImages;
