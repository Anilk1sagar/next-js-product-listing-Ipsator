'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
	const currentRoute = usePathname();

	return (
		<header className="min-h-[var(--header-height)] border-b-[1px] border-gray-200 flex items-center px-10 shadow-sm">
			<div className="container flex justify-between items-center">
				<div className="font-bold">
					<Image src="/assets/images/Ipsator_logo.svg" alt="Ipsator_logo" width={89} height={26} />
				</div>

				<nav className="flex gap-3 text-sm">
					<Link href="/products" className={currentRoute === '/products' ? 'font-semibold' : ''}>
						Products
					</Link>
					{/* <Link href="/cart" className={currentRoute === '/cart' ? 'font-[500]' : ''}>
						Cart
					</Link> */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
