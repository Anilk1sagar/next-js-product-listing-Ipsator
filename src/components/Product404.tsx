import Image from 'next/image';
import React from 'react';

const Product404 = () => {
	return (
		<div className="h-full flex-1 container flex flex-col items-center justify-center gap-3">
			<Image src="/assets/images/product-404.png" alt="product-404" width={228} height={61} />

			<p className="mt-12 text-3xl font-[500]">We couldn't find any matches!</p>
			<p className=" text-sm text-gray-400">Please check the spelling or try searching something else</p>
		</div>
	);
};

export default Product404;
