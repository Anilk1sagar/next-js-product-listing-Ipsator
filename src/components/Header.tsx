import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className="min-h-[var(--header-height)] border-b-[1px] border-gray-200 flex items-center px-10 shadow-sm">
			<div className="container flex justify-between items-center">
				<div className='font-bold'>Brand Name</div>

				<nav className='flex gap-3 text-sm'>
					<Link href="/products">Products</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
