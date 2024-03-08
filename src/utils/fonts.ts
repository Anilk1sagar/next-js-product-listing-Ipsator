import { Assistant } from 'next/font/google';

export const fontAssistant = Assistant({
	weight: ['300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-assistant',
	fallback: ['-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
});
