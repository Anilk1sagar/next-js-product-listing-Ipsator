'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import Search from './Search';
import { cn } from '@/lib/utils';
import NavMenu from './NavMenu';

const Header = () => {
	const cart = useAppSelector((state) => state.cart.cart);
	const currentRoute = usePathname();
	const headerRef = useRef<HTMLElement | null>(null);
	const scrollBarWidth = useRef<number>();
	const [isBodyScrollLocked, setIsBodyScrollLocked] = useState(false);

	useLayoutEffect(() => {
		scrollBarWidth.current = window.innerWidth - document.documentElement.clientWidth;
	}, []);

	useEffect(() => {
		const observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.type === 'attributes') {
					setIsBodyScrollLocked(document.body.hasAttribute('data-scroll-locked'));
				}
			});
		});
		observer.observe(document.body, { attributes: true });
	}, []);

	useEffect(() => {
		const headerElem = headerRef.current;
		if (headerElem) {
			headerElem.style.paddingRight = isBodyScrollLocked ? `${scrollBarWidth.current}px` : '0px';
		}
	}, [isBodyScrollLocked]);

	return (
		<header
			className="min-h-[var(--header-height)] flex items-center shadow fixed top-0 left-0 w-full bg-white z-50"
			ref={headerRef}
		>
			<div className="container flex justify-between items-center gap-20 max-lg:gap-10">
				<div className="h-[30px] shrink-0">
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

				<div className="flex-1 flex items-center gap-8 justify-between max-md:gap-5">
					<NavMenu currentRoute={currentRoute} />

					<div className="flex-1 justify-end flex items-center gap-8 max-lg:gap-5">
						<Search />

						<Link
							href="/cart"
							className={cn('flex gap-1 font-semibold', currentRoute === '/cart' ? 'text-primary' : '')}
						>
							<div className="relative">
								<ShoppingCart size={22} strokeWidth={1.5} />
								{cart.length > 0 && (
									<div className="font-bold absolute -top-[9px] -right-[8px] w-4 h-4 rounded-full flex items-center justify-center text-[12px] leading-[13px] bg-destructive text-destructive-foreground">
										{cart.length > 9 ? '9+' : cart.length}
									</div>
								)}
							</div>
							<span className="max-md:hidden">Cart</span>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
