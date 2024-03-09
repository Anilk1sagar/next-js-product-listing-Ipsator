import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';
import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import SubscribeNewsletter from './SubscribeNewsletter';

const BankCards = [
	{ img: 'bank-visa.png', alt: 'bank-visa' },
	{ img: 'bank-mc.png', alt: 'bank-master' },
	{ img: 'bank-rupay.png', alt: 'bank-rupay' },
	{ img: 'bank-paypal.png', alt: 'bank-paypal' },
	{ img: 'bank-bhim.png', alt: 'bank-bhim' },
];

const Socials = [
	{ name: 'Instagram', url: 'https://www.instagram.com/anil_sagar_3/', icon: Instagram },
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/anilk1sagar/',
		icon: Linkedin,
	},
	{ name: 'GitHub', url: 'https://github.com/Anilk1sagar', icon: Github },
];

const FooterLinks = {
	information: {
		name: 'Information',
		links: [
			{ label: 'My Account', href: '/products' },
			{ label: 'Login', href: '/products' },
			{ label: 'My Cart', href: '/products' },
			{ label: 'Wishlist', href: '/products' },
		],
	},
	services: {
		name: 'Services',
		links: [
			{ label: 'About us', href: '/products' },
			{ label: 'Contact', href: '/products' },
			{ label: 'Privacy Policy', href: '/products' },
			{ label: 'Terms & Conditions', href: '/products' },
		],
	},
};

const Footer = () => {
	return (
		<footer className="bg-secondary text-gray-200">
			<div className="container">
				<div className="py-12 max-sm:py-10 flex justify-between gap-24 max-lg:gap-12 max-md:flex-col max-sm:gap-8">
					<div>
						<div className="mb-4 h-[45px]">
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

						<div className="flex flex-col gap-3 text-sm">
							<a
								className="flex items-center gap-4 w-fit"
								href="mailto:anilsagark3@gmail.com"
								target="_blank"
							>
								<Mail size={19} />
								<span>anilsagark3@gmail.com</span>
							</a>

							<a className="flex items-center gap-4 w-fit" href="tel:917728055098">
								<Phone size={19} />
								<span>(+91) 7728055098</span>
							</a>

							<a className="flex items-center gap-4 w-fit" href="tel:917728055098">
								<MapPin size={19} />
								<span>
									345 Vaishali Nagar Jaipur,
									<br /> Rajasthan 302021
								</span>
							</a>
						</div>
					</div>

					<div className="flex gap-24 max-lg:gap-12 max-md:justify-between max-sm:flex-col max-sm:gap-8">
						<div className="flex gap-16 max-lg:gap-10 max-lg: shrink-0">
							{Object.values(FooterLinks).map((category) => (
								<div key={category.name}>
									<h4 className="font-bold mb-3 text-white">{category.name}</h4>

									<ul className="flex flex-col gap-3 text-sm">
										{category.links.map((link) => (
											<li key={link.label} className="hover:underline">
												<Link href={link.href}>{link.label}</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						<SubscribeNewsletter />
					</div>
				</div>

				<div className="relative py-4 border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center max-sm:flex-col max-sm:gap-4">
					<div className="flex items-center gap-4">
						{Socials.map((social) => (
							<a
								className="hover:text-secondary-foreground transition-opacity"
								key={social.name}
								href={social.url}
								rel="noopener noreferrer"
							>
								<social.icon size={22} />
							</a>
						))}
					</div>

					<div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-sm max-md:relative max-md:translate-x-0 max-md:inset-auto max-md:translate-y-0">
						© {new Date().getFullYear()} All Rights are reserved
					</div>

					<div className="flex gap-2">
						{BankCards.map((bankCard) => (
							<Image
								key={bankCard.alt}
								src={`/assets/images/footer/${bankCard.img}`}
								alt={bankCard.alt}
								className="w-[40px] h-auto rounded"
								width={40}
								height={25}
							/>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default memo(Footer);
