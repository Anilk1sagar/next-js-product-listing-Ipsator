'use client';

import React, { useRef } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const NavLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Products', href: '/products' },
	{ label: 'Men', href: '/' },
	{ label: 'Women', href: '/' },
	{ label: 'Kids', href: '/' },
];

type Props = {
	currentRoute: string;
};

const NavMenu = (props: Props) => {
	const { currentRoute } = props;
	const navbarBoxRef = useRef<HTMLDivElement | null>(null);

	const handleMenuClick = () => {
		// const elem = navbarBoxRef.current;
		// if (!elem) return;
		// if (elem.classList.contains('max-md:translate-x-full')) {
		// 	elem.classList.remove('max-md:translate-x-full');
		// } else {
		// 	elem.classList.add('max-md:translate-x-full');
		// }
	};

	return (
		<div className="max-md:order-2">
			<div
				className="max-md:fixed max-md:top-[var(--header-height)] max-md:right-0 max-md:translate-x-full max-md:transition-transform max-md:h-full max-md:max-w-[250px] max-md:bg-white max-md:z-40 max-md:shadow-lg"
				ref={navbarBoxRef}
			>
				<nav className="flex items-center gap-5 font-semibold">
					{NavLinks.map((navLink) => (
						<Link
							href={navLink.href}
							key={navLink.href}
							className={currentRoute === navLink.href ? 'text-primary' : ''}
						>
							{navLink.label}
						</Link>
					))}
				</nav>
			</div>

			<button className="hidden max-md:block" onClick={handleMenuClick}>
				<Menu size={20} />
			</button>
		</div>
	);
};

export default NavMenu;
