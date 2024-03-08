import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { fontAssistant } from '@/utils/fonts';
import AppStoreProvider from '@/store/appStoreProvider';
import { Toaster } from '@/components/ui/toast/toaster';
import Footer from '@/components/Footer';

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
			<body className={cn('antialiased', fontAssistant.className)}>
				<AppStoreProvider>
					<Header />
					<main className="main-content">
						<div className="container pt-5">{children}</div>
					</main>
					<Footer />
				</AppStoreProvider>

				<Toaster />
			</body>
		</html>
	);
}
