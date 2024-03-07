import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { fontInter } from '@/utils/fonts';

export const metadata: Metadata = {
	title: 'Shopping Project',
	description: 'Nextjs and Typescript Shopping Project',
};

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={cn('font-sans antialiased', fontInter.className)}>
				<Header />
				<main className="main-content w-full pt-5 px-10">{children}</main>
			</body>
		</html>
	);
}
