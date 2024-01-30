import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Products Listing App',
	description: 'Products Listing App',
};

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main className="main-content w-full pt-5 px-10">{children}</main>
			</body>
		</html>
	);
}
