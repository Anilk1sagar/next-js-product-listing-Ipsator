import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';

const Footer = () => {
	return (
		<footer className="pt-10 pb-5 bg-secondary text-secondary-foreground">
			<div className="container flex justify-between items-center">
				<div className="h-[30px]">
					<Link href="/">
						<Image
							src="/assets/images/brand-logo.svg"
							alt="brand-logo"
							className="w-auto h-full"
							width={85}
							height={30}
						/>
					</Link>
				</div>

				<nav className="flex gap-3 text-sm">
					<Link href="/products">Products</Link>
					{/* <Link href="/cart" className={currentRoute === '/cart' ? 'font-[500]' : ''}>
						Cart
					</Link> */}
				</nav>
			</div>
		</footer>
	);
};

export default memo(Footer);
