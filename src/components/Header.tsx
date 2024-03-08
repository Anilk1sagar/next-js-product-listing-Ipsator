'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';

const NavLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Products', href: '/products' },
	{ label: 'Men', href: '/' },
	{ label: 'Women', href: '/' },
	{ label: 'Kids', href: '/' },
];

const Header = () => {
	const cart = useAppSelector((state) => state.cart.cart);
	const currentRoute = usePathname();

	return (
		<header className="min-h-[var(--header-height)] flex items-center shadow fixed top-0 left-0 w-full bg-white z-50">
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

				<nav className="flex items-center gap-5">
					{NavLinks.map((navLink) => (
						<Link
							href={navLink.href}
							key={navLink.href}
							className={currentRoute === navLink.href ? 'text-primary' : ''}
						>
							{navLink.label}
						</Link>
					))}

					<Link href="/cart" className="flex gap-1">
						<div className="relative">
							<ShoppingCart size={22} strokeWidth={1.5} />
							{cart.length > 0 && (
								<div className="absolute -top-[12px] -right-[10px] w-4 h-4 rounded-full flex items-center justify-center text-[0.7rem] bg-destructive text-destructive-foreground">
									{cart.length > 9 ? '9+' : cart.length}
								</div>
							)}
						</div>
						<span>Cart</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
