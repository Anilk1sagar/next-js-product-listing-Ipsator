import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EmptyCart = () => {
	return (
		<div className="flex-1 container flex flex-col items-center justify-center gap-3">
			<Image src="/assets/images/product-404.png" alt="product-404" width={228} height={61} />

			<p className="mt-12 text-2xl font-[600]">Hey, it feels so light!</p>
			<p className=" text-sm text-gray-500">There is nothing in your bag. Let's add some items.</p>

			<Link href="/products">
				<Button className="mt-5 uppercase rounded-sm" variant="outlinePrimary">
					Add items from products
				</Button>
			</Link>
		</div>
	);
};

export default EmptyCart;
