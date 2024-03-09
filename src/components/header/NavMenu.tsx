'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

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

	const [isSheetOpen, setIsSheetOpen] = useState(false);

	return (
		<div className="max-md:order-2">
			<nav className="max-md:hidden flex items-center gap-5 font-semibold">
				{NavLinks.map((navLink) => (
					<Link
						href={navLink.href}
						key={navLink.label}
						className={currentRoute === navLink.href ? 'text-primary' : ''}
					>
						{navLink.label}
					</Link>
				))}
			</nav>

			<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
				<SheetTrigger className="hidden max-md:block" onClick={() => setIsSheetOpen(true)}>
					<Menu size={20} />
				</SheetTrigger>
				<SheetContent className="w-[280px]">
					<nav className="flex flex-col gap-1 font-semibold">
						{NavLinks.map((navLink) => (
							<Link
								href={navLink.href}
								key={navLink.label}
								className={cn(
									'px-3 py-2 hover:bg-[#F9EBE7] rounded transition-colors',
									currentRoute === navLink.href ? 'bg-primary text-primary-foreground hover:bg-primary' : ''
								)}
								onClick={() => setIsSheetOpen(false)}
							>
								{navLink.label}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default NavMenu;
